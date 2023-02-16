import React from 'react'
import data from './data'
import Producty from './Producty'

function Productx() {
    const product = data.map((item) => {
        return <Producty title={item.title} img={item.url} brand={item.brand} newprice={item.offerPrice} oldprice={item.mrp} />
   })
    return (
      <>
        <div class="container">
          <h2>Women </h2>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 justify-content-start g-2">
            {product}
          </div>
        </div>
      </>
    );
}

export default Productx