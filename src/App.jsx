import './App.css'
import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";


function App() {
const[data,SetData]=React.useState({name:"",email:"",message:""});

function handleChange(event){
  const {name,value}=event.target
  SetData( prev=> {
    return{
      ...prev,
      [name]:value
    }
  })
}

  function handleSubmit(){
    console.log(data)
    if(data.name===""||data.email===""||data.message===""){
      document.getElementById("message").style.color="red"
      document.getElementById("message").innerHTML="Please fill all the feilds"
    }
    else if(!data.email.includes('@')){
              document.getElementById("message").style.color="red"
              document.getElementById("message").innerHTML="Please Enter a valid Email"

    }
    else{
        document.getElementById("message").style.color="green"
              document.getElementById("message").innerHTML="Details Submitted "
              console.log(data)

    }
  }
 

  return (

     <div className='contact--form'>
  
      <div className='form' >
      <p id='message'></p>
            <h1>Get in touch</h1>
            <div className='underLine'></div>
           
            <label htmlFor="name">Name</label>
            <input type="text" name='name' onChange={handleChange} value={data.name} />
            <label htmlFor=""  >Email</label>
            <input type="email" name='email'onChange={handleChange}  value={data.email} />
            <label htmlFor="name"  >Message</label>
            <textarea name="message" id="" onChange={handleChange} value={data.message}></textarea>
            <button onClick={handleSubmit} >Submit</button>
          
      </div>
      <div className='address'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3595.206565689587!2d94.10325677439515!3d25.6975839112535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374621fe0ef8b3d3%3A0x2c70f1390a46a5cb!2sNagaEd!5e0!3m2!1sen!2sin!4v1728397822025!5m2!1sen!2sin" width="400" height="250" ></iframe>
        <div className='icons'>
       <div className='icon'><CiLocationOn  size={30}/> <h4>Kohima,Nagaland</h4></div> 
       <div className='icon'><IoCallOutline size={30}/> <h4>08787748698</h4></div> 
       <div className='icon'><CiMail size={30} /> <h4>NagaEd@gmail.com</h4></div>

        </div>
        <div className='social-media'>
        <FaInstagram size={25} />
        <FaXTwitter size={25} />
        <FaWhatsapp size={25} />
        <FiFacebook size={25} />
        </div>
    

      </div>
     </div>
  )
}

export default App
