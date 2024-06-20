import React from 'react'
import './header.css';
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
import './header.css';

const Header = () => (    
    <div className='gpt3__header section__padding' id='home'>
    <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Let's build something amazing with GPT-3 OpenAI</h1>
        <p>GPT-3 is an amazing resource to getting started familiarizing yourself with AI technology's capabilities.</p>

        <div className='gpt3__header-content__input'>
            <input type='email' placeholder='Your Email Address'></input>
            <button type='button'>Get Started</button>
        </div>

        <div className='gpt3__header-content__people'>
            <img src={people} alt='people'/>
            <p>1,743 people have visited this site in the past 24 hours</p>
        </div>
    </div>
    <div className='gpt3__header-image'>
        <img src={ai} />
    </div>
    </div>
);

export default Header;