import { Link } from "react-router-dom";
import Profilebar from './components/Profilebar'
import useGetUser from "../auth/hooks/useGetUser";

export default function Navbar() {
  const user = useGetUser()

  console.log(user?.user_metadata, 'USER')
  return (
    <div className='flex justify-between items-center mb-6'>
      <div className="flex items-center gap-6">
        <Link to='/'>
          <img 
            className='w-32 rounded-md'
            src="/public/pvparks.svg" 
            alt="pvparks logo"
          />
        </Link>
      </div>
      <div className="flex ">
        {
          user
          ? <Profilebar user={user?.user_metadata} />
          : <div className="flex">
              <Link to={"/login"} className='text-center border shadow-md p-2 rounded-md text-lg w-24'>
                Login
              </Link>
            </div>
        }
      </div>
    </div>
  )
}