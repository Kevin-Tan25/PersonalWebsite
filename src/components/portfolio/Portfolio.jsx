import React from 'react';
import './portfolio.css';

import IMG1 from '../../assets/todo.png';
import IMG2 from '../../assets/github.png';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt='' />
          </div>
          <h3>Feedback App</h3>
          <div className='portfolio__item-cta'>
            <a
              href='https://github.com/Kevin-Tan25/todo-list'
              className='btn'
              target='blank'
            >
              Github
            </a>
            <a
              href='https://629543c3b5e4833e7451b375--rainbow-unicorn-748254.netlify.app/'
              className='btn btn-primary'
              target='blank'
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt='' />
          </div>
          <h3>Github Search</h3>
          <div className='portfolio__item-cta'>
            <a
              href='https://github.com/Kevin-Tan25/github-finder'
              className='btn'
              target='blank'
            >
              Github
            </a>
            <a
              href='https://62d7a79cd788630604285fa6--charming-strudel-45806b.netlify.app/'
              className='btn btn-primary'
              target='blank'
            >
              Live Demo
            </a>
          </div>
        </article>
        {/* <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt='' />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a
              href='https://github.com/Kevin-Tan25/todo-list'
              className='btn'
              target='blank'
            >
              Github
            </a>
            <a href='' className='btn btn-primary' target='blank'>
              Live Demo
            </a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG4} alt='' />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a
              href='https://github.com/Kevin-Tan25/todo-list'
              className='btn'
              target='blank'
            >
              Github
            </a>
            <a href='' className='btn btn-primary' target='blank'>
              Live Demo
            </a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG5} alt='' />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a
              href='https://github.com/Kevin-Tan25/todo-list'
              className='btn'
              target='blank'
            >
              Github
            </a>
            <a href='' className='btn btn-primary' target='blank'>
              Live Demo
            </a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG6} alt='' />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a
              href='https://github.com/Kevin-Tan25/todo-list'
              className='btn'
              target='blank'
            >
              Github
            </a>
            <a href='' className='btn btn-primary' target='blank'>
              Live Demo
            </a>
          </div>
        </article> */}
      </div>
    </section>
  );
};

export default Portfolio;
