import '../../styles/Banner.css'
import '../../styles/BannerAbout.css'
import bannerAbout from '../../assets/bannerAbout.png'

function BannerAbout() {
    return (
        <section className="banner banner-about">
            <div className="background"></div>
            <img src={bannerAbout} alt="banner"/>
        </section>
    )
}

export default BannerAbout