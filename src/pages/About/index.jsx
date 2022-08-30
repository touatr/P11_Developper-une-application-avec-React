import BannerAbout from '../../components/BannerAbout'
import DropDown from '../../components/DropDown'
import DropDownRespect from '../../components/DropDownRespect'
import DropDownResponsability from '../../components/DropDownResponsability'
import DropDownService from '../../components/DropDownService'
import Header from '../../components/Header'
import Footer from '../../components/Footer'


function About() {
    return (
        <div>
            <Header />
            <BannerAbout />
            <DropDown />
            <DropDownRespect />
            <DropDownService />
            <DropDownResponsability />
            <Footer />
        </div>
    )
}

export default About