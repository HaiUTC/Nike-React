import { Dialog, DialogContent, DialogTitle, Stack } from "@mui/material";
import { useFormik } from "formik";
import Image from 'next/image'
import { useState } from "react";
import StarRatings from "react-star-ratings";
import ButtonSubmit from '../../Atom/Button'
import * as yup from 'yup';
import { number } from "yup/lib/locale";
import { FormInputAtom } from "../../Atom/Form/FormInput";
const validationSchema = yup.object({
    reviewTitle: yup.string().required('Review Title is required'),
    reviewContent: yup.string().required('Review is required'),
})
const ReviewModal = ({handleCloseModal}) => {
    const [rating, setRating] = useState(5);
    const changeRating = (newRating) => setRating(newRating)
    const initialValues = {star : 5, reviewTitle : "", reviewContent: ""}
    const formik = useFormik({
        initialValues,
        validationSchema: validationSchema,
        onSubmit : () =>{}
    })
    return (
        <Dialog open={true} maxWidth="md" scroll='body' onClose={handleCloseModal}>
            <DialogTitle id="alert-dialog-title">
            <div className="flex flex-col items-center">
                <div><Image src='/static/icons/logo.svg' width="60px" height="60px"/></div>
                <h2 className="text-3xl font-semibold">YOUR REVIEW</h2>
            </div>
            </DialogTitle>
            <DialogContent>
                    <form>
                        <div className="py-10">
                            <span id='title_required' className="text-lg pr-20">Rating : </span>
                            <StarRatings
                            starDimension="25px"
                            starRatedColor="black"
                            starHoverColor="black"
                            starSpacing="3px"
                            numberOfStars={5}
                            changeRating={changeRating}
                            rating={rating}
                            />
                        </div>
                        <div className="grid grid-cols-12 gap-2">
                            <span id='title_required' className="text-lg pr-4 col-span-2 flex items-center">Review Title: </span>
                            <div className='col-span-10'>
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
                            <span id='title_required' className="text-lg pr-4 col-span-2">Review : </span>
                            <div className='col-span-10'>
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