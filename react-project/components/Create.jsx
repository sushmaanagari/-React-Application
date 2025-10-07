import axios from 'axios'
import { toast } from 'react-toastify';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Create = () => {

    

    let [id,setId] = useState('')
    let [username , setUserName] = useState('')
    let [name,setName] = useState('')
    let [email,setMail] = useState('')
    let [phone,setNum] = useState('')
    let [website,setWeb] = useState('')
    let [street,setStreet] = useState('')
    let [suite,setSuite] = useState('')
    let [city,setCity] = useState('')
    let [zipcode,setZip] = useState('')
    let [companyname,setCompany] = useState('')

    let nav = useNavigate()

    let fetchData = (e)=>{
    e.preventDefault()
    console.log({id,username,name,email,phone,website,street,suite,city,zipcode,companyname});

    let payLoad = {
      id,
      username,
      name,
      email,
      phone,
      website,
      address: {
      street: street,
      suite: suite,
      city: city,
      zipcode: zipcode
    },
    company: {
      companyname: companyname
    }
     }

    

    
       axios.post(`http://localhost:8080/users`,payLoad)
       .then(()=>{
         console.log("Data is created");
        toast.success("Data created successfully!")
        nav('/')
      })

      .catch(()=>{
        console.log("Data is not created");
        
      })

     }

  return (
    <div>
       <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">ID</label>
            <input type="tel" className="form-control" id="exampleFormControlInput1" placeholder="Enter id" onChange={(e)=>{setId(e.target.value)}} />
            <br /> <br />
            <label htmlFor="exampleFormControlInput1" className="form-label">USER NAME</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter username" onChange={(e)=>{setUserName(e.target.value)}} />
            <br /> <br />
            <label htmlFor="exampleFormControlInput1" className="form-label">NAME</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter name" onChange={(e)=>{setName(e.target.value)}}></input>
            <br /> <br />
            <label htmlFor="exampleFormControlInput1" className="form-label">EMAIL ADDRESS</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={(e)=>{setMail(e.target.value)}} ></input>
            <br /> <br />
            <label htmlFor="exampleFormControlInput1" className="form-label">PHONE NUMBER</label>
            <input type="tel" className="form-control" id="exampleFormControlInput1" placeholder="Enter Phone number" onChange={(e)=>{setNum(e.target.value)}}></input>
            <br /> <br />
            <label htmlFor="exampleFormControlInput1" className="form-label">WEBSITE</label>
            <input type="url" className="form-control" id="exampleFormControlInput1" placeholder="Should start with http:// or https://" onChange={(e)=>{setWeb(e.target.value)}}></input>
            <br /> <br />
            <label htmlFor="exampleFormControlInput1" className="form-label">ADDRESS:  <br /> <br />  STREET</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter street" onChange={(e)=>{setStreet(e.target.value)}}></input>
            <br /> <br />
            <label htmlFor="exampleFormControlInput1" className="form-label">SUITE</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter suite" onChange={(e)=>{setSuite(e.target.value)}}></input>
            <br /> <br />
            <label htmlFor="exampleFormControlInput1" className="form-label">CITY</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter city name" onChange={(e)=>{setCity(e.target.value)}}></input>
            <br /> <br />
            <label htmlFor="exampleFormControlInput1" className="form-label">ZIP-CODE</label>
            <input type="tel" className="form-control" id="exampleFormControlInput1" placeholder="Enter zip-code" onChange={(e)=>{setZip(e.target.value)}}></input>
            <br /> <br />
            <label htmlFor="exampleFormControlInput1" className="form-label">COMPANY: <br /><br /> NAME</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter company name" onChange={(e)=>{setCompany(e.target.value)}}></input>
            <br />
            <button className='btn btn-primary' onClick={fetchData}>Submit</button>
        </div>

    </div>
  )
}

export default Create