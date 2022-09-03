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
            <h5>Treasurer</h5>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                Manage $5000+ in the club's budget and approve transactions.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Advise the president on team structure and future events.</p>
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
                Designed and developed a responsive website for the club using
                Figma and React JS.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                Acquired 30+ mentors and 100+ participants for BC's first
                student-led Product Management competition.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                Hosted event opening ceremonies and facilitated speaker events.
              </p>
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
              <p>
                Assisted existing and prospective clientele by directing them to
                their respective department representatives.
              </p>
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
                Mediated customer complaints and questions, answering and
                directing 300+ weekly customer inquiries.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                Performed basic bookkeeping for $300,000+ in sales and service
                payments per day.
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
