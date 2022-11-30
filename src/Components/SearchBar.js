import { useState } from 'react'

const SearchBar = ({ onSubmit }) => {

    const [value, setValue] = useState("")

    const handleValue = (e) => {
        setValue(e.target.value)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()

        onSubmit(value)
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <p>Confirm your search: {value}</p>
                <input value={value} onChange={handleValue} />
                <button >Click Me</button>
            </form>
        </div>
    )
}

export default SearchBar