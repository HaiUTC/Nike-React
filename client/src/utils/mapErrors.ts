import { FieldError } from "../generated/graphql";

export const mapFieldErrors = (errors : FieldError[]) :{ [key: string]: string } => {
    return errors.reduce((errorObject, errors) => ({
        ...errorObject,
        [errors.field] : errors.message
    }))
}