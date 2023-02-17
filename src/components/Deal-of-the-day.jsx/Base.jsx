import React from 'react'

function Base() {
  return (
    <div
      className="d-flex flex-column"
      style={{ maxWidth:"16rem"}}
    >
      <div className="p-2 bg-info ">
        <img src="../Images/DealOftheDAy/image-01.webp" style={{width:"100%"}}/>
      </div>
      <div className="p-2 bg-White" style={{marginTop:"-5em"}}>Flex item 2</div>
      <div className="p-2 bg-primary">Flex item 3</div>
    </div>
  );
}

export default Base