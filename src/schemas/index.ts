import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export const RegisterSchema = z
  .object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
    confirmPassword: z.string().min(6, { message: "Confirm password is required" }),
    name: z.string().min(1, { message: "Name is required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
export const ForgotPasswordSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
});
export const ResetPasswordSchema = z
  .object({
    password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
    confirmPassword: z.string().min(6, { message: "Confirm password is required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
  });
export const ChangePasswordSchema = z
  .object({
    currentPassword: z.string().min(6, { message: "Current password is required" }),
    newPassword: z.string().min(6, { message: "New password must be at least 6 characters long" }),
    confirmNewPassword: z.string().min(6, { message: "Confirm new password is required" }),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: "New passwords do not match",
  });
