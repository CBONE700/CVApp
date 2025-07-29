import PersonalDetails from "./PersonalDetails.jsx";

export default function Resume({ education, experience, personalDetails }) {
  return (
    <>
      <div id="heading">
        <div id="fullName">{personalDetails.fullName}</div>
        <div id="contactDetails">
          <div id="email">{personalDetails.email}</div>
          <div id="phoneNumber">{personalDetails.phoneNumber}</div>
          <div id="address">{personalDetails.address}</div>
        </div>
      </div>
      <div id="main">
        <div id="educationOutput">
          {education.length !== 0 ? (
            <>
              <h1>Education</h1>
              <div>
                {education.map(item => (
                  <div key={item.id}>  
                    <div className="eduSchool">{item.school}</div>
                    <div className="eduDegree">{item.degree}</div>
                    <div className="eduStartDate">{item.startDate}</div>
                    <div className="eduEndDate">{item.endDate}</div>
                    <div className="eduLocation">{item.location}</div>
                    <div className="eduDescription">{item.description}</div>
                  </div>
                ))}
              </div>
            </>
            ) : null}
        </div>
        <div id="experienceOutput">
            {experience.length !== 0 ? (
              <>
                <h1>Experience</h1>
                <div>
                  {experience.map(item => (
                    <div key={item.id}>
                      <div className="expCompany">{item.company}</div>
                      <div className="expPosition">{item.position}</div>
                      <div className="expStartDate">{item.startDate}</div>
                      <div className="expEndDate">{item.endDate}</div>
                      <div className="expLocation">{item.location}</div>
                      <div className="expDescription">{item.description}</div>
                    </div>
                  ))}
                </div>
              </>
            ) : null}
        </div>
      </div>
    </>
  )
}