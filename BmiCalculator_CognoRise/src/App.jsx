import Bmi from "./Componenets/Bmi";
import Intro from "./Componenets/Intro";
import "./App.css";
import logo from "./assets/logo.png";
function App() {
  return (
    <>
      <div
        className="logo-background full-screen-bg py-12"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${logo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Bmi />
        <Intro />
      </div>
    </>
  );
}
export default App;
