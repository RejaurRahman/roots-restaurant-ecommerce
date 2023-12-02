import React, { useState } from "react"

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
  );

  return (
    <>
      <button
        className={`accordion-button ${buttonClassName}`}
        onClick={() => handleItemClick(index)}
      >
        {title}
      </button>
      {contentElement}
    </>
  )
}

export default AccordionItem
