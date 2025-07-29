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
  return (
    <>
      <div id="inputs">
        <div id="personalDetails">
          <PersonalDetails personalDetails={personalDetails} setPersonalDetails={setPersonalDetails}></PersonalDetails>
        </div>
        <div id="education">
          <Education education={education} setEducation={setEducation}></Education>
        </div>
        <div id="experience">
          <Experience experience={experience} setExperience={setExperience}></Experience>
        </div>
      </div>
      <div id="output">
        <Resume education={education} experience={experience} personalDetails={personalDetails}></Resume>
      </div>
    </>
  )
}

export default App
