import { object, string } from "yup";

export const contactSchema = object({
  firstName: string().required("First Name is required!"),
  lastName: string().required("Last Name is required!"),
  email: string().email("Invalid email format!").required("Email is required!"),
  message: string()
    .min(10, "Message must be at least 10 characters!")
    .max(500, "Message cannot exceed 500 characters!")
    .required("Message is required!"),
});
