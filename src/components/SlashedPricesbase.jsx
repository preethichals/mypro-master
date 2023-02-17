import React from 'react'
import dataSlsP from './dataSlasedPrice'
import SlashedPrices from './SlashedPrices'

function SlashedPricesbase() {
  const product = dataSlsP.map((item) => {
    return (
        <SlashedPrices
            key={item.id}
        brand={item.brand}
        img={item.img}
        newprice={item.offerPrice}
        oldprice={item.mrp}
      />
    );
  });
  return (
    <>
      <div>
        <h3
          className="container my-4 text-uppercase"
          style={{ letterSpacing: "0.5rem" }}
        >
          BRANDS AT SLASHED PRICES
        </h3>
        <div className="container-fluid d-inline-flex bg-grey">{product}</div>
      </div>
    </>
  );
}

export default SlashedPricesbase