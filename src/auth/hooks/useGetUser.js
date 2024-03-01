import supabase from '../../lib/supabase/client'
import { useState, useEffect } from 'react'

export default function useGetUser() {
  const [user, setUser] = useState()

  useEffect(() => {
    async function getUser() {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
    }
    getUser()
  //   async function handleAuthStateChange() {
    
  //     const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
  //       if (event === 'SIGNED_IN') {
  //         setUser(session.user.user_metadata)
  //         localStorage.setItem("user", JSON.stringify(session.user.user_metadata))
  //       } else if (event === "SIGNED_OUT") {
  //         localStorage.removeItem("user")
  //       }
  //     })
  //     return () => { authListener.unsubscribe() }
  //   }
  //   handleAuthStateChange()
  }, [])

  return user
}
