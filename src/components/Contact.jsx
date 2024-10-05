import React from 'react'

const Contact = () => {
    return (
        <div className=' container my-5 p-3'>
            <h2>Contact us via :</h2>
            <div className="row mt-5">
                <div className=' col-lg-6 mb-2 '>
                    <div className=' border border-3 border-primary w-50 m-auto d-flex justify-content-center align-items-center rounded-3'>
                    <a href="mailto:Citedescadeaux@gmail.com" target='_blank' >
                        <i class="fa-solid fa-envelope display-1 p-3"></i>
                        <h4 className=' text-center '>E-Mail</h4>
                    </a>
                    </div>
                </div>
                <div className=' col-lg-6 mb-2 '>
                <div className=' border border-3 border-primary w-50 m-auto d-flex justify-content-center align-items-center rounded-3'>
                <a href="http://wa.me/01002398572" target='_blank'>
                <i class="fa-brands fa-whatsapp display-1 p-3"></i>
                <h4 className=' text-center '>WhatsApp</h4>
                    </a>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className=' col-lg-6 mb-2 '>
                    <div className=' border border-3 border-primary w-50 m-auto d-flex justify-content-center align-items-center rounded-3'>
                    <a href="tel:01002398572" target='_blank' >
                        <i class="fa-solid fa-mobile-screen display-1 p-3"></i>
                        <h4 className=' text-center '>Phone</h4>
                    </a>
                    </div>
                </div>
                <div className=' col-lg-6 mb-2 '>
                <div className=' border border-3 border-primary w-50 m-auto d-flex justify-content-center align-items-center rounded-3'>
                <a href="tel:034878658" target='_blank'>
                
                <i class="fa-solid fa-tty display-1 p-3"></i>
                <h4 className=' text-center '>Landline</h4>
                    </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact