export default function Experience({ experience, setExperience, open, setOpen }) {
  return (
    <>
      <h1>Experience</h1>
      {experience.map(exp => {
        if (open.includes(exp.id)){
          return (
            <div key={exp.id}>
              <div>
                <div>Company</div>
                <input value={exp.company} onChange={e => setExperience(experience.map(prev => prev.id === exp.id ? {...prev, company : e.target.value} : prev))}></input>
              </div>
              <div>
                <div>Position</div>
                <input value={exp.position} onChange={e => setExperience(experience.map(prev => prev.id === exp.id ? {...prev, position : e.target.value} : prev))}></input>
              </div>
              <div>
                <div>Start Date</div>
                <input value={exp.startDate} onChange={e => setExperience(experience.map(prev => prev.id === exp.id ? {...prev, startDate : e.target.value} : prev))}></input>
              </div>
              <div>
                <div>End Date</div>
                <input value={exp.endDate} onChange={e => setExperience(experience.map(prev => prev.id === exp.id ? {...prev, endDate : e.target.value} : prev))}></input>
              </div>
              <div>
                <div>Location</div>
                <input value={exp.location} onChange={e => setExperience(experience.map(prev => prev.id === exp.id ? {...prev, location : e.target.value} : prev))}></input>
              </div>
              <div>
                <div>Bullet Points</div>
                {exp.description.map((desc, i) => 
                  <div key={i} className="descs">
                    <input value={desc} onChange={e => 
                      setExperience(experience.map(prev => prev.id === exp.id ? {...prev, description: prev.description.map((d, idx) => idx === i ? e.target.value : d)} : prev))}></input>
                    <button className="descDelBtn" onClick={() => setExperience(experience.map((prev) => prev.id === exp.id ? {...prev, description: prev.description.filter((_, idx) => idx !== i)} : prev))}>X</button>
                  </div>)}
                  <button className="descAddBtn" onClick={() => setExperience(experience.map(prev => prev.id === exp.id ? {...prev, description: [...exp.description, '']} : prev))}>+</button>
              </div>
              <div className="delcloseBtns">
                <button className='deleteBtn' onClick={() => setExperience(experience.filter(item => item.id !== exp.id))}>Delete</button>
                <button className="closeBtn" onClick={() => setOpen(open.filter(item => item !== exp.id))}>Close</button>
              </div>
            </div>
        )} else {
          return (
            <button className="openBtn" onClick={() => setOpen([...open, exp.id])}>{exp.company !== '' ? exp.company : "Experience"}</button>
          )
        }
      })}
      <div>
        <button className='addBtn' onClick={() => {
          const id = crypto.randomUUID();
          setExperience([...experience, {id : id, company : '', position : '', startDate : '', endDate : '', location : '', description : []}]);
          setOpen([...open, id]);
          }}>+</button>
      </div>
    </>
  )
}