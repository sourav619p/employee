import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { FaUserPlus,FaUserEdit,FaTrash,FaPowerOff } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import '../App.css'

function EmpList() {
  return (
    <div>
    <div className='navbar'>
    <div>
    <Link className='lin' to="/home">Home</Link>
    <Link className='lin' to="/home/employeelist">Employee List</Link>
    </div>
    <h5>name</h5>
    <div className='search'>
    <input className='sear-txtbox' type="text" /><button className='searc-btn'>search</button>
    </div>
    <div>
    <Link className='lin' to="/">Logout</Link> 
    </div>
    </div>
    <div className='p-2'>
    <h1 className='text-center text-primary pt-3 pb-3'>Employee List</h1>
    <Link to="/home/employeelist/add">
    <Button variant="success ">ADD <FaUserPlus/></Button>{' '}
    </Link>

    <h2 className='pt-3 pb-3'>List Of Employees</h2>
 <Table striped bordered hover>
  <thead>
    <tr>
      <th>Id</th>
      <th>Image</th>
      <th>Name</th>
      <th>Email</th>
      <th>Mobile No</th>
      <th>Designation</th>
      <th>Gender</th>
      <th>Course</th>
      <th>Create Date</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
        <tr>
            <td>1</td>
            <td><img className='img-size' src="https://png.pngitem.com/pimgs/s/627-6275734_profile-icon-contacts-hd-png-download.png" alt="" /></td>
            <td>hari</td>
            <td>hari@123</td>
            <td>9249875603</td>
            <td>dev</td>
            <td>Male</td>
            <td>BCA</td>
            <td>04-01-2023</td>
            <td>
            <Link to="/home/employeelist/edit">
            <Button variant="primary"><FaUserEdit/>Edit</Button>{' '}
            </Link>
            <Button variant="danger"><FaTrash/>Delete</Button>{' '}</td>
        </tr>
  </tbody>
</Table>
</div>
</div>
  )
}

export default EmpList
