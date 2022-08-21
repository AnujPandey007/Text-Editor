import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import logo from '../pic.png';

export default function About() {
  return (
    <div className='container my-3'>
        <div className="card">
        <img src={logo} className="card-img-top" alt="Colors" style={{height: 300, width: 400}}/>

        <div className="card-body">
          <h5 className="card-title">Anuj Kumar Pandey</h5>
          <p className="card-text">It is text editing site with different modes.</p>
          <Link to="/" className="btn btn-primary">Lets Use It!</Link>
        </div>
    
      </div>
    </div>
  )
}
