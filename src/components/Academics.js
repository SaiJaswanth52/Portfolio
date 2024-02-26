import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Academics() {
  const [workexp, setWorkExp] = useState(false);
  const [education, setEducation] = useState(false);

  const Work = () => {
    setWorkExp(!workexp);
  };

  const Educ = () => {
    setEducation(!education);
  };

  const WorkExp = () => (
    <div className="m-4 p-4">
      <h1 className='title'><u>Work Experience</u></h1>
      {[
        {
          CompanyName: 'TataConsultancyServices',
          Designation: "Ass. System's Engineer",
          Duration: '22 Months[February 2021 to December 2022]',
          Client: "'Ledvance'",
          Tasks: [
            <ul className="list-group">
            <li className="list-group-item itemsBg">Working on the tickets raised by the users and solve them within SLA</li>
            <li className="list-group-item itemsBg">Maintenance of set of Applications to provide uninterrupted availability</li>
            <li className="list-group-item itemsBg">Responsible for creating safe connections for exchange of the data</li>
            <li className="list-group-item itemsBg">Assisted the development team as well in front-end development</li>
            <li className="list-group-item itemsBg">Experience in working with and coordinating cross-functional teams operating in different regions and time zones.</li>
            </ul>
          ]
        }
      ].map((exp, key) => (
        <div key={key}>
          <h3>Company: {exp.CompanyName}</h3>
          <p>Designation: {exp.Designation}</p>
          <p>Duration: {exp.Duration}</p>
          <p>Client: {exp.Client}</p>
          Tasks:
          <ul style={{ paddingLeft: '2px' }}>
            {exp.Tasks.map((task, i) => (
              <p key={i}>{task}</p>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  const EduSummary = () => (
    <div>
    <h2 class="title"><u>Education Summary</u></h2>
    <div className="m-5 p-4 border d-flex flex-row">
    <div className="me-4"></div>
      {[
        {
          ID: 1,
          Degree: 'Masters in Computer Science',
          School: 'University of Central Missouri.',
          Duration: 'January-2023 to May-2024',
          GPA: '3.77',
          Location: 'USA-MISSOURI'
        },
        {
          ID: 2,
          Degree: 'BachelorOfTechnology',
          School: 'Computer Science at LBRCE.',
          Duration: 'June-2016 to Sept-2020',
          GPA: '8.05',
          Location: 'India'
        }
      ].map((ed, ID) => (
        <div key={ID}>
          <h3>Degree: {ed.Degree}</h3>
          <p>School: {ed.School}</p>
          <p>Duration: {ed.Duration}</p>
          <p>GPA: {ed.GPA}</p>
          <p>Location: {ed.Location}</p>
        </div>
        
      ))}
    </div>
    </div>
  );

  return (
    <div>
      {workexp && <WorkExp />}
      {education && <EduSummary />}
    {education ?'': <button className="btn btn-primary m-2" onClick={Work}>{workexp ? 'Close Work Experience' : 'Work Experience'}</button> }
     {workexp ?'': <button className="btn btn-primary m-2" onClick={Educ}>{education ? 'Close Education Summary' : 'Education Summary'}</button>}

    </div>
  );
}
