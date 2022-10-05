import React from "react";
import Image1 from "../../Assets/pictures/random.pw.png";
import Image2 from "../../Assets/pictures/dose.png";
import Image3 from "../../Assets/pictures/rhythm.in.region.png";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBBtn,
} from "mdb-react-ui-kit";
import { tab } from "@testing-library/user-event/dist/tab";

function Portfolio() {
  const openNewTab = (url) => {
    window.open(url, "_blank", "noopener, norefferer");
  };

  return (
    <MDBContainer>
      <h2 className="mt-3">Portfolio</h2>
      <MDBRow className="row-cols-1 row-cols-md-3 g-4">
        <MDBCol>
          <MDBCard>
            <MDBCardImage
              src={Image1}
              alt="Random Password Generator"
              position="top"
            />
            <MDBCardBody>
              <MDBCardTitle>Random Password Generator</MDBCardTitle>
              <MDBCardText>
                This application will help you generate those pesky passwords
                and allows for the user to choose how many characters they would
                like for their password as well as if they would like numbers,
                special characters, lowercase letters and uppercase letters.
              </MDBCardText>
            </MDBCardBody>
            <MDBBtn
              onClick={() =>
                openNewTab("https://stmaddox.github.io/random.pw/")
              }
            >
              View App
            </MDBBtn>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard>
            <MDBCardImage src={Image2} alt="Dose" position="top" />
            <MDBCardBody>
              <MDBCardTitle>Dose</MDBCardTitle>
              <MDBCardText>
                Dose is an application that will help users track their
                medication, its cost and when to refill their medication. Its
                purpose is to help everyone stay on top of their medication
                regimate.
              </MDBCardText>
            </MDBCardBody>
            <MDBBtn
              onClick={() =>
                openNewTab("https://cryptic-inlet-45736.herokuapp.com/")
              }
            >
              View App
            </MDBBtn>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard>
            <MDBCardImage src={Image3} alt="Rhythm in Region" position="top" />
            <MDBCardBody>
              <MDBCardTitle>Rhythm in Region</MDBCardTitle>
              <MDBCardText>
                Rhythm in Region is an application where users can search a city
                and a genre of music and it will show users what concerts are
                currently showing. From here users can sample songs, through
                Shazam, of the perfoming artists to give them more insight if it
                would be a concert they would like to attend. Users can also
                purchase tickets, through tickmaster, if they would like to go.
              </MDBCardText>
            </MDBCardBody>
            <MDBBtn
              onClick={() =>
                openNewTab("https://bin-ostrowski.github.io/rhythm-in-region/")
              }
            >
              View App
            </MDBBtn>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Portfolio;
