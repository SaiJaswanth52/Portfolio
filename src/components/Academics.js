import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
import "../App";

export default function Academics() {
  const [workexp, setWorkExp] = useState(false);
  const [education, setEducation] = useState(false);

  const toggleWorkExp = () => {
    setWorkExp(!workexp);
    setEducation(false); // Close education if work experience is opened
  };

  const toggleEducation = () => {
    setEducation(!education);
    setWorkExp(false); // Close work experience if education is opened
  };

  const WorkExp = () => (
    <div className="m-4 p-4">
      <h1 className="title">
        <u>Work Experience</u>
      </h1>
      {[
        {
          CompanyName: "PNC Financial Services",
          Designation: "Java Full Stack Developer",
          Duration: "February 2024 to Current",
          Location: "Kansas-USA",
          Tasks: [
            "Created secure, high-performance web applications using Java, Spring Boot, and React.js, enhancing customer account management and transaction processing interfaces",
            "Utilized TypeScript to refactor legacy JavaScript code in PNC’s online banking tools",
            "Deployed applications to AWS using Jenkins and Docker, automating the CI/CD pipeline, which resulted in faster feature releases and boosted operational efficiency",
            "Developed RESTful APIs in Java, enabling better data handling and communication across services",
            "Optimized data storage and retrieval by integrating PostgreSQL and MongoDB databases",
            "Conducted code reviews and testing using JUnit, identifying and resolving key performance bottlenecks",
          ],
        },
        {
          CompanyName: "Citus InfoTech",
          Designation: "Full Stack Developer",
          Duration: "September 2019 to December 2022",
          Location: "India",
          Tasks: [
            "Engineered responsive e-commerce platform using Java, Spring Boot, and React.js for an e-commerce client",
            "Built RESTful APIs using Spring MVC and Hibernate within a microservices framework, enabling efficient data exchange between user interfaces and backend services",
            "Assisted in backend development using Java and Spring Boot, working on minor bug fixes and enhancements to improve system performance",
            "Developed RESTful APIs in Java, enabling better data handling and communication across services",
            "Built internal tools to streamline business processes, leveraging thorough code reviews and unit testing with Mockito",
            "Applied Kafka for real-time data streaming in the e-commerce application, facilitating timely updates for inventory management and user notifications",
          ],
        },
      ].map((exp, key) => (
        <div key={key}>
          <h3>Company: {exp.CompanyName}</h3>
          <p>
            <sub>Designation: {exp.Designation}</sub>
          </p>
          <p>Duration: {exp.Duration}</p>
          <p>Location: {exp.Location}</p>
          <hr />
          <p>Tasks:</p>
          <ul className="list-group">
            {exp.Tasks.map((task, i) => (
              <li key={i} className="list-group-item itemsBg">
                {task}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  const EduSummary = () => (
    <div>
      <h2 className="title">
        <u>Education Summary</u>
      </h2>
      <div className="d-flex flex-row">
        {[
          {
            ID: 1,
            Degree: "Masters in Computer Science",
            School: "University of Central Missouri",
            Duration: "January 2023 to May 2024",
            GPA: "3.80",
            Location: "USA-MISSOURI",
          },
          {
            ID: 2,
            Degree: "Bachelor of Technology in Computer Science",
            School: "LakkiReddy Bali Reddy College",
            Duration: "June 2016 to September 2020",
            GPA: "8.05",
            Location: "AP, India",
          },
        ].map((ed) => (
          <Card key={ed.ID} className="m-2">
            <Card.Body className="itemsBg">
              <Card.Title>Degree: {ed.Degree}</Card.Title>
              <Card.Subtitle>School: {ed.School}</Card.Subtitle>
              <Card.Text>
                Duration: {ed.Duration}
                <br />
                GPA: {ed.GPA}
                <br />
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
      {!workexp && (
        <Button className="btn btn-primary m-2" onClick={toggleWorkExp}>
          {workexp ? "Close Work Experience" : "Work Experience"}
        </Button>
      )}
      {!education && (
        <Button className="btn btn-primary m-2" onClick={toggleEducation}>
          {education ? "Close Education Summary" : "Education Summary"}
        </Button>
      )}
      <br />
      <a
        href="https://drive.google.com/file/d/16JXeEzm2Hi20xGqHtJHqocfpN4nTe958/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        My Resume
      </a>
    </div>
  );
}
