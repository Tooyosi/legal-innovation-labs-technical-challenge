import React from 'react'
import { Spinner } from 'reactstrap'

const Loader = () => {
  return (
    <div className='d-flex align-items-center justify-content-center w-100 h-100'>
        <Spinner
        color="yellow"
        style={{ width: "3rem", height: "3rem" }} 
        type="grow">
          {""}
        </Spinner>
    </div>
  )
}

export default Loader