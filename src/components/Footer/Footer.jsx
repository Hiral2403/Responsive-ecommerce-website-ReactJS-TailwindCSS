import React from 'react'
import { FaLocationArrow, FaMobileAlt, FaLinkedin } from 'react-icons/fa';
import { FaInstagram, FaFacebook } from 'react-icons/fa6';

const FooterLinks = [
    {
        title: "Home",
        link: "/#",
    },
    {
        title: "ABout",
        link: "/#about",
    },
    {
        title: "Contact",
        link: "/#contact",
    },
    {
        title: "Blog",
        link: "/#blog",
    },
]

const Footer = () => {
    return (
        <div className="dark:bg-gray-950">
            <div className="container mx-auto">
                <div className="grid md:grid-cols-3 pb-20 pt-5">
                    <div className="py-8 px-4">
                        <a
                            href="#"
                            className="text-red-500 font-semibold tracking-widset text-2xl uppercase sm:text-3xl"
                        >Eshop</a>
                        <p className="text-gray-600 dark:text-white lg:pr-24 pt-3">
                            Lorem ipsum dolor sit amet consectetur,<br/>
                            elit. Sunt, tenetur velnumquam <br/> nihil animi.
                        </p>
                        <p className="text-gray-500 mt-4">
                            Made with 💖 by The Coding Journey
                        </p>
                        <a
                        href=""
                        target="_blank"
                        className="inline-block bg-red-500 text-white py-2 px-4 mt-4 text-sm rounded-full" >
                        Visit our YouTube Channel    
                        </a>
                    </div>
                    {/* footer links */}
                    <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
                        <div className="py-8 px-4">
                            <h1 className="text-xl font-bold sm:text-left mb-3">Important Links</h1>
                            <ul className="space-y-3">
                                {
                                    FooterLinks.map(
                                        (data, index) => (
                                            <li key={index}>
                                                <a href={data.link}
                                                className="text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300"
                                                >{data.title}</a>
                                            </li>
                                        )
                                    )
                                }
                            </ul>
                        </div>
                        {/* second col links */}
                        <div className="py-8 px-4">
                            <h1 className="text-xl font-bold sm:text-left mb-3">Quick Links</h1>
                            <ul className="space-y-3">
                                {
                                    FooterLinks.map(
                                        (data, index) => (
                                            <li key={index}>
                                                <a href={data.link}
                                                className="text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300"
                                                >{data.title}</a>
                                            </li>
                                        )
                                    )
                                }
                            </ul>
                        </div>
                        {/* company address */}
                        <div className="py-8 px-4 col-span-2 sm:col-auto">
                        <h1 className="text-xl font-bold sm:text-left mb-3">Address</h1>
                            <div>
                                <div className="flex items-center gap-3">
                                    <FaLocationArrow />
                                    <p>Noida , Utter Pradesh</p>
                                </div>
                                <div className="flex items-center gap-3 mt-6">
                                    <FaMobileAlt />
                                    <p>+91 1234567890</p>
                                </div>
                                {/* social links */}
                                <div className="flex items-center gap-3 mt-6">
                                    <a href="#">
                                        <FaInstagram className="text-3xl hover:text-red-500 duration-300" />
                                    </a>
                                    <a href="#">
                                        <FaFacebook className="text-3xl hover:text-red-500 duration-300" />
                                    </a>
                                    <a href="#">
                                        <FaLinkedin className="text-3xl hover:text-red-500 duration-300" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
