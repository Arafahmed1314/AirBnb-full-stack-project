/* eslint-disable react/no-unescaped-entities */
import GoogleIcon from '@/components/svgIcon/GoogleIcon'
import React from 'react'
import LoginForm from '../auth/page'

export default function Register() {
    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
        >
            {/* <!-- Modal Container --> */}
            <div
                className="bg-white rounded-xl shadow-2xl w-96 p-6 relative shadow-black/50"
            >
                {/* <!-- Close Button --> */}
                <button
                    id="closeModalBtn"
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                >
                    <i className="ph-x text-2xl"></i>
                </button>

                {/* <!-- Modal Header --> */}
                <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">
                        Log in to Hotel Booking
                    </h2>
                    <p className="text-gray-600 text-sm mt-2">
                        Welcome back! Let's get you signed in.
                    </p>
                </div>

                {/* <!-- Social Login --> */}
                <div className="space-y-4 mb-4">
                    {/* <!-- Google Login Button --> */}
                    <button
                        className="w-full flex items-center justify-center border border-gray-300 rounded-full py-3 hover:bg-gray-50 transition"
                    >
                        <GoogleIcon />
                        Continue with Google
                    </button>

                    {/* <!-- Divider --> */}
                    <div className="flex items-center my-4">
                        <div className="flex-grow border-t border-gray-300"></div>
                        <span className="mx-4 text-gray-500 text-sm">or</span>
                        <div className="flex-grow border-t border-gray-300"></div>
                    </div>

                    {/* <!-- Email Login Form --> */}
                    <LoginForm />
                </div>

                {/* <!-- Footer --> */}
                <div className="text-center text-sm text-gray-600">
                    <p>
                        Don't have an account?
                        <a href="#" className="text-primary hover:underline">Sign up</a>
                    </p>
                </div>
            </div>
        </div>
    )
}
