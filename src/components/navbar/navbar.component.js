import React, { Component } from 'react';

import './navbar.component.scss';

class NavbarComponent extends Component {
    render() {
        return (
            <div className='container navbar-b' >

                <div className='row'>
                    <div className='col-md-11 offset-md-1'>
                        <ul className="nav justify-content-end">
                            <li className="nav-item">
                                <a class="nav-link">INFORMACIÓN INSTITUCIONAL</a>
                            </li>
                            <li className="nav-item">
                                <a class="nav-link">PRODUCTOS</a>
                            </li>
                            <li className="nav-item">
                                <a class="nav-link">SERVICIOS</a>
                            </li>
                            <li className="nav-item">
                                <a class="nav-link">ATENCIÓN AL CLIENTE</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavbarComponent;