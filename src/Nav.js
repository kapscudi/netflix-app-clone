import React, { useEffect, useState } from 'react';
import './nav.css';

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener('scroll');
    };
  }, []);

  return (
    <div className={`nav ${show && 'nav_black'}`}>
      <img
        src="https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/118544947_583279452306624_6764944847389396048_o.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_ohc=vzq84-gB8BoAX80kQbQ&_nc_ht=scontent-cdg2-1.xx&oh=01572e26b76680d7817c7757a2c73bd4&oe=5FCA0D36"
        alt="user face"
        className="nav__avatar"
      />

      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1597px-Netflix_2015_logo.svg.png"
        alt="aFlix Logo"
        className="nav__logo"
      />
    </div>
  );
}

export default Nav;
