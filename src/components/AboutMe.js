import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AboutMe() {
  const [normal, setExpand] = useState(false);
  const [contact, SetContact] = useState(false);

  const Expand = () => {
    setExpand(!normal);
  };
  const ContactDetails = () => {
    SetContact(!contact);
  };

  const ContactInfo = (
    <ul className="list-group">
      <li className="list-group-item">PhoneNumber: +1(479)8660883</li>
      <li className="list-group-item">Gmail: saijaswanth52@gmail.com</li>
      <li className="list-group-item">
        Linkedin:{" "}
        <a
          href="https://www.linkedin.com/in/suraneni-sai-jaswanth-ab31131b1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sai Jaswanth Suraneni
        </a>
      </li>
      <li className="list-group-item">Address: OverlandPark-Kansas.</li>
    </ul>
  );

  return (
    <div>
      <h2 className="text-info">
        <u>About Me</u>
      </h2>
      <p>
        Hi, I'm SaiJaswanthSuraneni,
        <br />
        Pursuing my masters in Computer Science at University of CENTRAL
        MISSOURI <br />
        and a passionate web developer based in Overland Park. <br />
        I specialize in Front-End development skills, <br />
        and I'm enthusiastic about becoming a REACT JS Developer..
      </p>
      <div>
        <h2 className="text-primary">
          <u>Skills</u>
        </h2>
        <ul className="list-group">
          <li className="list-group-item itemsBg">Web Development: HTML5, CSS3, JavaScript, PHP.</li>
          <li className="list-group-item itemsBg">Libraries: React JS</li>
          <li className="list-group-item itemsBg">Frameworks: Bootstrap, Node JS [Basics].</li>
          <li className="list-group-item itemsBg">Data Base: MySQL, MongoDB[Basics]</li>
          <li className="list-group-item itemsBg">Programming Languages: Python, Java[Basics].</li>
          <li className="list-group-item itemsBg">Technologies: Basics of JSON and Web Services (RESTful).</li>
          <li className="list-group-item itemsBg">Tools: MySQL, Postman, XAMPP, Axure [For Building Prototypes], and Trello.</li>
          <li className="list-group-item itemsBg">IDE: Visual Studio Code, PyCharm, MS Office</li>
          <li className="list-group-item itemsBg">Azure Fundamentalls, DBMS-SQL.</li>
          <li className="list-group-item itemsBg">Software Engineering: Knowledge of the Waterfall model and Agile methodologies for software development.</li>
        </ul>
      </div>

      {normal && (
        <div className="text-success">
          <p>
            I love to work on interesting projects and collaborate with others
            to bring creative ideas to life <br />
            and enjoy the challenge of building robust and scalable solutions...
          </p>
          <div className="m-3 p-2">
            <b className="text-info">
              <u>Contact Information</u>
            </b>
            <button className="btn btn-link" onClick={ContactDetails}>
              {contact ? "Hide Contact" : "Show Contact"}
            </button>
            {contact && ContactInfo}
          </div>
        </div>
      )}

      <button className="btn btn-primary" onClick={Expand}>
        {normal ? "Show Less" : "Show More"}
      </button>
    </div>
  );
}
