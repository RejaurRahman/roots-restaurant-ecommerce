import Directory from "../../components/Directory/Directory"

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "Soup",
      imageUrl: "https://www.foodiesfeed.com/wp-content/uploads/2015/05/autumn-pumpkin-soup-3.jpg"
    },
    {
      id: 2,
      title: "Salad",
      imageUrl: "https://www.foodiesfeed.com/wp-content/uploads/2016/04/salad-with-olives.jpg"
    },
    {
      id: 3,
      title: "Fast Food",
      imageUrl: "https://www.foodiesfeed.com/wp-content/uploads/2016/09/burger-with-cheddar-bacon-and-guacamole.jpg"
    },
    {
      id: 4,
      title: "Oriental",
      imageUrl: "https://www.foodiesfeed.com/wp-content/uploads/2018/08/vibrant-shot-of-feasting-on-chinese-steamed-and-fried-dim-sum.jpg"
    },
    {
      id: 5,
      title: "Indian",
      imageUrl: "https://www.foodiesfeed.com/wp-content/uploads/2023/03/close-up-of-butter-chicken-indian-dish.jpg"
    },
    {
      id: 6,
      title: "Desert",
      imageUrl: "https://www.foodiesfeed.com/wp-content/uploads/2019/09/traditional-malaysia-deserts.jpg"
    },
    {
      id: 7,
      title: "Drinks",
      imageUrl: "https://www.foodiesfeed.com/wp-content/uploads/2019/10/bartender-licor-beirao.jpg"
    }
  ]

  return (
    <Directory categories={categories} />
  )
}

export default Home
