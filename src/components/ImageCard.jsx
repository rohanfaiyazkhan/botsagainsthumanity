import React, { useState } from "react"
import propTypes from "prop-types"
import { motion } from "framer-motion"
import { Link, navigate } from "gatsby"

const colorClasses = {
  red: "bg-red-200",
  green: "bg-green-200",
  blue: "bg-blue-200",
  yellow: "bg-yellow-200",
}

const bubble = {
  hover: { scale: 260, transition: { duration: 0.35, ease: "easeIn" } },
  tap: { scale: 280, transition: { duration: 0.1, ease: "easeIn" } },
  tapped: { scale: 3000, transition: { duration: 0.35, ease: "easeIn" } },
}

const ImageCard = ({ imgSrc, color, alt, link }) => {
  const [animation, setAnimation] = useState({
    base: undefined,
    whileHover: "hover",
    whileTap: "tap",
  })

  const linkClickHandler = event => {
    setAnimation({
      base: "tapped",
      whileHover: undefined,
      whileTap: undefined,
    })
    event.preventDefault()
    setTimeout(() => {
      navigate(link)
    }, [350])
  }

  return (
    <Link to={link} onClick={linkClickHandler}>
      <motion.div
        whileHover={animation.whileHover}
        className="relative col-span-2 sm:col-span-1 overflow-visible"
        whileTap={animation.whileTap}
        animate={animation.base}
      >
        <motion.div
          className={`bubble ${colorClasses[color]}`}
          variants={bubble}
        />
        <img className="relative z-10" src={imgSrc} alt={alt} />
      </motion.div>
    </Link>
  )
}

ImageCard.propTypes = {
  imgSrc: propTypes.string.isRequired,
  color: propTypes.oneOf(["red", "green", "blue", "yellow"]).isRequired,
  alt: propTypes.string,
  link: propTypes.string.isRequired,
}

export default ImageCard
