import React from "react";
import Title from "../components/Title";
import { useState } from "react";


const SignatureApp = () => {

    const [name, setName] = useState("Your Sigture");
    const  [date, setDate] = useState("Select Date");

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleDateChange  = (e) => {
        setDate(e.target.value);
    }

    const inputStyle = {
        border: "none",
        borderBottom: "2px dotted",
        outline: "none",
        padding : ".35rem 0"
     };
    document.body.style.background = "#eee";
return (
    <div className="container text-center">
        <Title classes={"h1"} text={name} />
        <Title classes={"h4"} text={date} />
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
         when an unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the leap into 
          electronic typesetting, remaining essentially unchanged. 
          It was popularised in the 1960s with the release of Letraset sheets containing
           Lorem Ipsum passages, and more recently with desktop publishing software
            like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <footer className="d-flex" style={{
            justifyContent: "space-around",
            position: "relative",
            top: "40vh"
        }}>
      
        <input type="date" value={date} style={inputStyle} onChange={handleDateChange} />
        <input type="text" value={name} style={inputStyle} onChange={handleNameChange} />
        </footer>
     
    </div>
);
}

export default SignatureApp;