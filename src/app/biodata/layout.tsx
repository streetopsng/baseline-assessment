import React, { ReactNode } from 'react'

const layout = ({children}:{children:React.ReactNode}):ReactNode => {
  return (
    <div>
        <h1 className='text-center'>BioData Form</h1>
        {children}
        
        </div>
  )
}

export default layout