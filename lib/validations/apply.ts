import * as z from "zod"

export const applicationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^\+?[0-9]{10,}$/, "Invalid phone number"),
  github: z.string().url("Invalid GitHub URL").startsWith("https://github.com/", "Must be a GitHub URL"),
  skills: z.string().min(5, "Please list your key technical skills"),
  message: z.string().min(50, "Please provide a detailed message (minimum 50 characters)")
})

export type ApplicationForm = z.infer<typeof applicationSchema>