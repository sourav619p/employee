import React,{useState} from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import '../App.css'

function Edit() {

  const [file, setFile] = useState();
  const [item, setItem] = useState({ kindOfStand: "", another: "another" });
  const { kindOfStand } = item;

  const handleChange = e => {
    e.persist();
    console.log(e.target.value);

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
  }

  const getInitialState = () => {
    const value = "Hr";
    return value;
  };
  const [value, setValue] = useState(getInitialState);
  const handleChan = (e) => {
    setValue(e.target.value);
    console.log(value)
  };

  const setdata= (e)=>{
    console.log(e.target.value)
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
    <h1 className='text-center text-primary pt-3 pb-3'>Edit Employee</h1>
     <Row>
<Col className='ms-5'>
<Form className='mt-3 me-5'>
   <Form.Group controlId="formBasicPassword">
     <Form.Label>Name </Form.Label>
     <Form.Control type="text" onChange={setdata}
     />
   </Form.Group>
   <Form.Group controlId="formBasicPassword">
     <Form.Label>Email</Form.Label>
     <Form.Control type="text" onChange={setdata}
     />
   </Form.Group>
   <Form.Group controlId="formBasicPassword">
     <Form.Label>MobileNo</Form.Label>
     <Form.Control type="text" onChange={setdata}
      />
   </Form.Group>
   <Form.Group className="mb-3 mt-3" controlId="formBasicPassword">
     <Form.Label>Designation</Form.Label>
     <select value={value} onChange={handleChan}>
        <option value="HR">Sales</option>
        <option value="Manager">HR</option>
        <option value="Sales">Manager</option>
      </select>
   </Form.Group>
   <Form.Group className="mb-3 mt-3" controlId="formBasicPassword">
     <Form.Label>Gender</Form.Label>
     <form onSubmit={handleSubmit}>
      <Form.Group controlId="kindOfStand">
        <Form.Check
          value="Male"
          type="radio"
          aria-label="radio 1"
          label="Male"
          onChange={handleChange}
          checked={kindOfStand === "Male"}
        />
        <Form.Check
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
   <Form.Group className='mt-3 mb-3' controlId="formBasicPassword">
     <Form.Label>Img Upload</Form.Label><br/>
     <input type="file" onChange={imageAdd} />
   </Form.Group>
   <Button  
   variant="success" type="submit">
     Update
   </Button>
 </Form>
</Col>
     </Row>
 </>
  )
}

export default Edit
