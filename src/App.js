import "./App.scss";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./pages/Contact/Contact";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import AppRouter from "./router/AppRouter";
function App() {
  return (
    <div>
      <AppRouter />

      {/* <Home /> */}
      {/* <Footer /> */}
      {/* <Navbar /> */}
      {/* <About /> */}
      {/* <Projects /> */}
      {/* <Contact /> */}
    </div>
  );
}

export default App;
