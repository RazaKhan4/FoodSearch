import React, { useState, } from 'react';
import {useHistory} from 'react-router-dom';

const Login=()=>{
           const[name,setName]=useState("")
           const[password,setPassword]=useState("")
           const history = useHistory();


    const changeEvent=(e)=>{
             setName(e.target.value)
             console.log(e.target.value)
    }
    console.log(name)

    const passwordEvent=(e)=>{
        setPassword(e.target.value)
        console.log(e.target.value)
    }

    const onSubmits=(e)=>{
        e.preventDefault();

       if(name.length > 0 && password.length > 0)
       {
        // alert("Form is submitted")  
    //    return <Redirect to="/main"/> 
       history.push("/main");
       }
       
       else{
           alert("Please fill the form")
       }             
    }


    return (
        <>
      <div className="loginMain">
            <h1 className="loginHe">LOGIN PAGE</h1>
            
          <form onSubmit={onSubmits}>
       
              <input type="text"
                     placeholder="ENTER YOUR NAME"
                     className="nameTextField"
                     value={name}
                     onChange={changeEvent}

               />

                     <input type="password"
                     placeholder="ENTER YOUR PASSWORD"
                     className="passwordTextField"
                     value={password}
                     onChange={passwordEvent}
                     
               />

               <button type="submit" className="loginBtn"  >
                               LOGIN
               </button>
               
          </form>
          </div>
        </>
    );
}
export default Login;