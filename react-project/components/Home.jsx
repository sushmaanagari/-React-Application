import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify';
import './home.css';

const Home = () => {
  let [state,setState] = useState([])
  console.log(state);
  
  useEffect(() => {
  let res = async () => {
    let result = await axios.get("http://localhost:8080/users");
    console.log(result);
    let { data } = result;
    console.log(data);
    setState(data);
  };
  res();
}, []);

//deleting the data
  let deleteData = (id)=>{
    console.log(id);
    axios.delete(`http://localhost:8080/users/${id}`)
    .then(()=>{
            console.log("Data deleted");
            window.location.reload()
            toast.error("Data deleted")
        })
        .catch(()=>{
            console.log("data not deleted");
            
        })
    

  }

  return (
    <div className="card-container">
      {
  state.map((value, index) => {
    console.log(value);
    console.log(value.address.street);
    let {street} = value.address
    console.log(street);
    
    return (

      <div className="card" style={{ width: "19rem" }} key={index}>
        <img
          src={`https://api.dicebear.com/9.x/adventurer/svg?seed=${value.username}`}
          className="card-img-top"
          alt={`${value.username}'s avatar`}
          style={{height : "300px", width:"300px"} }
        />
        <div className="card-body">
          <h5 className="card-title">{value.username}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">ID - {value.id}</li>
          <li className="list-group-item">USERNAME - {value.username}</li>
          <li className="list-group-item">NAME - {value.name}</li>
          <li className="list-group-item">EMAIL - {value.email}</li>
          <li className="list-group-item">PHONE - {value.phone}</li>
          <li className="list-group-item">WEBSITE - {value.website}</li>
          <li className="list-group-item">STREET - {street}</li>
          <li className="list-group-item">SUITE - {value.address.suite}</li>
          <li className="list-group-item">ZIPCODE - {value.address.zipcode}</li>
          <li className="list-group-item">COMPANY NAME - {value.company.companyname}</li>
        </ul>
      <div className="card-body d-flex gap-2">
        
        <Link to="/create"><button className='btn btn-primary'>Create</button></Link>
        <Link to={`/edit/${value.id}`}><button className='btn btn-warning'>Edit</button></Link>
        <button className='btn btn-danger' onClick={()=>{deleteData(value.id)}}>Delete</button>
      </div>
    </div>

    )
  } )
} 

    </div>
   
    
  )
}

export default Home