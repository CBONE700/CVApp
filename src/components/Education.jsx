export default function Education({ education, setEducation, open, setOpen }) {
  return (
    <>
      <h1>Education</h1>
      {education.map(edu => {
        if (open.includes(edu.id)){
          return (
              <div key={edu.id}>
                <div>
                  <div>School</div>
                  <input value={edu.school} onChange={e => setEducation(education.map(prev => prev.id === edu.id ? {...prev, school: e.target.value} : prev))}></input>
                </div>
                <div>
                  <div>Degree</div>
                  <input value={edu.degree} onChange={e => setEducation(education.map(prev => prev.id === edu.id ? {...prev, degree: e.target.value} : prev))}></input>
                </div>
                <div>
                  <div>Start Date</div>
                  <input value={edu.startDate} onChange={e => setEducation(education.map(prev => prev.id === edu.id ? {...prev, startDate: e.target.value} : prev))}></input>
                </div>
                <div>
                  <div>End Date</div>
                  <input value={edu.endDate} onChange={e => setEducation(education.map(prev => prev.id === edu.id ? {...prev, endDate: e.target.value} : prev))}></input>
                </div>
                <div>
                  <div>Location</div>
                  <input value={edu.location} onChange={e => setEducation(education.map(prev => prev.id === edu.id ? {...prev, location: e.target.value} : prev))}></input>
                </div>
                <div>
                  <div>Bullet Points</div>
                  {edu.description.map((desc, i) => 
                  <div key={i} className="descs">
                    <input value={desc} onChange={e => 
                      setEducation(education.map(prev => prev.id === edu.id ? {...prev, description: prev.description.map((d, idx) => idx === i ? e.target.value : d)} : prev))}></input>
                    <button className="descDelBtn" onClick={() => setEducation(education.map((prev) => prev.id === edu.id ? {...prev, description: prev.description.filter((_, idx) => idx !== i)} : prev))}>X</button>
                  </div>)}
                  <button className="descAddBtn" onClick={() => setEducation(education.map(prev => prev.id === edu.id ? {...prev, description: [...edu.description, '']} : prev))}>+</button>  
                </div>
                <div className="delcloseBtns">
                  <button className='deleteBtn' onClick={() => setEducation(education.filter(item => item.id !== edu.id))}>Delete</button>
                  <button className="closeBtn" onClick={() => setOpen(open.filter(item => item !== edu.id))}>Close</button>
                </div>
              </div>
          )
        } else {
          return (
            <button className="openBtn" onClick={() => setOpen([...open, edu.id])}>{edu.school !== '' ? edu.school : "Education"}</button>
          )
        }
        })}
      <div>
        <button className='addBtn' onClick={() => {
          const id = crypto.randomUUID();
          setEducation([...education, {id: id, school: '', degree: '', startDate: '', endDate: '', location: '', description: []}]);
          setOpen([...open, id]);
          }}>+</button>
      </div>
    </>
  )
}