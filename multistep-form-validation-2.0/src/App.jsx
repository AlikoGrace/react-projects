
import Stepper from './components/Stepper'
import StepperControl from './components/StepperControl'

const App = () => {
  return (
    <div className='md:w-1/2 mx-auto bg-white shadow-2xl rounded-2xl'>
      <div className='container mt-5'>
        <Stepper/>
      </div>
      <StepperControl/>
    </div>
  )
}

export default App
