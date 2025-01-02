import React from 'react'
import LoginComponent from '../components/LoginComponent'

const Login = () => {
  return (
    <div>
        <div className="p-6 text-center">
            <h1 className='text-6xl font-bold mb-5 text-slate-500 p-6 rounded'>WELCOME TO SVCC CENTRALIZED</h1>
        </div>
        
        <div className="flex flex-col items-center justify-center">   
            <LoginComponent/>
        </div>

        <div>
            
        </div>
    </div>
  )
}

export default Login