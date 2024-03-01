import supabase from "./client";

async function signInWithGoogle() {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: { redirectTo: "http://127.0.0.1:5173/parks"}
  })
  if (error) { 
    console.log(error)
  }
}

async function signInWithEmail() {

}

async function getSession() {
  const { session, error } = await supabase.auth.getSession()
  if (error) { 
    console.log(error)
  }
  return  session
}

export {
  signInWithGoogle,
  signInWithEmail,
  getSession,
}