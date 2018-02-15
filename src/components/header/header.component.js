import React, { Component } from 'react';
import logo from './../../assets/logo.png';
import home_btn from './../../assets/home_btn.png';
import click_btn from './../../assets/click_btn.png';
import './header.component.scss';

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <div className='bgTope'>
                    <div className='container absolute'>
                        <div className='row'>
                            <div className='col-md-10 offset-md-1 pt-12 pb-12'>
                                <nav className="navbar navbar-toggleable-md navbar-light">
                                    <div className='text-left' >
                                        <a href=''>
                                            <img src={logo} alt="logo" />
                                        </a>
                                    </div>

                                    <div className="right">
                                        <ul className="navbar-nav">
                                            <li className="nav-item active">
                                                <a className="nav-link">
                                                    <img src={home_btn} alt='home_btn' />
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link">
                                                    <img src={click_btn} alt='click_btn' />
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <input type='text' className='searchTextBox in-line'  name='search' />
                                                <div className='search in-line'>
                                                    <div className='searchLupa'></div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderComponent;