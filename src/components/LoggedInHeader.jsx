import React from 'react';
import '../scss/_loggedInHeader.scss'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//need to add a log out button

export default function LoggedInHeader(props){

  function logoutCallback(){
    props.copyOnLogout();
  }

  return(
  <div>
    <div className='header'>
      <Link className="noUnderline" to="/feedback"> Submit Feedback</Link>
      <Link className="noUnderline" to="/adminview"> Admin View</Link>
      <Link className="noUnderline" to="/employeehome"> Employee Home </Link>
      <Link className="noUnderline" onClick={logoutCallback} to="/"> Log Out </Link>
    </div>

    <div className='theoremLogoWrapper'>
      <img className='theoremLogo' src="https://theoremadvertising.com/wp-content/uploads/2019/04/cropped-logo-1.png" alt="theorem logo"/>
    </div>
  </div>


  )
}

LoggedInHeader.propTypes = {
  copyOnLogout: PropTypes.func
};
