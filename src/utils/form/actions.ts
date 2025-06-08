import { AuthTokenResponsePassword, UserResponse } from "@supabase/supabase-js";

import { supabase } from "../supabase/supabase";

export async function loginAction(
  currentState: AuthTokenResponsePassword,
  formData: FormData,
) {
  const email = formData.get("email")!.toString();
  const password = formData.get("password")!.toString();

  const response = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  return response;
}

export async function updatePasswordAction(
  currentState: UserResponse,
  formData: FormData,
) {
  const new_password = formData.get("password")!.toString();

  const response = await supabase.auth.updateUser({
    password: new_password,
  });

  return response;
}
