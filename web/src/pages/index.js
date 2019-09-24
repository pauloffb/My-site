import React from "react"
import { Helmet } from "react-helmet"
import logo from "../images/icon.png"

export default () => (
  <div className="h-screen flex flex-col items-center justify-center text-center p-2 border-t-4 sm:border-t-8 border-red-600">
    <Helmet>
      <meta charSet="utf-8" />
      <title>Paulo Baptista</title>
    </Helmet>
    <div className="flex flex-col sm:flex-row items-center">
      <img className="h-16 mb-8 sm:mb-0 md:h-20 sm:mr-2" src={logo} alt="Paulo Baptista logo" />
      <h1 className="text-2xl sm:text-4xl md:text-6xl">Paulo Baptista</h1>
    </div>
    <div>
      <p className="font-body">Nothing to see here... yet! Check back soon!</p>
      <h2 className="text-xl sm:text-2xl md:text-4xl mt-8">Get in touch</h2>
      <p>
        You can follow me on <a class="underline text-blue-500 hover:text-red-600 font-semibold " href="https://twitter.com/pauloffb" target="_blank" rel="noopener noreferrer">Twitter</a> or email me at paulo [at] paulobaptista.dev
      </p>
    </div>
  </div>
)
