import React from 'react'

import './contact.css';
import { FormContact } from './FormContact';
import { InfoContact } from './InfoContact';

export const ContactPage = () => {
  return (
    <>
      <h1 className='contact__title' > Contactanos </h1>

      <div className="contact__grid container">
        <div className="contact__form">

          <FormContact/>

        </div>

          <InfoContact/>
      </div>
    </>
  )
}
