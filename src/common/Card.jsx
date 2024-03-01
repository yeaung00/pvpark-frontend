import { IoPerson } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaBuilding } from "react-icons/fa";
import Badges from "./Badges";
import { Link } from "react-router-dom";
import TextPlaceHolder from "./TextPlaceholder";
import ImagePlaceholder from "./ImagePlaceholder";
import useGetPlayerCountInPark from "../parks/hooks/useGetPlayerCountInPark";

export default function Card({ games, buttonText, id, address, categories, image_url, name, }) {
  console.log(games, 'this is games')
  const playerCount = useGetPlayerCountInPark(id, games)
  console.log(playerCount)
  if (!categories) {
    return (
      <div className='w-64 bg-white shadow-md border flex flex-col justify-between gap-1 lg:gap-3 rounded-md p-3 lg:text-xl'>
        <ImagePlaceholder />
        <TextPlaceHolder />
      </div>
    )
  }
  return (
    <div className=' bg-white shadow-md border flex flex-col justify-between gap-1 lg:gap-3 rounded-md p-3 lg:text-xl'>
      <div className="text-lg">
        <img className='mb-2 rounded-md w-full max-h-80 min-h-36 lg:min-h-64' src={image_url} alt={name} />
        <div className="flex">
          <FaBuilding className="text-2xl"/>
          <p>{name}</p>
        </div>
        <div className="flex">
          <FaLocationDot className="text-2xl" />
          <p>{address ? address : 'N/A'}</p>
        </div>
        <div className="flex items-center">
          <IoPerson className="text-2xl" />
          <p>{playerCount}</p> 
        </div>
        <Badges tags={categories} bgColor='bg-blue-700' />
      </div>
        {buttonText && 
          <Link to={`/parks/${id}`} className="">
            <button className="w-full mt-1 rounded-md bg-emerald-700 text-white p-1 lg:p-2">
              {buttonText}
            </button>
          </Link>
        }
    </div>
  )
}
