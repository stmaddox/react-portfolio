import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
} from 'mdb-react-ui-kit';

export default function Nav(props) {
  const [showNavRight, setShowNavRight] = useState(false);

  return (
    <MDBNavbar expand='lg' className='navigation-bar'>
      <MDBContainer fluid>

        <MDBNavbarItem className='d-flex'>
          <MDBNavbarLink className='fs-5 fw-bold' href='/'>
            Sean Maddox
          </MDBNavbarLink>
        </MDBNavbarItem>
        <MDBNavbarNav right fullWidth={false} className='mb-1 mb-lg-0'>
          <MDBNavbarItem className="d-flex">
            <MDBIcon className="mt-3" fas icon="user-tie" />
            <MDBNavbarLink className='me-1 fs-5' href='#About' onClick={() => props.setCurrentPage('About')}>About Me</MDBNavbarLink>
          </MDBNavbarItem>

          <MDBNavbarItem className="d-flex">
            <MDBIcon className="mt-3" fas icon="phone-square" />
            <MDBNavbarLink className='me-1 fs-5' href='#Contact' onClick={() => props.setCurrentPage('Contact')}>Contact</MDBNavbarLink>
          </MDBNavbarItem>

          <MDBNavbarItem className="d-flex">
            <MDBIcon className="mt-3" fas icon="code" />
            <MDBNavbarLink className='me-1 fs-5' href='#Portfolio' onClick={() => props.setCurrentPage('Portfolio')}>Portfolio</MDBNavbarLink>
          </MDBNavbarItem>

          <MDBNavbarItem className="d-flex">
            <MDBIcon className="mt-3" far icon="file" />
            <MDBNavbarLink className='me-1 fs-5' href='#Resume' onClick={() => props.setCurrentPage('Resume')}>Resume</MDBNavbarLink>
          </MDBNavbarItem>

        </MDBNavbarNav>
      </MDBContainer>
    </MDBNavbar>
  );
}

