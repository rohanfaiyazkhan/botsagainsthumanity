import React, { Fragment } from "react"
import MetaData from "../components/MetaData"

const RedPage = props => {
  return (
    <Fragment>
      <MetaData />
      <div className="w-screen min-h-screen bg-red-200 flex flex-col justify-center items-center">
        <h1 className="mb-16 font-cursive text-black text-center text-xl md:text-4xl tracking-widest">
          Bots Against Humanity
        </h1>
      </div>
    </Fragment>
  )
}

export default RedPage
