import { z } from "zod";

export const comentScheme = z.object({
  userName: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().min(10, "Content must be at least 10 character"),
});

export const registrationSchema = z.object({
  userName: z.string().min(3, "Username must be at least 3 characters"),
  lastName: z.string().min(3, "Last name must be at least 3 characters"),
  email: z.string().email("Email must include @ symbol"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const loginSchema = z.object({
  email: z.string().email("Email must include @ symbol"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});
