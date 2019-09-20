import React from "react"
import { Helmet } from "react-helmet"

export default () => (
  <div className="h-screen flex flex-col items-center justify-center text-center p-2">
    <Helmet>
      <meta charSet="utf-8" />
      <title>Paulo Baptista</title>
    </Helmet>
    <div className="">
      <h1 className="text-4xl md:text-6xl">Paulo Baptista</h1>
      <p className="font-body">Nothing to see here... yet! Check back soon!</p>
      <h2 className="text-2xl md:text-4xl mt-8">Get in touch</h2>
      <p>
        You can follow me on Twitter or email me at paulo [at] paulobaptista.dev
      </p>
    </div>
  </div>
)
