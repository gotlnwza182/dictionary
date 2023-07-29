'use client'

import React from 'react'
import './Meaning.css'

export default function Meaning({ meaning }) {
    const definitions = meaning.definitions.map((definition, index) => (
        <li className='meaning-list' key={index}>
            <p className='meaning-color'>{definition.definition}</p>
            {definition.example && <p className='example'>&quot;{definition.example}&quot;</p>}
        </li>
    ))

    const synonyms = meaning.synonyms.map((synonym, index) => <li key={index}><a>{synonym}</a></li>)

    return (
        <section className='definition-space'>
            <div className='pos'>
                <h2>{meaning.partOfSpeech}</h2>
                <hr/>
            </div>
            <p>Meaning</p>
            <ul className='meaning-group'>{definitions}</ul>
            {meaning.synonyms.length > 0 && (
                <div className='sysnonym-container'>
                    <p>Synonyms</p>
                    <ul className='synonym-group'>{synonyms}</ul>
                </div>
            )}
        </section>
    )
}
