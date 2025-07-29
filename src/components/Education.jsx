export default function Education({ education, setEducation }) {
  return (
    <>
      <h1>Education</h1>
      {education.map(edu => {
        return (
            <div key={edu.id}>
              <div>School</div>
              <input value={edu.school} onChange={e => setEducation(education.map(prev => prev.id === edu.id ? {...prev, school: e.target.value} : prev))}></input>
              <div>Degree</div>
              <input value={edu.degree} onChange={e => setEducation(education.map(prev => prev.id === edu.id ? {...prev, degree: e.target.value} : prev))}></input>
              <div>Start Date</div>
              <input value={edu.startDate} onChange={e => setEducation(education.map(prev => prev.id === edu.id ? {...prev, startDate: e.target.value} : prev))}></input>
              <div>End Date</div>
              <input value={edu.endDate} onChange={e => setEducation(education.map(prev => prev.id === edu.id ? {...prev, endDate: e.target.value} : prev))}></input>
              <div>Location</div>
              <input value={edu.location} onChange={e => setEducation(education.map(prev => prev.id === edu.id ? {...prev, location: e.target.value} : prev))}></input>
              <div>Description</div>
              <input value={edu.description} onChange={e => setEducation(education.map(prev => prev.id === edu.id ? {...prev, description: e.target.value} : prev))}></input>
              <button onClick={() => setEducation(education.filter(item => item.id !== edu.id))}>Delete</button>
            </div>
        )
      })}
      <div>
        <button onClick={() => setEducation([...education, {id: crypto.randomUUID(), school: '', degree: '', startDate: '', endDate: '', location: '', description: ''}])}>Add</button>
      </div>
    </>
  )
}