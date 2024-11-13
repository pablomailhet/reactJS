import { object, string, ref } from "yup"

let userSchema = object({
    streetAddress: string()
        .required('Please enter your street address.')
        .min(5, 'Full name must be at least 5 characters.')
        .max(50, 'Full name must not exceed 50 characters.'),
    phoneNumber: string()
        .required('Please provide your phone number.')
        .matches(
            /^\+?[1-9]\d{1,14}$/,
            'Phone number is not valid. It must be a valid international phone number.'
        ),
    c_email: string()
        .required('Please confirm your email address.')
        .oneOf([ref('email'), null], 'The confirmation email must match the email address.'),
    email: string()
        .required('Email is required. Please provide your email address.')
        .email('Please enter a valid email address.'),
    fullName: string()
        .required('Please enter your full name.')
        .matches(
            /^[a-zA-ZÀ-ÿ\s]+$/,
            'Full name must contain only letters and spaces.'
        )
        .min(3, 'Full name must be at least 3 characters.')
        .max(25, 'Full name must not exceed 25 characters.')
})

const validateForm = (dataForm) => {
    try {
        userSchema.validateSync(dataForm)
        return { status: "success" }
    }
    catch (error) {
        return { status: "error", message: error.message }
    }
}

export default validateForm