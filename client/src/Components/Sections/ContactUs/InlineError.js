import React from 'react'


const InlineError = ({error}) => {
  return (
    <>
     <p className='my-1 text-red-700 font-abc'>
        {error}
        </p> 
    </>
  )
}

export default InlineError
