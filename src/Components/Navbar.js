/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Navbar.css'



function Navbar() {

    return (
        <div className="Navbar" >
            <nav>
                <div className ='logo'>
                    <h4>the nav</h4>
                </div>
                
                <ul className="nav-links"> 
                

                  
                    <li><a href="#" >Home</a></li>  
                    <li><a href="#">About</a></li>
                    <li><a href="#">Login</a></li>
                    {/* <li><a href="#">  </a></li>     */}

                </ul>

                <div className='burger' onClick={navSlide} >
                    <div className='line1'></div>
                    <div className='line2'></div>
                    <div className='line3'></div>

                </div>
            </nav>
        </div>
    );

}

const navSlide =(e)=>{
    e.preventDefault();
    console.log('The link was clicked.');
    // const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    nav.classList.toggle('nav-active');
    

    const navLinks= document.querySelectorAll('.nav-links li');
    navLinks.forEach((element,index) => {
        console.log(element+" " +index);
        
        
    });
    

}
export default Navbar;