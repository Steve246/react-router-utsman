import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

export const Page1 = () => {
  // useEffect(() => {
  //     return () => {
  //         console.log('Unmounting page 1');
  //     }
  // })

  //Programmatically Navigation using hook
  const navigate = useNavigate();
  return (
    <>
      <h2>
          Page1
      </h2>
      <button onClick={() => {
        navigate('child1-1')
      }}>To Child 1
      </button>
      <button onClick={() => {
        navigate('child1-2')
      }}>To Child 2
      </button>
      <Outlet/>
    </>
  )
}
