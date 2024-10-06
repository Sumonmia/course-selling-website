import AboutUs from "../components/AboutUs"
import Banner from "../components/Banner"
import ContactUs from "../components/ContactUs"
import CourseImage from "../components/CourseImage"
import HowitWorks from "../components/HowitWorks"
import Footer from "../shared/Footer"
import Navbar from "../shared/Navbar"


const HomePage = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Banner></Banner>
        <AboutUs></AboutUs>
        <CourseImage></CourseImage>
        <HowitWorks></HowitWorks>
        <ContactUs></ContactUs>
        <Footer></Footer>
    </div>
  )
}

export default HomePage
