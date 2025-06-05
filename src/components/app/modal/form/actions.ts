import { AuthTokenResponsePassword } from "@supabase/supabase-js";
import { supabase } from "../../../../utils/supabase/supabase";

export function formActions(type: string) {
  switch (type) {
    case "login": {
      return loginAction;
    }
  }
}

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
