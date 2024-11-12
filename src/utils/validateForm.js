import { object, string, ref } from "yup"

let userSchema = object({
    fullName: string()
        .required('Please enter your full name.'),
    email: string()
        .email('Please enter a valid email address.')
        .required('Email is required. Please provide your email address.'),
    c_email: string()
        .oneOf([ref('email'), null], 'The confirmation email must match the email address.')
        .required('Please confirm your email address.'),
    phoneNumber: string()
        .required('Please provide your phone number.')
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