import { z } from "zod";

export const comentScheme = z.object({
  userName: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().min(10, "Content must be at least 10 character"),
});
