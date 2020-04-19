import React from "react"
import ImageGrid from "../components/ImageGrid"

const IndexPage = () => (
  <div className="w-screen min-h-screen bg-dark flex flex-col justify-center items-center">
    <h1 className="mb-16 font-cursive text-white text-center text-xl md:text-4xl tracking-widest">
      Bots Against Humanity
    </h1>
    <ImageGrid />
  </div>
)

export default IndexPage
