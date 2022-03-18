import React from 'react'

import './contact.css';
import { FormContact } from './FormContact';
import { InfoContact } from './InfoContact';
import { Mapa } from './Mapa';

export const ContactPage = () => {
  return (
    <>
      <h1 className='contact__title' > Contactanos </h1>

      <div className="container">
          <InfoContact/>
      </div>
    </>
  )
}
