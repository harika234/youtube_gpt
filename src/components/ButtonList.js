import React from 'react'
import Button from './Button'



const ButtonList = () => {
  return (
    <div className='flex overflow-x-auto whitespace-nowrap'>
      <Button name = "All"/>
      <Button name = "Gaming"/>
      <Button name = "Live"/>
      <Button name = "Food"/>
      <Button name = "News"/>
      <Button name = "Soccer"/>
      <Button name = "Cricket"/>
      <Button name = "Food"/>
      <Button name = "News"/>
      <Button name = "Soccer"/>
      <Button name = "Cricket"/>
    </div>
  )
}

export default ButtonList