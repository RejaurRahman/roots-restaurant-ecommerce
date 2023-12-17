import React, {
  FC,
  ReactNode
} from "react"

interface AccordionProps {
  children: ReactNode
  className?: string
}

const Accordion: FC<AccordionProps> = ({
  children,
  className
}) => {
  return (
    <div className={`accordion ${className}`}>
      {children}
    </div>
  )
}

export default Accordion
