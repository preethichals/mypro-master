import React from 'react'
import Base from './Base';

function DealoftheDay() {
  return (
    <>
      <div>
        <h3
          className="container my-4 text-uppercase"
          style={{ letterSpacing: "0.5rem" }}
        >
          Deal of the Day
        </h3>
        <div className="container-fluid d-inline-flex bg-grey">
          <Base />
        </div>
      </div>
    </>
  );
}

export default DealoftheDay