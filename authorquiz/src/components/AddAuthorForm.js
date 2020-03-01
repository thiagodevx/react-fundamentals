import React, { useState } from 'react'
import './AddAuthorForm.css'

const defaultState = {
    name: '',
    imageUrl: ''
}
export default ({ onAddAuthor }) => {
    const [formState, setFormState] = useState(defaultState)

    const updateState = event => {
        const newFormState = { ...formState }
        const inputName = event.target.name
        newFormState[inputName] = event.target.value
        setFormState(newFormState)
    }

    const handleSubmit = event => {
        event.preventDefault()
        onAddAuthor(event)
    }

    return (
        <div className="addAuthorForm">
            <h1>Add Author</h1>
            <form onSubmit={handleSubmit}>
                <div className="inputGroup">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" value={formState.name} onChange={updateState}></input>
                </div>
                <div className="inputGroup">
                    <label htmlFor="imageUrl">Image URL</label>
                    <input type="text" name="imageUrl" value={formState.imageUrl} onChange={updateState}></input>
                </div>
                <button type="submit">Add new author!</button>
            </form>
        </div>
    )
}
