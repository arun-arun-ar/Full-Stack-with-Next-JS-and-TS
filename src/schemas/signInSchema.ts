import {z} from "ZOD";

export const signInSchema = z.object({
    identifire:z.string(),
    password:z.string(),

})