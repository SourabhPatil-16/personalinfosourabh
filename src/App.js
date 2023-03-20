import Contact from "./Components/Contact/Contact";
import Intro from "./Components/Intro/Intro";
import Navbar from "./Components/Navbar/Navbar";
import Techno from "./Components/Techno/Techno";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Techno />
      <Contact />
    </div>
  );
}
