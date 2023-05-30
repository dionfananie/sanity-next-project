import React from 'react'

const ButtonPrimary = ({ children, addClass = '' }) => {
  return (
    <button
      className={
        'text-white-500 hover:shadow-orange-md rounded-lg bg-orange-500 py-3 px-12 font-semibold outline-none transition-all lg:py-4 lg:px-16 ' +
        addClass
      }
    >
      {children}
    </button>
  )
}

export default ButtonPrimary
