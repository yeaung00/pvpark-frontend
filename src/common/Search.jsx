import { FaSearch } from "react-icons/fa";

export default function Search({ handleSubmit, setInput }) {
  return (
    <form onSubmit={handleSubmit} className='flex flex-col w-full gap-3'>
      <div className='flex gap-3 relative'>
        <div className="absolute h-full flex items-center justify-center text-xl w-12"><FaSearch /></div>
        <input onChange={(e) => setInput(e.target.value)} className='pl-12 focus:outline-emerald-700 transition duration-200 flex-1 border-2 rounded-md p-2 text-xl' type="text" placeholder='Park name' />
        <button className='bg-emerald-700 text-white border rounded-md p-2 text-xl w-24' type='submit'>Submit</button>
      </div>
      <div className="flex gap-3">
        <select defaultValue={"placeholder"} className="focus:outline-emerald-700 p-1 w-1/5 border-2 rounded-md" name="sortBy">
          <option value="placeholder" disabled>Sort by</option>
          <option value={''}>Most popular</option>
          <option value={''}>Least popular</option>
          <option value={''}>Newest</option>
          <option value={''}>Oldest</option>
        </select>
        <select defaultValue="placeholder" className="focus:outline-emerald-700 p-1 w-1/5 border-2 rounded-md" name="categories">
          <option value='placeholder' disabled>Categories</option>
          {
            ['Basketball', 'Football', 'Soccer'].map(category => (
              <option key={category}>{category}</option>
            ))
          }
        </select>
      </div>
    </form>
  )
}
