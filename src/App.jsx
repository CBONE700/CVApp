import { useState } from "react";

import PersonalDetails from "./components/PersonalDetails.jsx";
import Education from "./components/Education.jsx";
import './App.css'
import Experience from "./components/Experience.jsx";
import Resume from "./components/Resume.jsx";

function App() {
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
      <div id="output">
        <Resume education={education} experience={experience} personalDetails={personalDetails}></Resume>
      </div>
    </>
  )
}

export default App
