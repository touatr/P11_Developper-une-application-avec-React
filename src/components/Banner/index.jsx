import '../../styles/Banner.css'
import banner from '../../assets/banner.jpg'

function Banner() {
    return (
        <section className="banner">
            <div className="background"></div>
            <img src={banner} alt="banner"/>
            <h1>Chez vous, partout et ailleurs</h1>
        </section>
    )
}

export default Banner