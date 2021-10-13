import React from 'react'
import styles from '../../styles/Example.module.css'
import {ExampleProps} from '../@types'

const Example: (props: ExampleProps) => JSX.Element = ({
  children = 'Button',
  className = '',
  style = {},
  onClick = () => null,
}) => {
  return (
    <button
      className={`${styles.btn}${className ? ` ${className}` : ''}`}
      style={style}
      onClick={onClick}>
      {children}
    </button>
  )
}

export default Example
