import React from 'react'
import bgImg from "./assets/Vector.jpg"
import facebook from "./assets/facebook.jpg"
import google from "./assets/Google.jpg"
import linkedin from "./assets/Linkedin.jpg"
import logo from "./assets/devoct.jpg"
import "./Register.css"


export default function Register(){
    return(
        <section>
            <div className='register'>
            <img src={logo} alt=""/>
            <div className='col-1'>
                <div className='span'>
                <snap>Create account</snap>
                </div>
                <form id="form" className='flex flex-col'>
                    <input type='text' placeholder='Full Name'/>
                    <input type='text' placeholder='Email Address'/>
                    <input type='text' placeholder='Password'/>
                    <input type='text' placeholder='Confirm Password'/>
                    <p><span><input type="checkbox"/></span> I have read and accepted the <a href="#" class="Termsandconditions-link">Terms and conditons </a>to Devoct</p>
                    
        
                    <button className='btn'>Create account</button>
                    <hr/>
                    <p className='or'>Or sign up with</p>                    
							<div className="flex-c-m">
								<a href="#" className="facebook">
									<img src={facebook} alt=""/>
                                </a>
								<a href="#" className="google">
									<i className="fa fa-twitter"/>
                                    <img src={google} alt=""/>
								</a>
								<a href="#" className="linkedin">
									<i className="fa fa-google"/>
                                    <img src={linkedin} alt=""/>
								</a>
							</div>
                            <p className='P'> Already have an account? <a href="#" class="SignIn">Sign In </a></p>
                </form>
            </div>
            <div className='col-2'>
                <h1>Welcome to Devoct</h1>
                <h3>Developing the best and efficient website, web applications and software application</h3>
                <img src={bgImg} alt=""/>
            </div>
            </div>
        </section>
    )
}