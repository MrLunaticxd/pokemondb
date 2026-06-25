
function PaginationBar({onPrev, onNext}) {
  return (
    <div className='w-full flex justify-between'>
        <button className="bg-black/30 border border-black/40 rounded px-4 py-2 hover:scale-120 transition-all duration-100"
        onClick={onPrev}>Previous</button>
        
        <button className="bg-black/30 border border-black/40 rounded px-4 py-2 hover:scale-120 transition-all duration-100"
        onClick={onNext}>Next</button>
        
    </div>
  )
}

export default PaginationBar