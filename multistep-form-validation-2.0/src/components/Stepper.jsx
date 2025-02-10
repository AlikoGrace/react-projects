

const Stepper = () => {
  return (
    <div className="flex justify-between mx-4 p-4 items-center">
      <div className=" relative flex flex-col items-center text-teal-950   ">
        <div className="rounded-full bg-blue-400  border-2 h-12 w-12 border-gray-300 flex items-center justify-center py-3">1</div>
        <div className="absolute top-0 text-center mt-12 w-32 text-xs font-medium uppercase">desc</div>
      </div>
      <div className="flex-auto border-t-4 border-gray-200 transition duration-500 ease-in-out">
      </div>
    </div>
  )
}

export default Stepper
