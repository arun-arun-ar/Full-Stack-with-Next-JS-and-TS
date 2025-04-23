import {z} from "ZOD"



export const usernameValidation = z
                .string()
                .min(4, "Username must contain atleast 4 chars")
                .min(36, "Username must contain maximum 36 chars")
                .regex(/^[a-zA-Z0-9]+$/, "Username must not contain special characters")




export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({message: 'invalid email address'}),
    password: z.string().min(6, {message: "Password should contain at least 6 characters"})
})
