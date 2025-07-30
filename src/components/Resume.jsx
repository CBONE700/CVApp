export default function Resume({ education, experience, personalDetails }) {
  return (
    <>
      <div id="heading">
        <div id="fullName">{personalDetails.fullName}</div>
        <div id="address">{personalDetails.address}</div>
        <div id="contacts">
          <div id="email">{personalDetails.email}</div>
          <div>{personalDetails.email !== '' && personalDetails.phoneNumber !== '' ? '|' : null}</div>
          <div id="phoneNumber">{personalDetails.phoneNumber}</div>
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
                    <div className="topline">  
                      <div>
                        <div className="eduSchool"><strong>{item.school}</strong></div>
                        <div className="eduDegree"><i>{item.degree}</i></div>
                      </div>
                      <div>
                        <div className="eduLocation"><strong>{item.location}</strong></div>
                        <div className="dates">
                          <div className="eduStartDate"><i>{item.startDate}</i></div>
                          <div><i>{item.startDate !== '' && item.endDate !== '' ? '–' : null}</i></div>
                          <div className="eduEndDate"><i>{item.endDate}</i></div>
                        </div>
                      </div>
                    </div>
                    <div className="eduDescription">{item.description.map((desc, i) => {
                      return (
                        <div className="descResume" key={i}>
                          • {desc}
                        </div>
                      )})}</div>
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
                      <div className="topline">
                        <div>
                          <div className="expCompany"><strong>{item.company}</strong></div>
                          <div className="expPosition"><i>{item.position}</i></div>
                        </div>
                        <div>
                          <div className="expLocation"><strong>{item.location}</strong></div>
                          <div className="dates">
                            <div className="expStartDate"><i>{item.startDate}</i></div>
                            <div><i>{item.startDate !== '' && item.endDate !== '' ? '–' : null}</i></div>
                            <div className="expEndDate"><i>{item.endDate}</i></div>
                          </div>
                        </div>
                      </div>
                        <div className="expDescription">{item.description.map((desc, i) => {
                          return (
                            <div className="descResume" key={i}>
                              • {desc}
                            </div>
                          )})}</div>
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