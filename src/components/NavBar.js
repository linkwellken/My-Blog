import React from 'react'
import {NavLink} from 'react-router-dom'
import {SocialIcon} from 'react-social-icons'

export default function Navbar() {
    return (
        <header className="bg-gray-800">
            <div className="container mx-auto flex justify-between" >
                <nav className="flex">
                    <NavLink to='/' activeClassName="text-white" exact className="inflex-flex items-center py-5 px-3 mr-4 text-white hover:text-orange-800 text-4xl  ">
                        Home
                    </NavLink>
                    <NavLink to='/post' activeClassName="text-white" className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-orange-800">
                        Blog Posts
                    </NavLink>
                    <NavLink to='/project' className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-orange-800">
                        Projects
                    </NavLink>
                    <NavLink to='/about' className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-orange-800">
                        About
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://www.kenreinersdev.com" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}/>
                    <SocialIcon url="https://github.com/maverick705" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}/>
                    <SocialIcon url="https://www.linkedin.com/in/kenneth-reiners-755806167/" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}/>
                    <SocialIcon url="https://twitter.com/maverick_705?s=09" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}/>

                </div>
            </div> 
        </header>
    

    )
}
