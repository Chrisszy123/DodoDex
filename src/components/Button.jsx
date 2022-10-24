import React from 'react'

const Button = ({text, styles}) => {
  return (
    <div className='swapcontainer__swapmain__swap__button'
      style={styles}
    >
        <div className='swapcontainer__swapmain__swap__button__wrap'>
          {text}
        </div>
    </div>
  )
}

export default Button