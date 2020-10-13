import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import { Button } from "react-bootstrap";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";



function Home() {
  const history = useHistory()
  const [supervisorId, setSupervisorId] = useState("");
  const [reason, setReason] = useState("");
  const[type,setType] = useState("");
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());


  const [supervisorIdErr, setSupervisorIdErr] = useState({});
  const [reasonErr, setReasonErr] = useState({});

  
  function handleSubmit(event) {
    event.preventDefault();
    const isValid = formValidation();
    if (isValid) {
      
      //send data to backend

    }
  }

  function formValidation() {
    console.log("Inside form")
    const supervisorIdErr = {};
    const reasonErr = {};
    

    
    let isValid = true;
    let re = /[a-z0-9._%+-]+@[accenture]+\.[com]{2,15}/g;

    if (supervisorId == "") {
      supervisorIdErr.emailNotEntered = "*Enter the Supervisor ID";
      isValid = false;
    }

    if (supervisorId != "" && !re.test(supervisorId)) {
      supervisorIdErr.emailNotValid = "*Check the format of  Supervisor Id";
      isValid = false;
    }

    if (reason == "") {
      reasonErr.reasonNotEntered = "*Enter the Reason";
      isValid = false;
    }

    
    setSupervisorIdErr(supervisorIdErr);
    setReasonErr(reasonErr);
    return isValid;
  }

    return (
      <div className="Home" >
      <form  className="form1" onSubmit={handleSubmit}>
        <h1>Vacation Tracker</h1>
        <div className="input-wrapper">
          <label className="input-wrapper-label">
            Employee ID
            <input
              
              className="input-wrapper-input2"
              type="email"
              name="Employee_id"
              value={history.location.data}
              
            />
          </label>
        
        
        </div>
        <div className="input-wrapper">
          <label className="input-wrapper-label">
            Supervisor ID
            <input
              
              className="input-wrapper-input3"
              type="email"
              name="Supervisor_id"
              value={supervisorId} 
              onChange={(e) => setSupervisorId(e.target.value)}

              
            />
          </label>
        
          {Object.keys(supervisorIdErr).map((key) => {
            return <div style={{ color: "red" }}>{supervisorIdErr[key]}</div>;
          })}
        </div>
        <div className="input-wrapper">
          <label className="input-wrapper-label">
           Reason
            <input
              className="input-wrapper-input4"
              required
              type="text"
              name="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}  
            />
          </label>
          {Object.keys(reasonErr).map((key) => {
            return <div style={{ color: "red" }}>{reasonErr[key]}</div>;
          })}
        </div>
        <div className="input-wrapper">
          <label className="input-wrapper-label">
           Type
           <select value ={type} onChange = {(e) => setType(e.target.value)} className="input-wrapper-input5">
              <option value="sick">Sick</option>
              <option value="vacation">Vacation</option>
              
            </select>
          </label>
          
        </div>
        <div className="input-wrapper">
          <label className="input-wrapper-label">
           From-Date
        <DatePicker selected={fromDate} onChange={date => setFromDate(date)} className="input-wrapper-input6" />
        </label>
          
        </div>
        <div className="input-wrapper">
          <label className="input-wrapper-label">
           To-Date
        <DatePicker selected={toDate} onChange={date => setToDate(date)} className="input-wrapper-input7" />
        </label>
          
        </div>
        <Button block bsSize="large" dtype="submit" onClick={handleSubmit}>
          Apply
        </Button>
      </form>
    </div>
    
    );
  }


  //history.location.data;

  export default Home;