import "./styles/styles.scss"

const App = () => {
  const categories = [
    {
      id: 1,
      title: "Soup"
    },
    {
      id: 2,
      title: "Salad"
    },
    {
      id: 3,
      title: "Pizza"
    },
    {
      id: 4,
      title: "Pasta"
    },
    {
      id: 5,
      title: "Curry"
    },
    {
      id: 6,
      title: "Deserts"
    },
    {
      id: 7,
      title: "Drinks"
    }
  ]

  return (
    <div className="wrapper">
      {
        categories.map(({title}) => (
          <div className="container">
            <div className="content">
              <h2>
                {title}
              </h2>
              <p>Shop Now</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default App
