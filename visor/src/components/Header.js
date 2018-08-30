import React, {Component} from 'react';
import Logo from './subcomponents/Logo';
import LoginForm from './subcomponents/LoginForm';
import Title from './subcomponents/Title';


class Header extends Component{


    render(){
        return(
            <div className="p-3 mb-2 bg-primary text-white">
                <nav className="navegation">
                    <div className="col-3">
                        <Logo/>
                    </div>
                    <div className="col-5">
                        <Title/>
                    </div>
                    <div className="col-4">
                        <LoginForm/>
                    </div>

                </nav>
                
            </div>
        )
    }
}

export default Header;