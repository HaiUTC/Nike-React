import { Context } from "../types/Context/Context";
import { MiddlewareFn } from "type-graphql";
import { AuthenticationError } from "apollo-server-errors";

export const checkAuthUser : MiddlewareFn<Context> = ({context : {req}}, next) => {
    if(!req.session.userId) throw new AuthenticationError('Not Authenticated')

    return next()
}
export const checkAuthAdmin : MiddlewareFn<Context> = ({context : {req}}, next) => {
    if(!req.session.userId && req.session.role === 'User') throw new AuthenticationError('Not Authorization')
    return next()
}