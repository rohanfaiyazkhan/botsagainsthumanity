import React from "react"

import crimsonImg from "../assets/vectors/crimson.png"
import blueImg from "../assets/vectors/blue.png"
import greenImg from "../assets/vectors/green.png"
import yellowImg from "../assets/vectors/yellow.png"

import ImageCard from "./ImageCard"

const links = {
  red: "/red",
  blue: "/blue",
  green: "/green",
  yellow: "/yellow",
}

const ImageGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-2 md:gap-10 max-w-screen-md max-h-screen">
      <ImageCard alt="red" link={links.red} imgSrc={crimsonImg} color="red" />
      <ImageCard alt="blue" link={links.blue} imgSrc={blueImg} color="blue" />
      <ImageCard
        alt="green"
        link={links.green}
        imgSrc={greenImg}
        color="green"
      />
      <ImageCard
        alt="yellow"
        link={links.yellow}
        imgSrc={yellowImg}
        color="yellow"
      />
    </div>
  )
}

export default ImageGrid
