import * as React from 'react'
import Header from '../../components/Header'
import DetailsMain from '../../components/DetailsMain'


function Details({ logements }) {
    return (
        <div>
            <Header />
            <DetailsMain logements={logements}/>
        </div>
    )
}

export default Details