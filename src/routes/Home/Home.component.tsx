import { FC } from "react"

import Directory from "../../components/Directory/Directory.component"
import MainBanner from "../../components/MainBanner/MainBanner.component"
import ServicesList from "../../components/ServicesList/ServicesList.component"

import Curry from "../../assets/images/cover/curry.webp"
import Deserts from "../../assets/images/cover/deserts.webp"
import Drinks from "../../assets/images/cover/drinks.webp"
import Pasta from "../../assets/images/cover/pasta.webp"
import Pizza from "../../assets/images/cover/pizza.webp"
import Salad from "../../assets/images/cover/salad.webp"
import Soup from "../../assets/images/cover/soup.webp"

const Home: FC = () => {
  const categories = [
    {
      id: 1,
      title: "Soup",
      imageUrl: Soup,
    },
    {
      id: 2,
      title: "Salad",
      imageUrl: Salad
    },
    {
      id: 3,
      title: "Pizza",
      imageUrl: Pizza
    },
    {
      id: 4,
      title: "Pasta",
      imageUrl: Pasta
    },
    {
      id: 5,
      title: "Curry",
      imageUrl: Curry
    },
    {
      id: 6,
      title: "Desert",
      imageUrl: Deserts
    },
    {
      id: 7,
      title: "Drinks",
      imageUrl: Drinks
    }
  ]

  return (
    <>
      <MainBanner />
      <ServicesList />
      <Directory categories={categories} />
    </>
  )
}

export default Home
