import React from 'react';
import './services.css';
import { BiCheck } from 'react-icons/bi';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Relevant Experiences</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>Product Management Club</h3>
            <h5>Treasurer/ Product Sprint Executive</h5>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                Managing the club's account, overseeing the budget, and signing
                off on transactions
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                Pitched to acquire mentors and sponsors for BC's first Product
                Management competition, hosting over 150 participants
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                Collaborated with companies to create and deliver high-quality
                cases to students
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                Onboarded judges and prepared user-friendly yet effective
                technology to aid in judging
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Emceed opening ceremonies and collected audience feedback</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Audi Richmond</h3>
            <h5>Receptionist</h5>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Adapted to new technology after merger with GoAuto</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                Operated online data base to keep track of inventory and
                directed clientele to respective department representatives
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                Book kept sales and service transactions (upward to $300,000 per
                day)
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                Mediated customer complaints and answered basic department
                specific questions
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                Maintained a positive attitude even during stressful situations
              </p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Student Council</h3>
            <h5>General Executive</h5>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                Planned and emceed events that had over 1200 student turnout
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                Supervised 24 Grade Representatives by providing mentorship and
                professional development opportunities
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                Communicated with the school admin to restructure Student
                Council to foster more inclusivity
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                One of three SLSS Representatives chosen to meet with district
                superintendents and speak about student engagement
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
