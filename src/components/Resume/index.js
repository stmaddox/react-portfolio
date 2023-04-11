import React from "react";
import { MDBRow, MDBCol, MDBContainer } from "mdb-react-ui-kit";

const skill = [
  "JavaScript",
  "CSS",
  "HTML",
  "React",
  "MongoDB",
  "Node.js",
  "Express.js",
  "MySQL",
  "jQuery",
  "Apollo",
  "Mongoose",
  "Bootstrap",
  "NPM",
  "DotENV",
  "Handlebars",
  "Jest",
  "GraphQL",
  "GitHub",
  "GitBash",
  "Sequelize",
  "JSON Web Token",
  "React-Router-DOM",
  "BCRYPT",
  "MERN",
];

const sortSkill = skill.sort();

function Resume() {
  return (
    <>
      <MDBContainer>
        <MDBRow>
          <MDBCol className="d-flex">
            <h2 className="mt-3 w-100">Resume</h2>
          </MDBCol>
        </MDBRow>
        <MDBRow className="d-flex">
          <MDBCol className="mt-3">
            <a
              className="resume-link fs-2 mt-4 fw-bolder"
              style={{ textDecoration: "none" }}
              href="https://docs.google.com/document/d/11-WBOV3R4rV0Gma2gKaQJPvUY4xNqUMDfPRop5XGJOE/edit?usp=sharing"
              download
              target="_blank"
              rel="noreferrer noopener"
            >
              Click Here to View Resume
            </a>
          </MDBCol>
        </MDBRow>
        <MDBRow className="mt-4">
          <MDBCol>
            <h2 className="text-decoration-underline">
              Computer Languages Known:
            </h2>
            <ul className="skills-container d-flex flex-fill flex-wrap list-group list-group-horizontal">
              {sortSkill.map((skill, i) => (
                <li
                  className="code-skill p-2 list-group-item border-0 fw-bold list-group-item-dark"
                  key={i}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default Resume;
