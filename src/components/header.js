import React from 'react';
import { withRouter} from 'react-router-dom';
import logo from '../img/logocoupe.jpg';
import imgun from '../img/headerimg.jpg';


class Header extends React.Component {



    render() {
        return (
            <div>
            <section className="header">

                    <div className="headertrois">

                        <div className="blocun">
                            <img src={imgun} alt="image_kimia" />
                        </div>
                        <div className="blocdeux">
                            <p>BIENVENUE CHEZ VOUS</p>
                        </div>
                    
                    </div>

                    <img className="taillelogo" src={logo} alt="logo" />

            </section>
            </div>
        )
    }

}



export default withRouter(Header);