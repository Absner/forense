import React, { Component } from 'react';
import './post.component.scss';

class PostComponent extends Component {
    render() {
        return (
            <div className='container' >
                <div className='row mt-20'>
                    <div className='col-md-1 offset-md-1'>
                        <div className='paper'></div>
                    </div>
                    <div className='col-md-3'>
                        <article>
                            <span>Conoce nuestros límites diarios</span>
                            <br />
                            Seguimos trabajando para ofrecerle el mejor servicio y la mayor seguridad en sus operaciones.
                        </article>
                    </div>
                    <div className='col-md-3'>
                        <article>
                            <span>CONVOCATORIA:Designación del Auditor Interno</span>
                            <br />
                            De conformidad con lo previsto en el artículo 15 de los Estatutos del Banco Caroní, C.A. Banco Universal, se convoca a los señores accionistas para la Asamblea General Extraordinaria
                        </article>
                    </div>
                    <div className='col-md-3'>
                        <article>
                            <span>Es hora de dejar ir tus Cheques</span>
                            <br />
                            Haz tu vida más fácil, usa Click Caroní para movilizar tu dinero
                        </article>
                    </div>
                </div>
                <div className='row mt-10'>
                    <div className='col-md-12 text-center'>
                        <div className='hr'></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PostComponent;