import React, { useState } from "react"
import propTypes from "prop-types"
import { Link, navigate } from "gatsby"
import cx from "classnames"

const colorClasses = {
  red: "bg-red-200",
  green: "bg-green-200",
  blue: "bg-blue-200",
  yellow: "bg-yellow-200",
}

const BubbleStates = Object.freeze({
  hidden: "hidden",
  partial: "partial",
  expanded: "expanded",
})

const ImageCard = ({ imgSrc, color, alt, link }) => {
  const [bubbleState, setBubbleState] = useState(BubbleStates.hidden)

  const onFocus = () => setBubbleState(BubbleStates.partial)

  const onBlur = () => setBubbleState(BubbleStates.hidden)

  const linkClickHandler = event => {
    event.preventDefault()
    setBubbleState(BubbleStates.expanded)
  }

  const onBubbleTransitionEnd = () => {
    if (bubbleState === BubbleStates.expanded) {
      navigate(link)
    }
  }

  const bubbleClasses = cx("bubble", colorClasses[color], {
    partial: bubbleState === BubbleStates.partial,
    expanded: bubbleState === BubbleStates.expanded,
  })

  return (
    <Link
      to={link}
      onClick={linkClickHandler}
      onFocus={onFocus}
      onBlur={onBlur}
      className="card-link"
    >
      <div className="relative  col-span-2 sm:col-span-1 overflow-visible">
        <div
          className={bubbleClasses}
          onTransitionEnd={onBubbleTransitionEnd}
        />
        <img className="relative z-10" src={imgSrc} alt={alt} />
      </div>
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
