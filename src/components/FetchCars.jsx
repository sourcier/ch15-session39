
import { useContext } from "react";
import Button from "@mui/material/Button";


import { CarsContext } from "../contexts/cars.context";

function FetchCars() {
  const { fetchCars } = useContext(CarsContext);

  return (
    <Button onClick={fetchCars} variant="contained">
      Fetch Cars
    </Button>
  );
}

export default FetchCars;
