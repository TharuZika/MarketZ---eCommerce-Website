import React, { Component, Fragment } from 'react'
import AboutCard from '../../components/AboutCard'
import './about.css'
import CodeIcon from '@mui/icons-material/MonetizationOn';
import ViewIcon from '@mui/icons-material/Streetview';
import HomeScreenIcon from '@mui/icons-material/AddToHomeScreen';
import GraphicsIcon from '@mui/icons-material/AutoFixHigh';
import Header from '../../components/Header';

type AboutCardDetails = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

type AboutProps = {};

type AboutState = {
  cardList: AboutCardDetails[];
};

export default class About extends Component<AboutProps, AboutState> {

  constructor(props: AboutProps) {
    super(props);
    this.state = {
      cardList: [
        {
          id: '1',
          title: 'Extensive Laptop Selection',
          description: 'MarketZ offers a diverse range of laptops from top brands, ensuring that customers have access to an extensive selection of models with varying specifications and features. From budget-friendly options to high-performance machines, MarketZ has something to cater to every need and budget.',
          icon: <HomeScreenIcon sx={{ fontSize: 80 }}/>,
        },
        {
          id: '2',
          title: 'Expert Guidance and Consultation',
          description: 'MarketZ understands that choosing the right laptop can be overwhelming. That is why their team of experts is readily available to provide personalized guidance and consultation. Whether you need assistance in selecting the perfect laptop for your specific requirements or have questions about technical specifications, the knowledgeable staff at MarketZ is there to help you make an informed decision.',
          icon: <ViewIcon sx={{ fontSize: 80 }}/>,
        },
        {
          id: '3',
          title: 'Competitive Pricing and Deals',
          description: 'MarketZ aims to offer competitive prices to provide customers with excellent value for their money. Along with regular competitive pricing, the website also provides special deals, discounts, and seasonal offers, allowing customers to get their desired laptops at even more affordable prices.',
          icon: <CodeIcon sx={{ fontSize: 80}}/>,
        },
        {
          id: '4',
          title: 'After-Sales Support and Services',
          description: 'MarketZ goes beyond just selling laptops. They prioritize customer satisfaction by providing comprehensive after-sales support and services. Whether it is warranty assistance, troubleshooting, or any other post-purchase inquiries, their dedicated support team ensures that customers receive prompt and reliable assistance to address their concerns and provide a seamless experience even after the purchase.',
          icon: <GraphicsIcon sx={{ fontSize: 80 }}/>,
        }
      ]
    }
  }

  render() {
    return (
      <Fragment>
      <Header/>
      <div className="p-6">
        <h1 className='text-center lg:text-4xl md:text-3xl sm:text-2xl font-bold pb-5'>About Us</h1>
        <p className='font-semibold text-justify lg:text-lg md:text-md pb-5'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Welcome to MarketZ - Your Ultimate Destination for Laptop Sales and Services. At Marketz, we are passionate about delivering the best-in-class laptops to meet your computing needs. Whether you're a student, a professional, or a gaming enthusiast, we have a wide range of cutting-edge laptops from top brands to cater to your unique requirements. Our team of knowledgeable experts is dedicated to helping you make informed decisions, providing personalized guidance, and ensuring a seamless purchasing experience. Trust Marketz for reliable, high-quality laptops, competitive prices, and exceptional customer service. Explore our vast collection and step into the world of limitless possibilities with MarketZ.</p>
        <div className=' w-full grid lg:grid-cols-4 md:grid-cols-2 gap-4'>
          {this.state.cardList.map((card) => (
            <AboutCard key={card.id} title={card.title} description={card.description} icon={card.icon} />
          ))}
        </div>
      </div>
      </Fragment>
    )
  }
}
