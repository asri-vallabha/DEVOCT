import React from 'react'
import bgImg from "./assets/loginimg.png"
import logo from "./assets/DevOct.png"
import eye from "./assets/eye.png"
import "./Login.css"

export default function Register(){
    return(
        <section>
            <div> 
            <div className='login'>
            <div className='col-1'>
                <div>
                    <img  className="imglogo" src={logo} alt=""/>
                </div>
                <div className='span'>
                <snap>Log in</snap>
                </div>
                <form id="form" className='flex flex-col'>
                    <input type='text' placeholder='Email'/>
                    <input type='text' placeholder='Password'/>
                    {/* <img  className="eye" src={eye} alt="" /> */}
                    <p><span><input type="checkbox"/>Remember me</span> <a href="#" className="Forgotpassword">Forgot password?</a></p> 
                    <button className='Text'>Log in</button>                  
                    <span className='Create'> Don't have an account?<a href="#" className="Createaccount">Create account </a></span>
                </form>
            </div>
            <div className='col-2'>
                <h1>Welcome to Devoct</h1>
                <h3>Developing the best and efficient website, web applications and software application</h3>
                <img src={bgImg} alt=""/>
            </div>
            </div>

            </div>
            
        </section>
    )
}