import React from "react";
import Image from "../../Assets/pictures/me.jpg";
import { MDBCol, MDBRow, MDBContainer } from "mdb-react-ui-kit";

function About() {
  return (
    <>
      <MDBContainer classId="About">
        <h2 className="mt-3">About Me</h2>
        <MDBRow>
          <MDBCol className="d-flex" md="4">
            <img
              className="img-fluid float-left h-80"
              src={Image}
              alt="portrait"
            />
          </MDBCol>
          <MDBCol md="8">
            <p className="asset justify-content-start">
              Hello, my name is Sean Maddox. I graduated from the full stack
              bootcamp through the University of Oregon. Currently, I live in
              Eugene, Oregon, however I am willing to relocate. I am looking for
              potential careers in Full-Stack development, Front-End, and
              Back-End development.
            </p>
            <p className="asset-info justify-content-start">
              I am someone who is competitve which helps me strive to become
              better, a team player who will take on any task that will benefit
              the group and a hard worker who is always looking to take on new
              tasks or challenges.
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default About;
