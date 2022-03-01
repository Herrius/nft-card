import React from 'react'
import './App.js';
import './styles/styles.css'
import card from './images/image-equilibrium.jpg'
import iconETH from './images/icon-ethereum.svg'
import iconClock from './images/icon-clock.svg'
import avatar from './images/image-avatar.png'
function App() {
  return (
    <section className='card'>
      <div className='card-img'>
        <img src={card} alt='image'></img>
      </div>
      <div className='description'>
        <p className='title'>Equilibrium #3429</p>
        <p className='text'>Our Equilibrium collection promotes balance and calm.</p>
        <div className='offer'>
          <span className='price'><img src={iconETH} alt='icon ETH'></img>0.041 ETH</span>
          <span className='time'><img src={iconClock} alt="Countdown"></img>3 days left</span>
        </div>
      </div>

      <footer className='card-footer'>
        <img src={avatar} alt='profile' className='profile'></img>
        Creation of <span className='marker'>Jules Wyvern</span>
      </footer>
    </section>
  );
}

export default App;
