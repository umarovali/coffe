import React from 'react'

export default function QuesList({num, text}) {
  return (
    <li className='ques_list'>{num} {text}</li>
  )
}
