import { object, string, ref } from "yup"

let userSchema = object({
    country: string()
        .required('Please enter your country.')
        .matches(
            /^[a-zA-ZÀ-ÿ\s]+$/,
            'Country must contain only letters and spaces.'
        )
        .min(3, 'Country must be at least 3 characters.')
        .max(25, 'Country must not exceed 25 characters.'),    
    postalCode: string()
        .required('Please enter your postal code.')
        .min(3, 'Postal code must be at least 3 characters.')
        .max(10, 'Postal code must not exceed 10 characters.'),    
    state: string()
        .required('Please enter your state.')
        .matches(
            /^[a-zA-ZÀ-ÿ\s]+$/,
            'State must contain only letters and spaces.'
        )
        .min(3, 'State must be at least 3 characters.')
        .max(50, 'State must not exceed 50 characters.'),
    city: string()
        .required('Please enter your city.')
        .matches(
            /^[a-zA-ZÀ-ÿ\s]+$/,
            'City must contain only letters and spaces.'
        )
        .min(3, 'City must be at least 3 characters.')
        .max(50, 'City must not exceed 50 characters.'),
    streetAddress: string()
        .required('Please enter your street address.')
        .min(5, 'Street address must be at least 5 characters.')
        .max(50, 'Street address must not exceed 50 characters.'),
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