import React, { useState } from "react";

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const TableDatePicker = (props) => {
        const {
          date,
          onChange
        } = props
      
            

 return (
     <div>
   <Calendar 
   value={date}
   onChange={onChange}
    />
   </div>
 );
 }

export default TableDatePicker;