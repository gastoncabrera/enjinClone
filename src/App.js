import React, { Component } from "react";
import Spam from "./components/Spam";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import SectionCreateNFT from "./components/SectionCreateNFT";
import SectionProyects from "./components/SectionProyects";
import SectionWhitepaper from "./components/SectionWhitepaper";
import SectionVirtualEconomy from "./components/SectionVirtualEconomy";
import SectionUsers from "./components/SectionUsers";
import SectionBlog from "./components/SectionBlog";

class App extends Component {
  render() {
    return (
      <div>
        <Spam />
        <div>
          <Header />
          <SectionCreateNFT />
          <SectionProyects />
          <SectionWhitepaper />
          <SectionVirtualEconomy />
          <SectionUsers />
          <SectionBlog />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
