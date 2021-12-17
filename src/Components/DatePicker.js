import React, { useState } from "react";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const DatePicker = (props) => {
  const [value, setValue] = useState(new Date());
  const formattedDate = () => {
    return (
      value.getFullYear() + "-" + (value.getMonth() + 1) + "-" + value.getDate()
    );
  };
 props.setDate(formattedDate)
  return (
    <div>
      <Calendar value={value} onChange={setValue} />
    </div>
  );
};

export default DatePicker;
