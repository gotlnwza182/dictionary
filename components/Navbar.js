import React, { useEffect } from 'react'
import './Navbar.css'
import Dropdown from './Dropdown'
import useToggle from '@/hooks/useToggle'
import fontNames from '@/utils/font-names'

export default function Navbar(props) {
    const [isDarkTheme, toggleTheme] = useToggle(localStorage.getItem('theme-color') === 'dark')
    const [isDropdownExpanded, toggleDropdown] =useToggle(false)

    useEffect(() => {
        document.documentElement.className = isDarkTheme ? 'dark' : ''
        localStorage.setItem('theme-color', isDarkTheme ? 'dark' : 'light')
    }, [isDarkTheme])

    function selectItem(value) {
        props.applyFont(value)
        toggleDropdown()
    }

    const listItems = Object.entries(fontNames).map(([key, value]) => (
        <li key={key} className={`${value}`} onClick={() => selectItem(key)}>
            <button className={`dropdown-item ${value}`}>{key}</button>
        </li>
    ))

  return (
    <nav>
        <div className='icon'>
            <img src='./images/logo.svg'/>
        </div>
        <div className='flex'>
            <Dropdown applyFont={props.applyFont} currentFont={props.currentFont} toggle={toggleDropdown} isExpanded={isDropdownExpanded} fontClass={props.fontClass}>
                {listItems}
            </Dropdown>
            <div className='toggle'>
                <label className='toggle-out'>
                    <input type='checkbox' checked={isDarkTheme} onChange={toggleTheme}></input>
                    <span className='toggle-in'></span>
                </label>
                <img src={isDarkTheme ? './images/icon-moon-dark.svg' : './images/icon-moon.svg'} alt='moon icon' />
            </div>
        </div>
    </nav>
  )
}
