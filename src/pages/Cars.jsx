import Wrap from "../components/Wrap";

import CarsList from "../components/CarsList";
import AddCar from "../components/AddCar";
import FetchCars from "../components/FetchCars";

// pages/Cars.jsx
function Cars() {
  return (
    <>
      <h1>Cars</h1>
      <Wrap>
        <Wrap>
          <Wrap>
            <Wrap>
              <Wrap>
                <AddCar />
                <FetchCars />
                <Wrap>
                  <CarsList />
                </Wrap>
              </Wrap>
            </Wrap>
          </Wrap>
        </Wrap>
      </Wrap>
    </>
  );
}

export default Cars;
