    'use client'

    import React, { useEffect, useState } from 'react'
    import Navbar from './Navbar'
    import Search from './Search'
    import Word from './Word'
    import useFetch from '@/hooks/useFetch'
    import fontNames from '@/utils/font-names'

    export default function Dwa() {
    const [currentFont, setCurrentFont] = useState('Serif')
    const [word, setWord] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    const fontClass = fontNames[currentFont]

    useEffect(() => {
        // This will run only on the client side
        setCurrentFont(localStorage.getItem('current-font') ?? 'Serif')
    }, []) // Empty dependency array ensures it runs only once on mount, no need to include currentFont

    useEffect(() => {
        // This will run only on the client side
        localStorage.setItem('current-font', currentFont)
    }, [currentFont])

    function FetchData(input) {
        useFetch(
            `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`,
            data => {
                setWord(data[0])
            },
            setIsLoading,
            setIsError
        )
    }

    const errorElement = (
        <main className='error-container'>
            <div>😕</div>
            <h5>No Definitions Found</h5>
            <p>
                Sorry pal, we couldn&apos; find definitions for the word you were looking for. You can try the search again at later
                time or head to the web instead.
            </p>
        </main>
    )

    return (
        <div className={`${fontClass}`}>
            <Navbar currentFont={currentFont} applyFont={setCurrentFont} fontClass={fontClass} />
            <Search fetchData={FetchData} />
            {isError && errorElement}
            {!isLoading && !isError && <Word data={word} isError={isError} />}
        </div>
    )
}
