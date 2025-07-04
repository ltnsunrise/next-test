"use server";

import { RegisterSchema } from "@/schemas";
import * as z from "zod";

export const register = async (values: z.infer<typeof RegisterSchema>) =>
  // : Promise<string>
  {
    console.log({ values });

    const validatedValues = RegisterSchema.safeParse(values);

    if (!validatedValues.success) {
      return { error: "Validation failed" };
    }

    return { success: "Login successful" }; // Simulate a successful login response
    // const { email, password } = validatedValues.data;
    // // Simulate a login request
    // const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ email, password }),
    // });
    // if (!response.ok) {
    //   throw new Error("Login failed");
    // }
    // const data = await response.json();
    // return data.token || "Login successful"; // Assuming the response contains a token
  };
