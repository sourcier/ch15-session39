import { useContext } from "react"

import { CarsContext } from "../contexts/cars.context"

function CarsList() {
  const { cars, loading, error } = useContext(CarsContext);

  if(loading) return <p>Loading...</p>

  if(error) return <p>{error.message}</p>

  return (
    <div>
      <h2>Cars List</h2>
      <ul>
        {cars.map((car, index) => <li key={index}>{car.name}</li>)}
      </ul>
    </div>
  )
}

export default CarsList
