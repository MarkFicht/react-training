import React from 'react'

const NewToDoForm = ({ onChange, draft, onSubmit }) => (
    <div>
        <input type='text' onChange={onChange} value={draft} />
        <button onClick={onSubmit}>ADD</button>
    </div>
)

export default NewToDoForm