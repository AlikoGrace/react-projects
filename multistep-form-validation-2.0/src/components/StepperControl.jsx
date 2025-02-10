

const StepperControl = () => {
  return (
    <div className="flex justify-between">
      <button className='bg-blue-800 border-2 text-slate-50 border-blue-800 p-3 rounded-md m-4 cursor-pointer hover:bg-blue-950 hover:text-white transition ease-in-out duration-200'>Prev Step</button>


      <button className='bg-blue-800 border-2 text-slate-50 border-blue-800 p-3 rounded-md m-4 cursor-pointer hover:bg-blue-950 hover:text-white transition ease-in-out duration-200'>Next Step</button>
    </div>
  )
}

export default StepperControl
