import { useContext } from "react";
import Button from "react-bootstrap/Button";


import { CarsContext } from "../contexts/cars.context";

function AddCar() {
  const {addCar} = useContext(CarsContext);
  const newCar = { name: "JustAdded" };

  return <Button variant="danger" onClick={() => addCar(newCar)}>Add Car</Button>;
}

export default AddCar;
