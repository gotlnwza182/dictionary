'use client'

import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import './Search.css'


export default function Search(props) {
    const queryParams = useSearchParams()
    const [initialInput, setInitialInput] = useState('keyboard')
    // const initialInput = queryParams.get('word') ?? 'keyboard'

    const [input, setInput] = useState("")
    const [isValid, setIsValid] = useState(true)

    const invalidClass = !isValid ? 'border-red' : ''

    useEffect(() => {
        setInput(initialInput)
        props.fetchData(initialInput)
    },[initialInput])

    function handleChange(event) {
        setInput(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        if (input < 1) {
            setIsValid(false)
            return
        }
        setIsValid(true)
        setInitialInput(input)
        // console.log(initialInput);
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <div className={`search-bar ${invalidClass}`}>
                <input  placeholder='Search for any word...' value={input} onChange={handleChange}></input>
                {!isValid && <div className='input-null'>Whoops, can't be empty...</div>}
            </div>
        </form>
    )
}
