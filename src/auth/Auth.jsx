import supabase from '../lib/supabase/client'
import Login from './components/Login'


export default function Auth() {
  const { data } = supabase.auth.onAuthStateChange((event, session) => {
    if (event === "SIGNED_IN") { }
    if (event === "SIGNED_OUT") { }
  })
  data.subscription.unsubscribe()

  return (
    <div className='flex'>
      <Login />
    </div>
  )
}
