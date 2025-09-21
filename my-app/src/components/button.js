import React from 'react'
import '../styles/components/button.css'

const Button = ({
  children,
  backgroundColor = '#007bff',
  color = '#fff',
  onClick,
  className = ''
}) => {
  const style = {
    backgroundColor,
    color
  }

  return (
    <button
      className={`btn ${className}`}
      style={style}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
