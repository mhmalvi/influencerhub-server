import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload, faSolid } from "@fortawesome/free-solid-svg-icons";

import Settings from "./Settings";

const Security = () => {
  const [value, setValue] = useState("");
  // const [startDate, setStartDate] = useState(new Date());
  const handleContantValue = (e) => {
    setValue(e.target?.value);
    console.log(value);
  };
  // value for yes no ->>>> price
  const [price, setPrice] = useState("");
  // const [startDate, setStartDate] = useState(new Date());
  const handleShowPrice = (e) => {
    setPrice(e.target?.value);
  };
  const [date, setDate] = useState(new Date());
  const [deadline, setDeadline] = useState(new Date());
  const handleCalendarClose = () => console.log("Calendar closed");
  const handleCalendarOpen = () => console.log("Calendar opened");

  return (
    <section className="bg-light mt-3 py-3">
      <section className="    ">
        <section className="container   ">
          <section className="row   ">
            <div className=" ">
              <section className=" ">
                <Settings />
              </section>
            </div>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Security;
