import {z} from "ZOD";

export const messageSchema = z.object({
    content:z.string().min(10, 'Message must be at least of 10 chars')
    .max(300, 'Message must be no longer then 300 chars')

})