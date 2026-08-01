"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required").max(100),
  email: z.string().email("Invalid email address"),
  projectType: z.string().min(2, "Project type is required").max(100),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  const rawData = {
    name: formData.get("name"),
    email: formData.get("email"),
    projectType: formData.get("projectType"),
    message: formData.get("message"),
  };

  const validated = contactSchema.safeParse(rawData);

  if (!validated.success) {
    return {
      success: false,
      errors: validated.error.flatten().fieldErrors,
    };
  }

  return { success: true, message: "Thank you! Your inquiry has been sent." };
}
