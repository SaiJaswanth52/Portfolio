import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AboutMe() {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <h2 className="text-info">
        <u>About Me</u>
      </h2>

      <p>
        Hi, I'm SaiJaswanthSuraneni, You can call me as "SAI"...
        <br />
        Pursued my masters in Computer Science at UNIVERSITY of CENTRAL MISSOURI{" "}
        <br />
        and a passionate Full Stack developer with Over 3 Years Of Experience as
        an web developer. <br />
        {/* I specialize in Front-End development skills, <br />
        and I'm enthusiastic about becoming a REACT JS Developer.. */}
      </p>
      <div>
        <h2 className="text-primary">
          <u>Skills</u>
        </h2>
        <ul className="list-group">
          <li className="list-group-item itemsBg">
            Web Development: HTML5, CSS3, JavaScript, PHP, Node JS, C# .Net.
          </li>
          <li className="list-group-item itemsBg">
            Library: React JS, Framework: Bootstrap, Spring.
          </li>
          <li className="list-group-item itemsBg">
            Data Base: MySQL, MongoDB.
          </li>
          <li className="list-group-item itemsBg">
            Programming Languages: Java, Python, C.
          </li>
          <li className="list-group-item itemsBg">
            Technologies: JSON and Web Services (RESTful).
          </li>
          <li className="list-group-item itemsBg">
            IDE: Visual Studio Code, PyCharm, MS Office, STS, Eclipse.
          </li>
          <li className="list-group-item itemsBg">
            {" "}
            Certifications: Azure Fundamentals, DBMS-SQL.
          </li>
          <li className="list-group-item itemsBg">
            {" "}
            Soft Skills: Team Work, Decision Making, Communication and
            Leadership
          </li>
          <li className="list-group-item itemsBg">
            Tools: MySQL, Postman, XAMPP, Axure [For Building Prototypes], and
            Trello.
          </li>
          <li className="list-group-item itemsBg">
            Software Engineering: Knowledge on Waterfall model and Agile
            methodologies for software development.
          </li>
        </ul>
      </div>

      {expanded && (
        <div className="text-success">
          <p>
            I love to work on interesting projects and collaborate with others
            to bring creative ideas to life and enjoy the challenge of building
            robust and scalable solutions... <hr></hr>
            <u>Some of my hobbies include...</u> <br />
            Cooking, Watching Games, Playing Sports, Fitness Activities,
            Professional Networking and a little code.
          </p>
        </div>
      )}

      <button className="btn btn-primary" onClick={toggleExpand}>
        {expanded ? "Show Less" : "More Information"}
      </button>
    </div>
  );
}
