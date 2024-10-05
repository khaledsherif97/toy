import React from 'react'
import logo from "../assets/logo.jpg"
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-color shadow-lg">
                <div className="container">
                    <div className='w-50' >
                        <img src={logo} className='w-25 rounded-end-4 border border-3 border-white' />
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active text-white fs-5 fw-semibold" aria-current="page" to={""}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active text-white fs-5 fw-semibold" aria-current="page" to={"about"}>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active text-white fs-5 fw-semibold" aria-current="page" to={"product/boy"}>Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active text-white fs-5 fw-semibold" aria-current="page" to={"con"}>Contact us</Link>
                            </li>
                            <li>
                                <div className="row pt-2 ms-2">
                                    <div className="col-3 border border-2 border-white rounded-pill d-flex justify-content-center align-items-center">
                                        <a target='_blank' href="https://www.facebook.com/Citedescadeaux"><i className="fa-brands fa-facebook-f text-white "></i></a>
                                    </div>
                                    <div className="col-3 ms-2 border border-2 border-white  rounded-pill d-flex justify-content-center align-items-center">
                                        <a target='_blank' href="https://www.instagram.com/citedescadeaux/"><i className="fa-brands fa-instagram text-white "></i></a>
                                    </div>
                                    <div className="col-3 ms-2 border border-2 border-white  rounded-pill d-flex justify-content-center align-items-center">
                                        <a target='_blank' href="https://wa.me/+201002398572?text=more-details"><i className="fa-brands fa-whatsapp text-white "></i></a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar