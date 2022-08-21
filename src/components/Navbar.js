import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar bg-${props.mode===true? "dark" : "light"}`}>
        <div className="container-fluid">
          <div>
          <Link to='/' className={`navbar-brand text-${props.mode===true? "light" : "dark"}`}>{props.title}</Link>
          <Link to='/about' className={`navbar-brand text-${props.mode===true? "light" : "dark"}`}>{props.title2}</Link>
          </div>
          <div className={`form-check form-switch text-${props.mode===true? "light" : "dark"}`}>
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" color='red'>{props.mode===true? "Disable Dark Mode" : "Enable Dark Mode"}</label>
          </div>
        </div>
      </nav>
    </div>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,

} 

Navbar.defaultProps = {
  title: "anuj is good",

}
