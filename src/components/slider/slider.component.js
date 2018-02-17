import React, { Component } from 'react';

import './slider.component.scss';

class SilderComponente extends Component {
    render() {
        return (
            <div className='container' >

                <div className='row'>
                
                    <div className='col-md-11 offset-md-1'>
                        <div className='bgSlider'>
                            <div className='row'>
                                <div className='col-md-4'>
                                    <div className='bg-1'></div>
                                </div>
                                <div className='col-md-4'>
                                    <div className='bg-2'></div>
                                </div>
                                <div className='col-md-4'>
                                    <div className='bg-3'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                </div>
                
            </div>
        );
    }
}

export default SilderComponente;