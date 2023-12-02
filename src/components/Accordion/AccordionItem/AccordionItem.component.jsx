import React, { useState } from "react"

import { library } from "@fortawesome/fontawesome-svg-core"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

library.add(
  faChevronDown
)

const AccordionItem = ({
  buttonClassName,
  contentClassName,
  children,
  index,
  isList,
  title,
}) => {
  const [activeIndex, setActiveIndex] = useState(null)

  const handleItemClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const contentElement = isList ? (
    <ul
      className={`accordion-collapse collapse ${activeIndex === index ? "show" : ""} ${contentClassName}`.trim()}
    >
      {children}
    </ul>
  ) : (
    <div
      className={`accordion-collapse collapse ${activeIndex === index ? "show" : ""} ${contentClassName}`.trim()}
    >
      {children}
    </div>
  )

  return (
    <>
      <button
        className={`accordion-button ${buttonClassName}`}
        onClick={() => handleItemClick(index)}
      >
        {title}
        <FontAwesomeIcon
          icon={["fas", "fa-chevron-down"]}
        />
      </button>
      {contentElement}
    </>
  )
}

export default AccordionItem
