// Placeholder to host a component
import React from 'react';
const Hours = () =>{
const currentDay=new Date().getDay();
let openingHours;
if(currentDay>=1 && currentDay<=5)
{openingHours='10am-4pm';}
else if(currentDay===0 || currentDay===6){
    openingHours='9am-8pm';
    }
    else{
        openingHours='Closed-Cerrado'
    }
return(
<div>
    <h2>Shelter Hours- Horario</h2>
    <p>Today's Hours - Horario del día:{openingHours}</p>
</div>
);
};
export default Hours;
