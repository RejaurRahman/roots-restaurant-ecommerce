import { useState, useEffect } from "react"

const useScreenWidth = (minWidth: number) => {
  const [matches, setMatches] = useState<boolean>(false)

  useEffect(() => {
    const handleResize = () => {
      setMatches(window.innerWidth >= minWidth)
    }

    handleResize()

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [minWidth])

  return matches
}

export default useScreenWidth
