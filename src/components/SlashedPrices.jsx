import React from 'react'

function SlashedPrices() {
    return (
      <div class=" px-2 d-block bg-white mx-2 my-3 ">
        <div>
          <img
            src="../Images/logo/roadster-01.png"
            style={{ width: "4rem" }}
            className="mx-auto d-block"
          />
        </div>
        <div class=" bg-white">
          <img
            src="../Images/Slashed-Price-Image/roadster-t-shirt.jpeg"
            style={{ width: "100%" }}
          />
        </div>
        <h5 className="text-center">Starting</h5>
        <h4 className="text-center">
          Rs. <span className="text-decoration-line-through p-1">599 </span>
          <span>399</span>
        </h4>
      </div>
    );
}

export default SlashedPrices;