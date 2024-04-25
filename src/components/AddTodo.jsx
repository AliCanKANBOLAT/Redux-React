import { useDispatch } from "react-redux";
import { addTodo } from "../todo/todoSlice";

export default function AddTodo () {
    const dispatch = useDispatch();
    function HandleSubmit(event) {
        event.preventDefault()
        const inputValue = event.target.elements[0].value
        dispatch(addTodo(inputValue))
        event.target.reset()
    }

    return (
        <>
        <form onSubmit={HandleSubmit}>
            <input type="text" placeholder="todo bilgisini giriniz..." />
            <button type="submit">Ekle</button>
        </form>
        </>
    )
}

export {AddTodo};