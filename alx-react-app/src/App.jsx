import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import UserProfile from "./components/UserProfile";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <WelcomeMessage />
      <Header />
      <MainContent />
      <UserProfile
        name="Saviour Agbor"
        age="25"
        bio="Software developer with a passion for open-source and web technologies"
      />
      <Footer />
    </>
  );
}

export default App;
