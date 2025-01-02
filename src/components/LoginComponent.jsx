import React from 'react'

const LoginComponent = () => {
    const HandleLogin = () => {
        alert('button working!');
    }
    return (
        <div className='shadow-xl rounded w-1/5 p-6 m-6'>
            <h1 className='mt-6 mb-6 text-slate-500 text-4xl font-normal'>LOG IN</h1>
            <form className='flex flex-col'>
                <label className='mb-2 text-slate-400'>Email:</label>
                <input className='p-3 border-2 rounded mb-5' type='text' placeholder='Enter your email'/>

                <label className='mb-2 text-slate-400'>Password:</label>
                <input className='p-3 border-2 rounded mb-5' type='password' placeholder='Enter your password'/>
                <button className='hover:bg-slate-200 hover:text-slate-400 p-3 mb-5 rounded bg-slate-500 text-white transition' onClick={HandleLogin}>Log In</button>

                <span>
                    <a href="#">Forgot password?</a>
                </span>
            </form>
        </div>
    )
}

export default LoginComponent