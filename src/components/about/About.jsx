import React from 'react';
import './about.css';
import ME from '../../assets/me-about.JPG';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='About Image' />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>3+ years of event planning</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Involvement</h5>
              <small>Actively involved in student clubs</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Competitions</h5>
              <small>10+ hackathons/ case competitions</small>
            </article>
          </div>
          <p>
            Avid Foodie. Staunch believer of self improvement. Incoming second
            year Business Computer Science student looking to break into the
            tech industry. Always eager for opportunities!
          </p>
          <a href='#contact' className='btn btn-primary'>
            More About Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
