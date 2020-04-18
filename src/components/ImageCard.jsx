import React from "react"
import propTypes from "prop-types"
import { motion } from "framer-motion"

const colorClasses = {
  red: "bg-red-200",
  green: "bg-green-200",
  blue: "bg-blue-200",
  yellow: "bg-yellow-200",
}

const bubble = {
  hover: { scale: 260, transition: { duration: 0.35, ease: "easeOut" } },
}

const ImageCard = ({ imgSrc, color, alt }) => {
  return (
    <motion.div
      whileHover="hover"
      className="relative col-span-2 sm:col-span-1"
    >
      <motion.div
        className={`bubble ${colorClasses[color]}`}
        variants={bubble}
      />
      <img className="relative z-10" src={imgSrc} alt={alt} />
    </motion.div>
  )
}

ImageCard.propTypes = {
  imgSrc: propTypes.string.isRequired,
  color: propTypes.oneOf(["red", "green", "blue", "yellow"]).isRequired,
  alt: propTypes.string,
}

export default ImageCard
