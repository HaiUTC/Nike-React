import { Dialog, DialogContent, DialogTitle, Stack } from "@mui/material";
import { useFormik } from "formik";
import Image from 'next/image'
import { useState } from "react";
import StarRatings from "react-star-ratings";
import ButtonSubmit from '../../Atom/Button/Button'
import * as yup from 'yup';
import { FormInputAtom } from "../../Atom/Form/FormInput";
import { useAppDispatch } from "../../../redux/hook";
import {showListComment} from "../../../redux/Comment/showListComment";
const validationSchema = yup.object({
    reviewTitle: yup.string().required('Review Title is required'),
    reviewContent: yup.string().required('Review Content is required'),
})
const ReviewModal = (props) => {
    const dispath = useAppDispatch()
    const [rating, setRating] = useState(5);
    const changeRating = (newRating) => setRating(newRating)
    const initialValues = {star : 5, reviewTitle : "", reviewContent: ""}
    const formik = useFormik({
        initialValues,
        validationSchema: validationSchema,
        onSubmit : async (values) =>{
            props.socket.emit("userCreateComment" ,{
                productId : props.productId,
                title : values.reviewTitle.trim(),
                content : values.reviewContent.trim(),
                star : rating,
                userId : props.user[0].MyProfile.id,
                name : props.user[0].MyProfile.name,
                avatar : props.user[0].MyProfile.avatar,
            })
            props.handleCloseModal()
            dispath(showListComment())
        }
    })
    return (
        <Dialog open={true} maxWidth="md" scroll='body' onClose={props.handleCloseModal}>
            <DialogTitle id="alert-dialog-title">
            <div className="flex flex-col items-center">
                <div><Image src='/static/icons/logo.svg' width="60px" height="60px"/></div>
                <h2 className="text-3xl font-semibold">YOUR REVIEW</h2>
            </div>
            </DialogTitle>
            <DialogContent>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="grid grid-cols-12 py-10">
                            <span id='title_required' className="text-base lg:text-lg lg:pr-4 col-span-4 lg:col-span-2">Rating : </span>
                            <div className='col-span-8 lg:col-span-10'>
                                <StarRatings
                                    starDimension="25px"
                                    starRatedColor="black"
                                    starHoverColor="black"
                                    starSpacing="3px"
                                    numberOfStars={5}
                                    changeRating={changeRating}
                                    rating={rating || 0}
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-12 gap-2">
                            <span id='title_required' className="text-base lg:text-lg lg:pr-4 col-span-4 lg:col-span-2 flex items-center">Review Title: </span>
                            <div className='col-span-8 lg:col-span-10'>
                                <FormInputAtom
                                    focus="true" 
                                    formik={formik} 
                                    value={formik.values.reviewTitle} 
                                    error={formik.touched.reviewTitle && Boolean(formik.errors.reviewTitle)}
                                    helperText={formik.touched.reviewTitle && formik.errors.reviewTitle}
                                    placeholder="Headline or summary for your review" 
                                    id="reviewTitle" 
                                    name='reviewTitle'
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-12 gap-2 pt-8">
                            <span id='title_required' className="text-base lg:text-lg lg:pr-4 col-span-4 lg:col-span-2">Review: </span>
                            <div className='col-span-8 lg:col-span-10'>
                                <FormInputAtom
                                    focus="true" 
                                    formik={formik} 
                                    value={formik.values.reviewContent} 
                                    error={formik.touched.reviewContent && Boolean(formik.errors.reviewContent)}
                                    helperText={formik.touched.reviewContent && formik.errors.reviewContent}
                                    multiline
                                    rows={6}
                                    placeholder="Write your review here.  It must be at least 5 characters long.  Consider whether you would recommend this product and what you like or dislike about it." 
                                    id="outlined-multiline-static"
                                    name='reviewContent'
                                />
                            </div>
                        </div>
                        <div className="text-xs py-6">
                            I understand my rating and review may appear publicly as a Nike
                            Verified Purchase and data I provide may appear with my public
                            review. By clicking Submit, I agree to Privacy Policy, Terms of Use
                            and Terms of Service and I acknowledge that my review may be used
                            for marketing purposes by Nike or its partners.&nbsp;Ratings and
                            reviews submitted by individuals who receive product for free, as
                            part of a sweepstakes or promotion, will be badged accordingly.
                            Ratings and reviews submitted by Nike employees, contracted
                            athletes, or influencers who receive product for free will be badged
                            accordingly.
                        </div>
                        <ButtonSubmit loading={false} type="submit" />
                    </form>
            </DialogContent>
        </Dialog>
    )
}
export default ReviewModal