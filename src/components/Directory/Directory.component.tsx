import { FC, useRef } from "react"

import { Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import type SwiperCore from "swiper"

import useScreenWidth from "../../hook/useScreenWidth"

import { faRightLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import DirectoryItem from "../DirectoryItem/DirectoryItem.component"

// eslint-disable-next-line import/no-unresolved, import/extensions
import "swiper/css"

import "./Directory.styles.scss"

interface DirectoryProps {
  categories: any[]
}

const Directory: FC<DirectoryProps> = ({ categories }) => {
  const isDesktop = useScreenWidth(992)
  const swiperRef = useRef<SwiperCore>()

  const swiperOptions = {
    breakpoints: {
      0: {
        centeredSlides: true,
        enabled: true,
        slidesPerView: 1.15,
        spaceBetween: 30,
      },
      992: {
        enabled: false,
      },
    },
  }

  return (
    <Swiper
      className="directory-wrapper container"
      loop={!isDesktop}
      modules={[Navigation]}
      navigation={{
        nextEl: ".swiper-nav-right-custom",
      }}
      onBeforeInit={(swiper) => {
        swiperRef.current = swiper
      }}
      slidesPerView="auto"
      {...swiperOptions}
    >
      {!isDesktop && (
        <div className="swiper-nav-custom">
          <div
            className="swiper-nav-right-custom"
            onClick={() => swiperRef.current?.slideNext()}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                swiperRef.current?.slideNext()
              }
            }}
            role="button"
            tabIndex={0}
          >
            Scroll
            <FontAwesomeIcon icon={faRightLeft} />
          </div>
        </div>
      )}
      {categories.map((category, index) => (
        <SwiperSlide className="directory-item" key={index}>
          <DirectoryItem key={category.id} category={category} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Directory
