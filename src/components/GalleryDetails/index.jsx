import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../../styles/DetailsMain.css'
import arrow from '../../assets/arrow.png'


function GalleryDetails( {logements} ) {
    // Get the userId param from the URL.
    let { logementId } = useParams()
    const [ logement, setLogement ] = useState(undefined)
    useEffect(() => {
        if(logement === undefined) {
            const tmpLogement = logements.find(logement => logement.id == logementId)
            if(tmpLogement === null) {
                //rediriger vers 404
            }
            setLogement(tmpLogement)
        }
    })
    //Afficher la gallerie des photos 
    const [active, setActive] = useState(0)
    const pictures = logement && logement.pictures.length

    function handleClickRight() {
        setActive(active +1)
       if(active == pictures -1) {
            setActive(0)
       }
    }

    function handleClickLeft() {
        setActive(active -1)
       if(active == 0) {
            setActive(pictures - 1)
       }
    }

    return  (
        <section className='details'>
            <img className='details-img' src={logement && logement.pictures[active]} alt="picture"/>
            <img className='arrow arrow--left' src={arrow} alt='arrow' onClick={handleClickLeft}/>
            <img className='arrow arrow--right' src={arrow} alt='arrow' onClick={handleClickRight}/>
            <div className='details-description'>
                <div className='title-location'>
                    <h1>{ logement && logement.title }</h1>
                    <h2>{ logement && logement.location }</h2>
                </div>
                <div className='host'>
                    <h2 className='host-name'>{ logement && logement.host.name }</h2>
                    <img src={logement && logement.host.picture} alt='host picture'/>
                </div>
            </div>
        </section> 
    )
}

export default GalleryDetails