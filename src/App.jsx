import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./store/counter/CounterSlice"


function App() {
  const value = useSelector(store=>store.counter.value)
  console.log(value)
  
  const dispatch = useDispatch()

  return (
    <>
      <h1>App</h1>
      <h2>Counter: {value}</h2>
      <button onClick={() => dispatch(increment())}>Arttir...</button>
      <button onClick={() => dispatch(decrement())}>Azalt...</button>
    </>
  )
}

export default App
