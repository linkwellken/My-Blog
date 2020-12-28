import React from 'react'
import {NavLink} from 'react-router-dom'
import {SocialIcon} from 'react-social-icons'

export default function Navbar() {
    return (
        <header className="bg-gray-800">
            <div className="container mx-auto flex justify-between" >
                <nav className="flex sm:pl-0">
                    <NavLink to='/' activeClassName="text-white" exact className="inline-flex items-center py-3 px-1 my-6 mt-8 lg:text-xl lg:mr-3 text-white hover:text-orange-800   ">
                        Home
                    </NavLink>
                    <NavLink to='/post' activeClassName="text-white" className="inline-flex flex py-3 px-1 my-6 mt-8 lg:text-xl lg:mr-3 items-center rounded text-white hover:text-orange-800">
                        Blog
                    </NavLink>
                    <NavLink to='/project' className="inline-flex items-center py-3 lg:text-xl lg:mr-3 px-1 mt-8 my-6 rounded text-white hover:text-orange-800">
                        Projects
                    </NavLink>
                    <NavLink to='/about' className="inline-flex items-center py-3 lg:text-xl mt-8 px-1 my-6 lg:mr-3 rounded text-white hover:text-orange-800">
                        About
                    </NavLink>
                    <NavLink to='/quotes' className="inline-flex items-center py-3 lg:text-xl mt-8 px-1 my-6 lg:mr-3 rounded text-white hover:text-orange-800">
                        Quotes
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-1 my-6 space-x-1 lg:space-x-3">
                    <SocialIcon url="https://www.kenreinersdev.com" className="mr-0" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}/>
                    <SocialIcon url="https://github.com/maverick705" className="mr-0" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}/>
                    <SocialIcon url="https://www.linkedin.com/in/kenneth-reiners-755806167/" className="mr-0" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}/>
                    <SocialIcon url="https://twitter.com/maverick_705?s=09" className="mr-0" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}/>

                </div>
            </div> 
        </header>
    

    )
}
