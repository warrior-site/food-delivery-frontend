import React, { useEffect } from 'react'
import MainRotes from './routes/MainRotes'
import { useDispatch } from 'react-redux'
import { checkAuth } from './store/userAction'

function App() {
  const dispatch = useDispatch()

// useEffect(()=>{
//  dispatch(checkAuth())
// })

  return (
    <div>
        <MainRotes/>
    </div>
  )
}

export default App