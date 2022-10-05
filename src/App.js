import React, { useState } from "react";
import About from "./components/About";
import Nav from "./components/Nav";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import { render } from "react-dom";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  const [currentPage, setCurrentPage] = useState("About");

  function renderPage() {
    if (currentPage === "About") {
      return <About />;
    } else if (currentPage === "Contact") {
      return <Contact />;
    } else if (currentPage === "Portfolio") {
      return <Portfolio />;
    } else {
      return <Resume />;
    }
  }

  return (
    <div>
      <Wrapper>
        <Nav setCurrentPage={setCurrentPage} />
        <main>{renderPage()}</main>
      </Wrapper>
      <Footer />
    </div>
  );
}

export default App;
