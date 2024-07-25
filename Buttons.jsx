import React from 'react'
import Button from '@mui/material/Button';
import './Buttons.css'


const Buttons = ({children,startIcon,sx}) => {
  return (
    <div className='but' style={sx}>
      <Button variant='Outlined' startIcon={startIcon}>{children}</Button>
    </div>
  )
}

export default Buttons