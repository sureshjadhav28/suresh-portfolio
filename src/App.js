
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars } from '@fortawesome/free-solid-svg-icons'
import testPng from './mypic.png';
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <div className="header">
        <h2>Developer </h2>
        <ul className='header-list'>
         <li><Link to='/about'> About me</Link></li>
         <li><Link to='/skills'> Skills</Link></li>
         <li><Link to='/certifications'> Certification</Link></li>
         <li><Link to='/contact'> Contact</Link></li>
        </ul>
        <div className="menu-icon">
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
      <div className='main'>
        <div className='about'>
          <h1 className='head1'>I'm  Suresh, a</h1>
          <h1 className='head1'>Full Stack Developer</h1>
          <p>"With a passion for crafting sleek
            and responsive web experience,
            I bring creativity
            and technical expertis to every project.
            From front-end design to back-end development,
            I'm dedicated to delivering
            "</p>
        </div>
        <div className='photo'>
          <img src={testPng}></img>
        </div>
        <div className='about-me'>
          <h1 className='head2'>About</h1> <br />
          <p>Aspiring Full Stack Developer with a strong foundation in both front-end and back-end technologies.
            Proficient in Python, Django, React, and web development tools like HTML, CSS, and JavaScript.
            Experienced in database management using PostgreSQL and version control with Git and Git Hub,
            ready to contribute to dynamic and innovatiive projects.</p>
        </div>
        <div className='follow'>
          <h1 className='head2'>Follow Me</h1>
          <div className='buttons'>
          <a href='https://www.linkedin.com/in/suresh-jadhav-2831k/' target='_blank'><button>Linkedin</button></a>
          <a href='https://github.com/sureshjadhav28' target='_blank'><button>Git Hub</button></a>
          <a href='https://www.instagram.com/sureshhjadhavv/' target='_blank'><button>Instagram</button></a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
