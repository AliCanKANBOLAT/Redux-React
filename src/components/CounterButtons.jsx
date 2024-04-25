import { useDispatch } from "react-redux"
import { addMore, decrement, increment, reset } from "../store/counter/CounterSlice";


export default function CounterButtons ()  {
    const dispatch = useDispatch();
    return (
        <>
        <button onClick={() => dispatch(increment())}>Arttir...</button>
        <button onClick={() => dispatch(decrement())}>Azalt...</button>
        <button onClick={() => dispatch(reset())} >Resetle...</button>
        <button onClick={() => dispatch(addMore(({item: 10})))} >10 Ekle...</button>
        </>
    )
}