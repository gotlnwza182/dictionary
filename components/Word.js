import React, { useEffect, useRef } from 'react'
import './Word.css'
import Meaning from './Meaning'

export default function Word({ data }) {
  const validPhonetics = data.phonetics?.find(phonetics => phonetics.text && phonetics.audio)
  const audioRef = useRef(null)

  useEffect(() => {
    audioRef.current = new Audio(validPhonetics?.audio)
  }, [data])

  function playAudio() {
    audioRef.current.play()
  }

  const meanings = data.meanings.map((meaning, index) => <Meaning key={index} meaning={meaning}/>)



  return (
    <main>
      <div className='word-group'>
        <div className='word'>
          <h1>{data.word}</h1>
          <p>{validPhonetics?.text}</p>
        </div>
          <button className='btn-play-audio' onClick={playAudio}>
            {/* <img src='./images/icon-play.svg' /> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75"><g fill="#A445ED" fillRule="evenodd"><circle cx="37.5" cy="37.5" r="37.5" opacity=".25"/><path d="M29 27v21l21-10.5z"/></g></svg>
          </button>
      </div>
      
      {/* -- meaning section -- */}
      {meanings}
      <div className='source'>
        <p>Source</p>
        <div className='external-link'>
          <a href={`https://en.wiktionary.org/wiki/${data.word}`}>{`https://en.wiktionary.org/wiki/${data.word}`}</a>
          <img src='./images/icon-new-window.svg' alt='external link'/>
        </div>
      </div>
    </main>
  )
}
