import argon2 from "argon2";
import { createWriteStream } from "fs";
import { FileUpload, GraphQLUpload } from 'graphql-upload';
import path from 'path';
import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { v4 as uuidv4 } from 'uuid';
import { COOKIE_NAME } from "../constants";
import { Cart } from "../entities/Cart";
import { User } from "../entities/User";
import { TokenModel } from "../models/Token";
import { UserPendingModel } from "../models/userPending";
import { Context } from "../types/Context/Context";
import { ChangePasswordInput } from "../types/User/ChangePasswordInput";
import { ForgotPasswordInput } from "../types/User/ForgotPasswordInput";
import { LoginInput } from "../types/User/LoginInput";
import { RegisterInput } from "../types/User/RegisterInput";
import { UserMutationResponse } from "../types/User/UserMutationResponse";
import { ValidateChangePasswordInput } from "../untils/Validate/ValidateChangePasswordInput";
import { ValidateRegisterInput } from "../untils/Validate/ValidateRegisterInput";

@Resolver(_of => User)
export class UserResolver {

    @Query(_return => User, {nullable : true})
    async MyProfile(
        @Ctx() {req} : Context
    ): Promise<User | undefined | null>{
        if(!req.session.userId) return null
        const user = await User.findOne(req.session.userId)
        return user
    }

    @Mutation(_return => UserMutationResponse,{ nullable : true})
    async Register (
        @Arg('registerInput') registerInput : RegisterInput,
    ) : Promise<UserMutationResponse>{
        const validateRegisterInputErros = ValidateRegisterInput(registerInput) 
        if(validateRegisterInputErros !== null)
            return {
                code : 400,
                success : false,
                ...validateRegisterInputErros
            } 
        try {
            const { firstName, lastName, email, password, gender} = registerInput
            const existingUser = await User.findOne({
                where : [{email}]
            })
            if(existingUser)
                return {
                    code : 400,
                    success : false,
                    message : 'User has existed. Please using another email',
                    errors : [
                        {
                            field : "Email",
                            message : 'Email already exists'
                        }
                    ]
                }
            const hashPassword = await argon2.hash(password)
            await UserPendingModel.findOneAndDelete({email})
            await new UserPendingModel({
                firstName, 
                lastName,
                email,
                password : hashPassword,
                gender,
            }).save()
            
            return {
                code : 200,
                success : true,
                message : 'Please check your email',
            }
            //sendMail -TODO
        } catch (error) {
            return {
                code : 500,
                success : false,
                message : `Something went wrong in Register : ${error.message}`
            }
        }
    }

    @Mutation(_return => UserMutationResponse, {nullable : true})
    async ActiveUser(
        @Arg('id') id : string,
        @Ctx() {req} : Context
    ):Promise<UserMutationResponse>{
        try {
            const userPending = await UserPendingModel.findById(id)
            if(!userPending)
                return{
                    code : 400,
                    success : false,
                    message : 'Authentication timed out. Please re-register your account',
                    errors : [
                        {
                            field : "TimeOut",
                            message : 'Authentication timed out. Please re-register your account'
                        }
                    ]
                }
            const {firstName, lastName, email, password, gender} = userPending
            const name = firstName + " " + lastName
            const newUser = await User.create({name, email,password,gender})
            await newUser.save()
            await UserPendingModel.findOneAndDelete({id:`${id}`})
            // session
            req.session.userId = newUser.id
            req.session.role = newUser.role

            //create cart
            const existingCart = await Cart.create({userId : req.session.userId,})
            await existingCart.save()
            return {
                code : 200,
                success : true,
                message : 'Register successfully',
                user : newUser
            }
        } catch (error) {
            return {
                code : 500,
                success : false,
                message : `Something went wrong in ActiveUser : ${error.message}`
            }
        }
    }

