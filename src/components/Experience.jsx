export default function Experience({ experience, setExperience }) {
  return (
    <>
      <h1>Experience</h1>
      {experience.map(exp => {
        return (
          <div key={exp.id}>
            <div>Company</div>
            <input value={exp.company} onChange={e => setExperience(experience.map(prev => prev.id === exp.id ? {...prev, company : e.target.value} : prev))}></input>
            <div>Position</div>
            <input value={exp.position} onChange={e => setExperience(experience.map(prev => prev.id === exp.id ? {...prev, position : e.target.value} : prev))}></input>
            <div>Start Date</div>
            <input value={exp.startDate} onChange={e => setExperience(experience.map(prev => prev.id === exp.id ? {...prev, startDate : e.target.value} : prev))}></input>
            <div>End Date</div>
            <input value={exp.endDate} onChange={e => setExperience(experience.map(prev => prev.id === exp.id ? {...prev, endDate : e.target.value} : prev))}></input>
            <div>Location</div>
            <input value={exp.location} onChange={e => setExperience(experience.map(prev => prev.id === exp.id ? {...prev, location : e.target.value} : prev))}></input>
            <div>Description</div>
            <input value={exp.description} onChange={e => setExperience(experience.map(prev => prev.id === exp.id ? {...prev, description : e.target.value} : prev))}></input>
            <button onClick={() => setExperience(experience.filter(item => item.id !== exp.id))}>Delete</button>
          </div>
        )
      })}
      <div>
        <button onClick={() => setExperience([...experience, {id : crypto.randomUUID(), company : '', position : '', startDate : '', endDate : '', location : '', description : ''}])}>Add</button>
      </div>
    </>
  )
}