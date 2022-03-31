import { hashSync } from "bcryptjs";

export const admin =
{
    name: "Murilo Dácio",
    email: "murilodacio@gmail.com",
    //@ts-ignore
    password: hashSync("", 8),
    level: 1,
    permissions: "god",
    job_id: "54933856-27cf-473a-ad75-7d20da7f589b"
}
