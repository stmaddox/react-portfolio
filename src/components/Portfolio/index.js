import React from "react";
import Image1 from "../../Assets/pictures/random.pw.png";
import Image2 from "../../Assets/pictures/dose.png";
import Image3 from "../../Assets/pictures/rhythm.in.region.png";
import Image4 from "../../Assets/pictures/social.network.png";
import Image5 from "../../Assets/pictures/team.profile.png";
import Image6 from "../../Assets/pictures/chore.it.up.png";
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
          <MDBCard className="h-100">
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
          <MDBCard className="h-100">
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
          <MDBCard className="h-100">
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
      <MDBRow>
        <MDBCol className="mt-3">
          <MDBCard className="h-100">
            <MDBCardImage src={Image4} alt="Social Network" position="top" />
            <MDBCardBody>
              <MDBCardTitle>Social Network</MDBCardTitle>
              <MDBCardText>
                Social Network is not a traditional application, but rather a
                demonstation when using Express.js, MongoDB, and Node.js. In
                Social Network users are able to sign up, update their
                information, find another user by searching all or by id, and
                delete their account/information. Also users can add and delete
                friends. Once they are friends with another user they can
                respond to their posts just like in any other social media
                platform. To view a demonstation with Insomnia click on the view
                app button.
              </MDBCardText>
            </MDBCardBody>
            <MDBBtn
              onClick={() =>
                openNewTab(
                  "https://drive.google.com/file/d/1cDPaayDMDWUK4X05iX_WSMsab1t74rKk/view"
                )
              }
            >
              View App
            </MDBBtn>
          </MDBCard>
        </MDBCol>
        <MDBCol className="mt-3">
          <MDBCard className="h-100">
            <MDBCardImage
              src={Image5}
              alt="Team Profile Generator"
              position="top"
            />
            <MDBCardBody>
              <MDBCardTitle>Team Profile Generator</MDBCardTitle>
              <MDBCardText>
                In Team Profile Generator employers are able to enter their
                employee's information such as their name, email, role in the
                company, as well as their link to their GitHub if needed. As you
                enter the each employees information it will prompt the user if
                there is another employee that they would like to enter. Once
                all the employee's are entered in a page will populate with the
                information provided. This application was created using
                Node.js, inquirer, as well as jest. Click on the view app button
                to see a video demonstation of the application.
              </MDBCardText>
            </MDBCardBody>
            <MDBBtn
              onClick={() =>
                openNewTab(
                  "https://drive.google.com/file/d/1-avsrQTqfsRWvzHJhv2d98vCLrSboiFg/view"
                )
              }
            >
              View App
            </MDBBtn>
          </MDBCard>
        </MDBCol>
        <MDBCol className="mt-3">
          <MDBCard className="h-100">
            <MDBCardImage src={Image6} alt="Chore It Up" position="top" />
            <MDBCardBody>
              <MDBCardTitle>Chore It Up</MDBCardTitle>
              <MDBCardText>
                Chore It Up is a MERN stack application tailored for adults
                where users can track the chores they are assigned to do around
                the house. After a user signs up, one user can then create a
                group and invite other users to that group. Once people join
                they can assign each other chores that need to be done, update
                the chore, or mark it as complete.
              </MDBCardText>
            </MDBCardBody>
            <MDBBtn
              onClick={() =>
                openNewTab("https://floating-atoll-58183.herokuapp.com/")
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