    @Mutation(_return => UserMutationResponse)
    async Login(
        @Arg('loginInput') {email , password} : LoginInput,
        @Ctx() {req} : Context
    ):Promise<UserMutationResponse>{
        try {
            const existingUser = await User.findOne({email})
            if(!existingUser)
                return {
                    code : 400,
                    success : false,
                    message : 'Email or password incorrect',
                    errors : [
                        {
                            field : 'Email Or Password',
                            message : 'Email or password incorrect'
                        }
                    ]
                }
            
            const passwordValid = await argon2.verify(existingUser.password, password)
            if(!passwordValid)
                return {
                    code : 400,
                    success : false,
                    message : 'Email or password incorrect',
                    errors : [
                        {
                            field : 'Email Or Password',
                            message : 'Email or password incorrect'
                        }
                    ]
                }
            
            req.session.userId = existingUser.id

            return {
                code : 200,
                success : true,
                message : 'Login successfully',
                user : existingUser
            }
        } catch (error) {
            return {
                code : 500,
                success : false,
                message : `Something went wrong in Login : ${error.message}`
            }
        }
        
    }

    @Mutation(_return => Boolean)
    Logout (@Ctx() {req,res} : Context):Promise<boolean>{
        return new Promise((resolve,_reject) => {
            res.clearCookie(COOKIE_NAME)
            req.session.destroy(err => {
                if(err){
                    console.log('Destry session error : ', err.message)
                    resolve(false)
                }
                resolve(true)
            })
        })
    }

    @Mutation(_return => Boolean)
    async ForgotPassword (
        @Arg('forgotPasswordInput') {email} : ForgotPasswordInput
    ) : Promise<boolean>{
        const existingUser = await User.findOne({email})
        if(!existingUser) return true
        await TokenModel.findOneAndDelete({userId : `${existingUser.id}`})
        const resetToken = uuidv4()
        const hashToken = await argon2.hash(resetToken)
        await new TokenModel({
            userId : `${existingUser.id}`,
            token : hashToken
        }).save()

        //sendMail - TODO
        return true
    }

    @Mutation(_return => UserMutationResponse)
    async ChangePassword (
        @Arg('changePasswordInput') changePasswordInput : ChangePasswordInput,
        @Ctx() {req} : Context
    ):Promise<UserMutationResponse>{
        const validateChangePasswordInput = ValidateChangePasswordInput(changePasswordInput)
        if(validateChangePasswordInput !== null)
            return {
                code : 400,
                success : false,
                ...validateChangePasswordInput
            }
        try {
            const existingUser = await User.findOne({id : req.session.userId})
            if(existingUser){
            const passwordValid = await argon2.verify(existingUser.password, changePasswordInput.currentPassword)
            if(!passwordValid){
                return{
                    code : 400,
                    success : false,
                    message : 'Current password not correct!',
                    errors : [
                        {
                            field : "currentPassword",
                            message : 'Current password not correct!'
                        }
                    ]
                }
            }
        }

            const updatePassword = await argon2.hash(changePasswordInput.newPassword)
            await User.update({id : req.session.userId}, {password : updatePassword})
            return{
                code : 200,
                success : true,
                message : 'Change Password Successfully'
            }
            
        } catch (error) {
            return {
                code : 400,
                success : false,
                message : 'Something went wrong in ChangePassword : '
            }
        }
    }

    @Mutation(_return => UserMutationResponse)
    async ChangeAvatar(
        @Arg('avatar', () => GraphQLUpload) {createReadStream,filename} : FileUpload,
        @Ctx() {req} : Context
    ): Promise<UserMutationResponse>{
        try {
            console.log(filename)
            const existingUser = await User.findOne({id : req.session.userId})
            if(!existingUser)
                return {
                    code : 400,
                    success : false,
                    message : 'User not found',
                    errors : [
                        {
                            field : 'User',
                            message : 'User not found'
                        }
                    ]
                }
            const pathName = path.join(__dirname, `public/image/${filename}`)
            await createReadStream().pipe(createWriteStream(pathName))

            const avatar = `http://localhost:5000/image/${filename}`
            console.log(avatar)
            await User.update({id : existingUser.id}, {avatar})
            return {
                code : 200,
                success : true,
                message : 'Change avatar successfully',
                user : existingUser
            }    
        } catch (error) {
            return {
                code : 400,
                success : false,
                message : 'Something went wrong in ChangeAvatar'
            }
        }
    }
}
