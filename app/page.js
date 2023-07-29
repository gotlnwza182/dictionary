  // 'use client'

  import React from 'react'
  import Dwa from '@/components/Dwa'
  // import Navbar from '@/components/Navbar'
  // import Search from '@/components/Search'
  // import Word from '@/components/Word'
  // import useFetch from '@/hooks/useFetch'
  // import fontNames from '@/utils/font-names'

  export default function page() {

  // const [currentFont, setCurrentFont] = useState(localStorage.getItem('current-font') ?? 'Serif')
  // const [word, setWord] = useState(null)
  // const [isLoading, setIsLoading] = useState(true)
  // const [isError, setIsError] = useState(false)
  
  // const fontClass = fontNames[currentFont]
  
  // useEffect(() => {
  //   localStorage.setItem('current-font', currentFont)
  // }, [currentFont])

  // async function fetchData(input) {
  //   useFetch (
  //     `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`,
  //     data => {
  //       setWord(data[0])
  //     },
  //     setIsLoading,
  //     setIsError
  //   )
  // }

  // const errorElement = (
  //   <main className='error-container'>
  //     <div>😕</div>
  //     <h5>No Definitions Found</h5>
  //     <p>
  //       Sorry pal, we couldn&apos;t find definitions for the word you were looking for. You can try the search again at later
  //       time or head to the web instead.
  //     </p>
  //   </main>
  // )

  return (
    <div>
      <Dwa />
    </div>
  )
}
