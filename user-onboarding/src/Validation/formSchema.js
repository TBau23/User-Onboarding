import * as yup from 'yup'

const formSchema = yup.object().shape({
    email: yup
        .string()
        .email('Must be a valid email address')
        .required("Must include email address"),
    username: yup
        .string()
        .required('Must enter a username')
        .min("Username must be at least 5 characters long"),
    password: yup
        .string()
        .min('Password must be at least 5 characters long')
        .required('Must enter a password'),
    role: yup
        .string()
        .oneOf(['Hacker-Beast', 'Front-End', 'Back-End'], 'You must select a role')
        .required('You must select a role')
    
})

export default formSchema