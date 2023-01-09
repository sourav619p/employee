import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { FaUserPlus,FaUserEdit,FaTrash,FaPowerOff } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import '../App.css'

function Home() {
  return (
    <div>
    <div className='navbar'>
    <div>
    <Link className='lin' to="home">Home</Link>
    <Link className='lin' to="employeelist">Employee List</Link>
    </div>
    <h5>name</h5>
    <div>
    <Link className='lin' to="/">Logout</Link> 
    </div>
    {/* <button className='log-btn bg-danger my-auto' variant="danger"><FaPowerOff/></button> */}
    </div>
    <h1 className='center'>Welcome Admin Pannel</h1>
</div>
  )
}

export default Home
