import React from 'react';
import { withRouter} from 'react-router-dom';
// import Navbar from './Navbar';
import Header from './Header';
import Pdpcol from './Pdp_col';
import Instagram from './Instagram';
import Actualite from './Actualite';
import Footer from './Footer';
import '../index';
// import '../../src/accueil.css'
// contact Diane
// footer Ricardo


class Accueil extends React.Component {



    render() {
        return (

            <section id="Accueil">
                {/* <Navbar /> */}
                <Header />
                <Actualite />

            <section className="pdp">
                <Instagram />
                <Pdpcol />
                <Footer />
            </section>

             </section>
            

        )
    }

}



export default withRouter(Accueil);