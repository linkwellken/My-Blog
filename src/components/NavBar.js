import React from 'react'
import {NavLink} from 'react-router-dom'
import {SocialIcon} from 'react-social-icons'

export default function Navbar() {
    return (
        <header className="navbar-dark bg-dark " >
            <div className="container flex text-center pl-0 justify-between" >
                <nav className="flex justify-center  ">
                    <NavLink to='/' activeClassName="text-white" exact className="inline-flex items-center py-3 px-1 my-6 mt-8 lg:text-xl lg:mr-3 text-white    ">
                        Home
                    </NavLink>
                    <NavLink to='/post' activeClassName="text-white" className="inline-flex flex  lg:text-xl lg:mr-3 py-3 px-1 my-6 mt-8 items-center rounded text-white ">
                        Blog
                    </NavLink>
                    <NavLink to='/project' className="inline-flex items-center py-3 lg:text-xl lg:mr-3 px-1 mt-8 my-6 rounded text-white ">
                        Projects
                    </NavLink>
                    <NavLink to='/about' className="inline-flex items-center py-3 lg:text-xl mt-8 px-1 my-6 lg:mr-3 rounded text-white ">
                        About
                    </NavLink>
                    <NavLink to='/quotes' className="inline-flex items-center py-3 lg:text-xl mt-8 px-1 my-6 lg:mr-3 rounded text-white ">
                        Quotes
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-1 pt-4 mr-1 my-6 space-x-1 lg:space-x-3">
                    <SocialIcon url="https://www.kenreinersdev.com" className="mr-0" target="_blank" fgColor="#fff" style={{height: 30, width: 30}}/>
                    <SocialIcon url="https://github.com/maverick705" className="mr-0" target="_blank" fgColor="#fff" style={{height: 30, width: 30}}/>
                    <SocialIcon url="https://www.linkedin.com/in/kenneth-reiners-755806167/" className="mr-0" target="_blank" fgColor="#fff" style={{height: 30, width: 30}} />
                    <SocialIcon url="https://twitter.com/maverick_705?s=09" className="mr-0" target="_blank" fgColor="#fff" style={{height: 30, width: 30}}/>

                </div>
            </div> 
        </header>
    

    )
}
