import React, { Component, Fragment } from 'react'
import Header from '../../components/Header';
import './contact.css'
import ContactForm from '../../components/ContactForm/ContactForm';


export default class Contact extends Component {
  render() {
    return (
      <Fragment>
      <Header/>
      <div className="p-6">
        <h1 className='text-center lg:text-4xl md:text-3xl sm:text-2xl font-bold pb-5'>Contact Us</h1>
        <p className='font-semibold text-justify lg:text-lg md:text-md pb-5'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Welcome to the MarketZ Contact Us page! We value your feedback, inquiries, and suggestions. Our dedicated team is here to assist you with any questions or concerns you may have. Whether you need assistance with product information, order inquiries, or general inquiries about our services, feel free to reach out to us. We strive to provide prompt and friendly customer support to ensure your satisfaction. Contact us today and let us help you with your queries. We look forward to hearing from you and providing the assistance you need.</p>
        <div className='bg-white rounded-lg shadow-sm grid grid-col-4 gap-4'>
            <ContactForm/>
        </div>
      </div>
      </Fragment>
    );
  }
}
