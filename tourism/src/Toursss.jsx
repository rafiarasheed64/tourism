import React from 'react'
import Tourr from './Tourr'

const Toursss = ({tours,totalPeopled ,addDetails,named, removeTour,NameInp,PeopleInp ,countrySelect,daysInp}) => {
  return (
    <div style={{display: 'flex', flexDirection:'column',alignItems:'center' }}>
  <h1>OUR TOURS</h1>
<div style={{height:'max-content',display:'flex',flexWrap: 'wrap' }}>
  {tours.map((tour) => {
  return <Tourr key={tour.id}  {...tour} totalPeopled={totalPeopled} named={named} addDetails={addDetails} daysInp={daysInp} countrySelect={countrySelect} PeopleInp={PeopleInp} NameInp={NameInp}  removeTour={removeTour} />;
  })}
</div>


    </div>
  )
}

export default Toursss