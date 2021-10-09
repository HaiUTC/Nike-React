import { FieldError } from "../generated/graphql";

const mapFieldErrors = (errors : FieldError[]) :{ [key: string]: string } => {
    return errors.reduce((errorObject, errors) => ({
        ...errorObject,
        [errors.field] : errors.message
    }))
}
export default mapFieldErrors