import React,{useState} from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../App.css'
import { Link } from 'react-router-dom';

function Add() {

    const [file, setFile] = useState();
    const [item, setItem] = useState({ kindOfStand: "", another: "another" });
    const { kindOfStand } = item;
    const [mca,setMca]=useState(true);
    const [bca,setBca]=useState(true);
    const [bsc,setBsc]=useState(true);

    const defaultValue = {
      name: "",
      email: "",
      mobileNumber: "",
      designation: "",
      gender: "",
      course: "",
      image: "",
    }

    const handleCheck = (data) =>{
      if(data == "mca")
      {
        if(mca==true){
          console.log(data)
        }
        setMca(!mca)
      }
      if(data == "bca")
      {
        if(bca==true){
          console.log(data)
        }
        setBca(!bca)
      }
      if(data == "bsc")
      {
        if(bsc==true){
          console.log(data)
        }
        setBsc(!bsc)
      }
      setUser({ ...user, [data.target.name]:data.target.value })
      console.log(user)
    }

    const handleChange = e => {
      e.persist();
      console.log(e.target.value);
      setUser({ ...user, [e.target.name]:e.target.value })
      console.log(user)

      setItem(prevState => ({
        ...prevState,
        kindOfStand: e.target.value
      }));
    };
  
    const handleSubmit = e => {
      e.preventDefault();
      alert(`${kindOfStand}`);
    };

    function imageAdd(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
        setUser({ ...user, [e.target.name]:e.target.value })
        console.log(user)
    }

    const getInitialState = () => {
      const value = "Hr";
      return value;
    };
    const [value, setValue] = useState(getInitialState);
    const handleChan = (e) => {
      setValue(e.target.value);
      console.log(value)
      setUser({ ...user, [e.target.name]:e.target.value })
      console.log(user)
    };

    const [user,setUser] = useState(defaultValue)
  
    const onValueChange = (e)=>{
      console.log(e.target.name, e.target.value)
      setUser({ ...user, [e.target.name]:e.target.value })
      console.log(user)
    }


  return (
    <>
    <div className='navbar'>
    <div>
    <Link className='lin' to="/home">Home</Link>
    <Link className='lin' to="/home/employeelist">Employee List</Link>
    </div>
    <h5>name</h5>
    <div>
    <Link className='lin' to="/">Logout</Link> 
    </div>
    </div>
    <h1 className='text-center text-primary pt-3 pb-3'>Create Employee</h1>
     <Row>
<Col className='ms-5'>
<Form className='mt-3 me-5'>
   <Form.Group controlId="formBasicPassword">
     <Form.Label>Name </Form.Label>
     <Form.Control type="text" onChange={(e) => onValueChange(e)} name="name"
     />
   </Form.Group>
   <Form.Group controlId="formBasicPassword">
     <Form.Label>Email</Form.Label>
     <Form.Control type="text" onChange={(e) => onValueChange(e)} name="email"
     />
   </Form.Group>
   <Form.Group controlId="formBasicPassword"> 
     <Form.Label>MobileNo</Form.Label>
     <Form.Control type="number" onChange={(e) => onValueChange(e)} name="mobileNumber"
      />
   </Form.Group>
   <Form.Group className="mb-3 mt-3" controlId="formBasicPassword">
     <Form.Label>Designation : </Form.Label>
        <select value={value} onChange={handleChan} name="designation"> 
        <option value="HR">HR</option>
        <option value="Manager">Manager</option>
        <option value="Sales">Sales</option>
      </select>
   </Form.Group>
   <Form.Group className="mb-3 mt-3" controlId="formBasicPassword">
     <Form.Label>Gender</Form.Label>
     <form onSubmit={handleSubmit}>
      <Form.Group controlId="kindOfStand">
        <Form.Check
          name='gender'
          value="Male"
          type="radio"
          aria-label="radio 1"
          label="Male"
          onChange={handleChange}
          checked={kindOfStand === "Male"}
        />
        <Form.Check
          name='gender'
          value="Female"
          type="radio"
          aria-label="radio 2"
          label="Female"
          onChange={handleChange}
          checked={kindOfStand === "Female"}
        />
      </Form.Group>
    </form>
    </Form.Group>
    <Form.Group>
    <Form.Label>Course:</Form.Label>
      <input type="checkbox" value={mca} onChange={()=>handleCheck("mca")} /> MCA
      <input type="checkbox" value={bca} onChange={()=>handleCheck("bca")} /> BCA
      <input type="checkbox" value={bsc} onChange={()=>handleCheck("bsc")} /> BSC
    </Form.Group>
   <Form.Group className='mt-3 mb-3' controlId="formBasicPassword">
     <Form.Label>Img Upload</Form.Label><br/>
     <input type="file" onChange={imageAdd} name="image" />
   </Form.Group>
   <Button  
   variant="success" type="submit">
     Add+
   </Button>
 </Form>
</Col>
     </Row>
 </>
  )
}

export default Add
