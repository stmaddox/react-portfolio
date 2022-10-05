import React from "react";
import { MDBRow, MDBCol, MDBContainer } from "mdb-react-ui-kit";

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
          <MDBCol>
            <a
              className="resume-link fs-2 mt-4 fw-bolder"
              style={{ textDecoration: "none" }}
              href="Resume.pdf"
              target="_blank"
              rel="norefferer"
            >
              Click Here to View Resume
            </a>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default Resume;
