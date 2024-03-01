import { useState } from 'react'
import { FaChevronDown } from "react-icons/fa";
import supabase from '../../lib/supabase/client';

export default function Profilebar({ user: { name } }) {
  const [showDropDown, setShowDropDown] = useState(false)
  const visible = showDropDown ? 'visible' : 'invisible'
  console.log(name, 'name')
  async function handleSignOut() {
    await supabase.auth.signOut()
    window.location.reload()
  }
  return (
    <div 
      className="flex flex-col cursor-pointer relative" 
      onMouseEnter={() => setShowDropDown(true)}
      onMouseLeave={() => setShowDropDown(false)}
    >
      <div className="flex items-center gap-2">
        {name}<FaChevronDown />
      </div>
      <div className={`${visible}`}>
        <div className='absolute bg-white cursor-default'>
          <div className='flex flex-col gap-3 border rounded-md shadow-md p-3'>
            <button>Profile</button>
            <button onClick={() => handleSignOut()} className='bg-emerald-700 border p-1 rounded-md w-24 text-white'>
              Sign out
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
