import axios from 'axios'
import React,{ useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
 

const Edit = () => {

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

  let { userid } = useParams()



  let navigate = useNavigate()

  //read the data
  useEffect(()=>{
    axios.get(`http://localhost:8080/users/${userid}`)
    .then((x)=>{
      console.log(x);
      setId(x.data.id)
      setUserName(x.data.username)
      setName(x.data.name)
      setMail(x.data.email)
      setNum(x.data.phone)
      setWeb(x.data.website)
      setStreet(x.data.address.street)
      setSuite(x.data.address.suite)
      setCity(x.data.address.city)
      setZip(x.data.address.zipcode)
      setCompany(x.data.company.companyname)
    },[])

  },[])

  //edit the data based on id
  let editData = (e)=>{
    e.preventDefault()
    let payload = {
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
    console.log(payload);
    axios.put(`http://localhost:8080/users/${userid}` ,payload)
    .then(() => {
      console.log("data edited");
      navigate('/')
      window.alert("edited")
      
    })
    .catch(() => {
      console.log("data not edited");
      
    })
    
  }

  return (

    <div>
      <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">ID</label>
              <input type="tel" className="form-control" id="exampleFormControlInput1" placeholder="Enter id" value={id} onChange={(e)=>{setId(e.target.value)}} />
              <br /> <br />
              <label htmlFor="exampleFormControlInput1" className="form-label">USER NAME</label>
              <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter username" value={username} onChange={(e)=>{setUserName(e.target.value)}} />
              <br /> <br />
              <label htmlFor="exampleFormControlInput1" className="form-label">NAME</label>
              <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter name" value={name} onChange={(e)=>{setName(e.target.value)}}></input>
              <br /> <br />
              <label htmlFor="exampleFormControlInput1" className="form-label">EMAIL ADDRESS</label>
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={email} onChange={(e)=>{setMail(e.target.value)}} ></input>
              <br /> <br />
              <label htmlFor="exampleFormControlInput1" className="form-label">PHONE NUMBER</label>
              <input type="tel" className="form-control" id="exampleFormControlInput1" placeholder="Enter Phone number" value={phone} onChange={(e)=>{setNum(e.target.value)}}></input>
              <br /> <br />
              <label htmlFor="exampleFormControlInput1" className="form-label">WEBSITE</label>
              <input type="url" className="form-control" id="exampleFormControlInput1" placeholder="Should start with http:// or https://" value={website} onChange={(e)=>{setWeb(e.target.value)}}></input>
              <br /> <br />
              <label htmlFor="exampleFormControlInput1" className="form-label">ADDRESS:  <br /> <br />  STREET</label>
              <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter street" value={street} onChange={(e)=>{setStreet(e.target.value)}}></input>
              <br /> <br />
              <label htmlFor="exampleFormControlInput1" className="form-label">SUITE</label>
              <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter suite" value={suite} onChange={(e)=>{setSuite(e.target.value)}}></input>
              <br /> <br />
              <label htmlFor="exampleFormControlInput1" className="form-label">CITY</label>
              <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter city name" value={city} onChange={(e)=>{setCity(e.target.value)}}></input>
              <br /> <br />
              <label htmlFor="exampleFormControlInput1" className="form-label">ZIP-CODE</label>
              <input type="tel" className="form-control" id="exampleFormControlInput1" placeholder="Enter zip-code" value={zipcode} onChange={(e)=>{setZip(e.target.value)}}></input>
              <br /> <br />
              <label htmlFor="exampleFormControlInput1" className="form-label">COMPANY: <br /><br /> NAME</label>
              <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter company name" value={companyname} onChange={(e)=>{setCompany(e.target.value)}}></input>
              <br />
              <button className='btn btn-primary' onClick={editData}>Submit</button>
      </div>

      
    </div>
  )
}

export default Edit