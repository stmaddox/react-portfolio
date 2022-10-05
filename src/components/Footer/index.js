import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";

function Footer() {
  return (
    <MDBFooter className="footer fixed-bottom text-center text-white mt-5">
      <MDBContainer className="p-3 pb-0 pt-2">
        <section className="mb-0">
          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: "#0082ca" }}
            href="https://www.linkedin.com/in/sean-maddox-b34487109/"
            role="button"
          >
            <MDBIcon className="pe-5 pb-5" fab icon="linkedin-in" />
          </MDBBtn>

          <MDBBtn
            floating
            className="m-2"
            style={{ backgroundColor: "#333333" }}
            href="https://github.com/stmaddox"
            role="button"
          >
            <MDBIcon className="pe-5 pb-5" fab icon="github" />
          </MDBBtn>
        </section>
      </MDBContainer>
    </MDBFooter>
  );
}

export default Footer;
