import ImagePlaceholder from '../../common/ImagePlaceholder'
import SmImageSkeleton from '../../common/SmImageSkeleton'

export default function Cards({ parks }) {
  return (
    <div className='grid grid-cols-4 w-full place-items-center lg:place-items-start gap-3'>
      {parks?.length
      ? parks.map(park => (
        <div key={park.id} className='bg-white flex justify-center rounded-md shadow-md p-3'>
          <img className='w-28 h-20 lg:w-38 lg:h-38 rounded-md' src={park.image_url} alt={park.name} />
        </div>
      ))
      : Array(16).fill(0).map((_, idx) => ( // eslint-disable-line
        <div className='w-28 h-20 bg-white flex justify-center rounded-md shadow-md p-3' key={idx}>
          <SmImageSkeleton />
        </div>
      ))
    }
    </div>
  )
}
