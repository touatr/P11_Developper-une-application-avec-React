import * as React from 'react'
import Header from '../../components/Header'
import DetailsMain from '../../components/DetailsMain'
import Footer from '../../components/Footer'


function Details({ logements }) {
    return (
        <div>
            <Header />
            <DetailsMain logements={logements}/>
            <Footer />
        </div>
    )
}

export default Details