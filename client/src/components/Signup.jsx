import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthProvider';
import Googleimage from '../assets/bookimages/googleimg.webp'

function Signup() {
    const {createUser, signInWithGoogle} = useContext(AuthContext)
    const [error, setError] = useState('error')

    // const location = useLocation()
    // const navigate = useNavigate()

    // const redirect = location.state?.form?.pathname || "/"

    const handleSignup=(e)=>{
        e.preventDefault();
        // Perform your signup logic here
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        //console.log(email, password);

        createUser(email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            alert('User signed up successfully');
            window.location.href = '/';
            //navigate(redirect,{replace: true})
            //form.reset();
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage);
            // ..
          });
        
    }

    // signup using google
    const handleRegister= (e) => {
        e.preventDefault();
        signInWithGoogle()
       .then((result) => {
            // Signed in
            const user = result.user;
            alert('User signed in with Google successfully');
            window.location.href = '/';
        })
       .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage);
        });
    }
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div
                className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
            </div>
            <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                <div className="max-w-md mx-auto">
                    <div>
                        <h1 className="text-2xl font-semibold">Sign up form</h1>
                    </div>
                    <div className="divide-y divide-gray-200">
                        <form onSubmit={handleSignup} className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                            <div className="relative">
                                <input id="email" name="email" type="text" className="peer  h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600 rounded" placeholder="Email address"/>
                                
                            </div>
                            <div className="relative">
                                <input id="password" name="password" type="password" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600 rounded" placeholder="Password" />
                               
                            </div>
                            <p>Have an account? Kindly <Link to={'/login'} className='text-blue-800 underline'>Login</Link> here</p>
                            <div className="relative">
                                <button type='submit' className="bg-blue-500 text-white rounded-md px-2 py-1">Sign up</button>
                            </div>
                            <hr/>
                            <div>
                                <button onClick={handleRegister}>
                                    <img src={Googleimage} alt='google image' className='w-12 h-12 inline-block rounded-full'/>
                                    Login with Google
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup