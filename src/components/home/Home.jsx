import React from 'react'

import './home.css';

import logoLarge from './../../img/logoSmall.png';

import proteccionC_img from './../../img/Protección civil.jpg';
import hospitales_img from './../../img/hospitales.jpg';
import museos_img from './../../img/museo.jpg';
import seViales_img from './../../img/viales.jpg';
import personalizada_img from './../../img/personalizada.jpg';
import nomenclatura_img from './../../img/nomemclatura.jpg';
import numeracion_img from './../../img/numeración.jpg';
import reconocimientos_img from './../../img/reconocimientos.jpg';
import placas_img from './../../img/placas.jpg';
import menu_img from './../../img/menu.jpg';
import frases_img from './../../img/frases.jpg';
import { CardProduct } from './CardProduct';
import { Header } from '../header/Header';

export const Home = () => {
  return (
      <>
        <section className='container'>
            <div className='presetation'>
                <img src={logoLarge} alt="logo"/>

                <p className='description'>
                Señalamientos en el sistema Braille y Lengua de Señas Mexicana para la accesibilidad de las personas con discapacidad
                </p>
            </div>
            
        </section>

        <section className='container'>
            <div className="row">
                <div className="column">
                    <CardProduct text="Protección civil" urlImg={proteccionC_img} key={proteccionC_img}/>
                    <CardProduct text="Hospitales" urlImg={hospitales_img} key={hospitales_img}/>
                    <CardProduct text="Museos" urlImg={museos_img} key={museos_img}/>
                </div>          

                <div className="column">

                    <CardProduct text="Reconocimientos" urlImg={reconocimientos_img} key={reconocimientos_img}/>
                    <CardProduct text="Placas" urlImg={placas_img} key={placas_img}/>
                    <CardProduct text="Frases" urlImg={frases_img} key={frases_img}/>                    
                </div>

                <div className="column">

                <CardProduct text="Nomenclatura " urlImg={nomenclatura_img} key={nomenclatura_img}/> 
                <CardProduct text="Señalización personalizada" urlImg={personalizada_img} key={personalizada_img}/> 
                <CardProduct text="Numeración" urlImg={numeracion_img} key={numeracion_img}/> 
                    
                </div>
                <div className="column">
                    <CardProduct text="Señalamientos viales" urlImg={seViales_img} key={seViales_img}/> 
                    <CardProduct text="Menús" urlImg={menu_img} key={menu_img}/> 
                </div>
            </div>
        </section>
      </>
  )
}
