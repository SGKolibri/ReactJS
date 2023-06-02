import { useState } from "react"

export function NewTodoForm({ modifyTodo }) {

    const [newItem, setNewItem] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        //num pode adisionar item com nada dentro
        if (newItem === "") return

        modifyTodo(newItem)

        setNewItem("")
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="new-item-form">
                <div className="form-row">
                    <label htmlFor="item" >Novo Item</label>
                    <input
                        value={newItem}
                        onChange={e => setNewItem(e.target.value)}
                        type="text"
                        id="item"
                    />
                </div>
                <button className="btn">Adicionar</button>
            </form>
        </>
    )
}