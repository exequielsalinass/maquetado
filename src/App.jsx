import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Search from "./components/Search";
import Category from "./components/Category";
import About from "./components/About";
import PropertyList from "./components/PropertyList";
import Contact from "./components/Contact";
import Team from "./components/Team";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import './App.css'

function App() {
  return (
    <div className="container-xxl bg-white p-0">
      <NavBar/>
      <Header/>
      <Search/>
      <Category/>
      <About/>
      <PropertyList/>
      <Contact/>
      <Team/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default App;
