import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(3),
  password: z.string().min(8),
  confirmPassword: z.string().min(8),
  email: z.string().email(),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match"
});