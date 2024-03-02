import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import '../App';

export default function Academics() {
  const [workexp, setWorkExp] = useState(false);
  const [education, setEducation] = useState(false);

  const toggleWorkExp = () => {
    setWorkExp(!workexp);
  };

  const toggleEducation = () => {
    setEducation(!education);
  };

  const WorkExp = () => (
    <div className="m-4 p-4">
      <h1 className="title"><u>Work Experience</u></h1>
      {[{
        CompanyName: 'Tata Consultancy Services',
        Designation: "Ass.System's Engineer",
        Duration: '22 Months[February 2021 to December 2022]',
        Client: "'Ledvance'",
        Location: "Pune-India.",
        Tasks: [
          '-Working on the tickets raised by the users and solve them within SLA',
          '-Maintaining a set of Applications to provide uninterrupted availability',
          '-Responsible for creating safe connections for electronic exchange of the data',
          '-Assisted the development team as well in front-end development',
          '-Experience in working with and coordinating cross-functional teams operating in different regions and time zones.'
        ]
      }].map((exp, key) => (
        <div key={key}>
          <h3>Company: {exp.CompanyName}</h3>
          <p><sub>Designation: {exp.Designation}</sub></p>
          <p>Client: {exp.Client}</p>
          <p>Duration: {exp.Duration}</p>
          <p>Location: {exp.Location}</p>
          <hr></hr>
          <p>Tasks:</p>
          <ul className="list-group">
            {exp.Tasks.map((task, i) => (
              <li key={i} className="list-group-item itemsBg">{task}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  const EduSummary = () => (
    <div>
      <h2 className="title"><u>Education Summary</u></h2>
      <div className="d-flex flex-row">
        {[
          {
            ID: 1,
            Degree: 'Masters in Computer Science',
            School: 'University of Central Missouri',
            Duration: 'January-2023 to May-2024',
            GPA: '3.77',
            Location: 'USA-MISSOURI'
          },
          {
            ID: 2,
            Degree: 'Bachelor of Technology in Computer Science',
            School: 'LakkiReddy Bali Reddy College',
            Duration: 'June-2016 to Sept-2020',
            GPA: '8.05',
            Location: 'AP,India'
          }
        ].map((ed) => (
          <Card key={ed.ID} className="m-2">
            <Card.Body className='itemsBg'>
              <Card.Title>Degree: {ed.Degree}</Card.Title>
              <Card.Subtitle>School: {ed.School}</Card.Subtitle>
              <Card.Text>
                Duration: {ed.Duration}<br/>
                GPA: {ed.GPA}<br/>
                Location: {ed.Location}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );

  return (
    <div>
      {workexp && <WorkExp />}
      {education && <EduSummary />}
      {!education && <Button className="btn btn-primary m-2" onClick={toggleWorkExp}>
        {workexp ? 'Close Work Experience' : 'Work Experience'}
      </Button>}
      {!workexp && <Button className="btn btn-primary m-2" onClick={toggleEducation}>
        {education ? 'Close Education Summary' : 'Education Summary'}
      </Button>} <br></br>

      <a href='https://drive.google.com/file/d/1qg-1IG5svOistdBtDz4qjb9ig6s5_FDb/view?usp=sharing' target='_blank'> My-RESUME</a>

    </div>
  );
}
