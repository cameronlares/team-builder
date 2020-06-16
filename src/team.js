import React from 'react'

// Component Friends
export default function Team(props) {
  const { details } = props // Deconstrucor where props is details. 

  if (!details) {
    return <h3>Working fetching your team member&apos;s details...</h3>
  }

  return (
    <div className='friend container'>
      <h2>{details.username}</h2>
      <p>Email: {details.email}</p>
      <p>Role: {details.role}</p>
    </div>
  )
}
