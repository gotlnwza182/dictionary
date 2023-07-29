import React, { useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import useOutside from '@/hooks/useOutside'
import './Dropdown.css'


export default function Dropdown(props) {
  const wrapperRef = useRef(null)
  useOutside(wrapperRef, props.isExpanded, props.toggle)

  return (
    <div className='dropdown' ref={wrapperRef}>
        <button className='font-select ' onClick={props.toggle} aria-expanded={props.isExpanded}>
            <span className={`${props.fontClass}`}>{props.currentFont}</span>
            <img src='./images/icon-arrow-down.svg' alt='Arrow Down' />
        </button>

        <CSSTransition in={props.isExpanded} timeout={200} unmountOnExit classNames='select-box-body'>
          <ul className='dropdown-menu'>
              {props.children}
          </ul>
        </CSSTransition>
    </div>
  )
}
