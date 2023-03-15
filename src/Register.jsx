import React from 'react'

export default function Register(){
    return(
        <section>
            <div className='register'>
            <div className='col-1'>
                <h2>Create account</h2>
                <form id="form" className='flex flex-col'>
                    <input type='text' placeholder='fullname'/>
                    <input type='text' placeholder='Email Address'/>
                    <input type='text' placeholder='Password'/>
                    <input type='text' placeholder='Confirm Password'/>
                    <input type="checkbox" /><span> I have read and accepted the Terms and conditons to Devoct</span>
                    
                    <button className='btn'>Create account</button>
                </form>
            </div>
            </div>
        </section>
    )
}