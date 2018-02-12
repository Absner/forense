import React, { Component } from 'react';
import logo from './../../assets/logo.png';
import './header.component.scss';

class HeaderComponent extends Component {
    render() {
        return (
            <div className='color-prueba'>
                <div className='bgTope'>
                    <div className='container absolute'>
                        <div className='row'>
                            <div className='col-md-12 pt-12 pb-12'>

                                <div className='text-left' >
                                    <ul className='navbar-nav mr-auto' >
                                        <li>
                                            <a href=''>
                                                <img src={logo} alt="logo" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderComponent;