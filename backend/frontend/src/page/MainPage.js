import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import MainContent from "../components/main/MainContent";
import "./MainPage.css";

function MainPage() {
  return (
    <div className="mainpage">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default MainPage;
