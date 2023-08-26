import React from 'react';
import Footer from '../Pages/Footer/Footer';
import Header from '../Pages/Header/Header';
import Navbar from '../Pages/Navbar/Navbar';

const About = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <div>
                <div>
                    <h1 className='mt-20 text-center lg:text-5xl md:text-2xl text-lg font-semibold'>ABOUT US</h1>
                </div>

                <div className="card w-full mt-14  shadow-xl" style={{ background: 'linear-gradient(0deg, rgba(68,151,123,1) 0%, rgba(245,240,240,1) 100%)' }}>
                    <div className="card-body">

                        <p className='text-black text-justify  lg:p-14  lg:text-xl font-bold'>
                            NEDL Engineering Development Limited is one of the premier business
                            enty engaged in providing services on all types of industrial systems
                            around all industries in Bangladesh. You will find us a leading company in
                            Bangladesh on Advanced Industrial Automation (PLC, VFD, HMI), SCADA
                            System (supervisory control and data acquisition), E-CAD (2D and 3D),
                            Assisting clients in developing QHSE policies, procedures (SOP), and QHSE
                            Plan, ERP (Emergency Response Plan), Designing a fire safety plan and
                            installa on, designing the ERT (Emergency Response Team), designing
                            worksite with essential safety signs: slogans, barricading, providing skill
                            QHSE manpower, necessary manpower support for all types of engineering, all types of industrial automation on devices, and safety (PLC,VFD, HMI,
                            (MC, PPE, fire extinguishers, smoke detectors, eye wash stations, etc.) sells
                            and supply, etc. The company’s vision is to make progress possible.
                            through excellence in technology, integrity, and unsurpassed customer
                            services.  The company principles evolve around the idea of providing a
                            group of professional experts worked in local and multinational companies
                            Since more than 20 years in the field of industrial automation, quality, health, environment, safety, and engineering services (inspection,
                            maintenance overhauling, and civil engineering support). Through
                            With sophisticated services and contemplative practices, the company strives to
                            to provide improved and more efficient services to its clients every day. To
                            ensure continuous improvement and growth, the company actually
                            endorses the philosophy of developing and utilizing its human resources,
                            technology and capital with utmost efficiency

                        </p>

                    </div>
                </div>
                {/* ----------------------- */}
                <div className="card w-full  shadow-xl" style={{ background: 'linear-gradient(0deg, rgba(68,151,123,1) 0%, rgba(245,240,240,1) 100%)' }}>
                    <div className="card-body lg:p-14">
                        <h2 className="card-title  lg:text-3xl text-center">Vision</h2>
                        <p className='text-black lg:text-xl font-bold'>
                         Ensure Organizational And residential facilities befitting infrastructure combating all the challenges of developing countries under vision 2041 and forward.

                        </p>

                    </div>
                </div>
                {/* ----------------------------------- */}
                <div className="card w-full  shadow-xl" style={{ background: 'linear-gradient(0deg, rgba(68,151,123,1) 0%, rgba(245,240,240,1) 100%)' }}>
                    <div className="card-body lg:p-14">
                        <h2 className="card-title lg:text-3xl text-center">Mission </h2>
                        <p className='text-black lg:text-xl font-bold'>
                         Contruction of all types Building and other infratructure with the best implementation of the latest Engineering Technology in an Environment friendly,safe and sustainable manner.Besiders, we to deliver leading edge ubiquitous secure technologies, intelligent technical solutions and consulting services to businesses,organization and governmental bodies.

                        </p>

                    </div>
                </div>
                {/* -------------------- */}
                <div className="card w-full  shadow-xl" style={{ background: 'linear-gradient(0deg, rgba(68,151,123,1) 0%, rgba(245,240,240,1) 100%)' }}>
                    <div className="card-body lg:p-14">
                        <h2 className="card-title lg:text-3xl text-center">Strategy </h2>
                        <p className='text-black lg:text-xl font-bold'>
                        Our strategic aim is to be the global leader we enjoy in our markets and to ensure continued growth.We rely on our capability to integrate and deliver solutions from our broad equipment and service portfolio.Our prioprity is to offer the best efficiency reliability,secure and value available.

                        </p>

                    </div>
                </div>
                {/* ---------------------------- */}

            </div>
            <Footer/>

        </div>
    );
};

export default About;