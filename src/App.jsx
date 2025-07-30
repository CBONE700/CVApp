import { useState, useRef } from "react";
import html2pdf from 'html2pdf.js';

import PersonalDetails from "./components/PersonalDetails.jsx";
import Education from "./components/Education.jsx";
import './App.css'
import Experience from "./components/Experience.jsx";
import Resume from "./components/Resume.jsx";

function App() {
  const resumeRef = useRef();
  const handleDownload = () => {
    const element = resumeRef.current;
    const options = {
      filename:     'resume.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
    
    html2pdf().set(options).from(element).save();
  };

  const [personalDetails, setPersonalDetails] = useState({fullName: '', email: '', phoneNumber: '', address: ''})
  const [education, setEducation] = useState([])
  const [experience, setExperience] = useState([])
  const [open, setOpen] = useState([])
  return (
    <>
      <div id="inputs">
        <div id="personalDetailsInput">
          <PersonalDetails personalDetails={personalDetails} setPersonalDetails={setPersonalDetails}></PersonalDetails>
        </div>
        <div id="educationInput">
          <Education education={education} setEducation={setEducation} open={open} setOpen={setOpen}></Education>
        </div>
        <div id="experienceInput">
          <Experience experience={experience} setExperience={setExperience} open={open} setOpen={setOpen}></Experience>
        </div>
      </div>
      <div id="output" ref={resumeRef}>
        <Resume education={education} experience={experience} personalDetails={personalDetails}></Resume>
      </div>
      <div>
        <button id="dlBtn" onClick={handleDownload}>Download PDF</button>
      </div>
    </>
  )
}

export default App
