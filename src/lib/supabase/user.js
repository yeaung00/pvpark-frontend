import supabase from "./client";

async function signInWithGoogle() {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: { redirectTo: "https://pvpark-frontend.vercel.app/parks"}
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