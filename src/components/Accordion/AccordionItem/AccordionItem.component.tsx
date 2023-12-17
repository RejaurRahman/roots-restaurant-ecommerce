import {
  FC,
  ReactNode,
  useState
 } from "react"

import { library } from "@fortawesome/fontawesome-svg-core"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "./AccordionItem.styles.scss"

library.add(faChevronDown)

interface AccordionItemProps {
  buttonClassName?: string
  contentClassName?: string
  children: ReactNode
  index: number
  isList: boolean
  title: string
}

const AccordionItem: FC<AccordionItemProps> = ({
  buttonClassName,
  contentClassName,
  children,
  index,
  isList,
  title
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const handleItemClick = (currentIndex: number) => {
    setActiveIndex((prevIndex) => (prevIndex === currentIndex ? null : currentIndex))
  }

  const contentElement = isList ? (
    <ul
      className={`accordion-collapse ${contentClassName}`}
    >
      {children}
    </ul>
  ) : (
    <div
      className={`accordion-collapse ${contentClassName}`}
    >
      {children}
    </div>
  )

  return (
    <div
      className={`accordion-group ${activeIndex === index ? "open" : ""}`.trim()}
    >
      <button
        className={`accordion-button ${buttonClassName}`}
        onClick={() => handleItemClick(index)}
      >
        {title}
        <FontAwesomeIcon
          icon={faChevronDown}
        />
      </button>
      {contentElement}
    </div>
  )
}

export default AccordionItem
