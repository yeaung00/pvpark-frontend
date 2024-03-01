import Card from './Card'

export default function Grid({ gameCount, buttonText, cells }) {

  return (
    <div className='flex flex-col gap-3'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {cells?.length
        ? cells.map(park => (
            <Card 
              key={park.id}
              {...park}
              buttonText={buttonText}
              gameCount={gameCount}
            />
          ))
        : [1,2,3,4,5,6].map((element) => ( // eslint-disable-line
            <Card key={element}/>
          ))}
      </div>
    </div>
  )
}
