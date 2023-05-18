import React, { Component } from 'react';
import './App.css';
import Content from './components/Content';

export default class App extends Component {

  componentDidMount(): void {
      console.log('App mounted');
  }

  render(): React.ReactElement {
    return (
      <div className="App select-none">
        {/* <h1 className=' text-white cursor-pointer text-9xl font-bold text-left drop-shadow-2xl  bg-white p-4 rounded-t-3xl  hover:bg-black hover:shadow-2xl md:text-center m-10'>Tharu<span className='hover:text-blue-700 text-cyan-400'>Z</span>ika</h1>
        <section className='grid grid-rows-4 grid-flow-col gap-4 bg-white m-10 p-10 rounded-b-3xl drop-shadow-2xl'>
        <aside className=' bg-red-800 p-3 font-bold text-red-100  hover:bg-green-700 hover:drop-shadow-2xl cursor-pointer'>Galle</aside>
        <aside className=' bg-red-700 p-3 font-bold text-red-200  hover:bg-green-700 hover:drop-shadow-2xl cursor-pointer'>Colombo</aside>
        <aside className=' bg-red-600 p-3 font-bold text-red-300  hover:bg-green-700 hover:drop-shadow-2xl cursor-pointer'>Panadura</aside>
        <aside className=' bg-red-500 p-3 font-bold text-red-400  hover:bg-green-700 hover:drop-shadow-2xl cursor-pointer'>Matara</aside>
        <aside className=' bg-red-400 p-3 font-bold text-red-500  hover:bg-green-700 hover:drop-shadow-2xl cursor-pointer'>Jaffna</aside>
        <aside className=' bg-red-300 p-3 font-bold text-red-600  hover:bg-green-700 hover:drop-shadow-2xl cursor-pointer'>Gampaha</aside>
        <aside className=' bg-red-200 p-3 font-bold text-red-700  hover:bg-green-700 hover:drop-shadow-2xl cursor-pointer'>Meegamuwa</aside>
        <aside className=' bg-red-100 p-3 font-bold text-red-800  hover:bg-green-700 hover:drop-shadow-2xl cursor-pointer'>Kalutara</aside>
        </section>
        <Home/>
        <Profile/>
        <Contact/>
        <About/>
        <Counter/> */}

        {/* <Header/> */}
        <Content/>
        
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
    );
  }
  }
  
