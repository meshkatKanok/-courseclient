import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import Sppiner from '../../Sppner/Sppiner';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import './Home.css'


const Home = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('h https://data-rouge.vercel.app/course').then(
        (res) => res.json(),
      ),
  })
  if (isLoading) {
    return <Sppiner />
  }
  return (
    <div>
       <MessengerCustomerChat
        pageId="376107486210050"
        appId="1621998861645918"

      />
      
      {/* Services-------------------- */}
      <div>
        <div>
          <h1 className='mt-20 text-center lg:text-5xl md:text-2xl text-lg font-semibold'>Our Industrial Services</h1>
        </div>
        {/* ---------------------------------------------------------------------------- */}
        <div className='grid lg:grid-cols-2 md:grid-cols-2 mt-10 grid-cols-1 gap-5 lg:px-10'>
          {/* service--------------1 */}
          <div className="card w-full  shadow-xl" style={{ background: 'linear-gradient(0deg, rgba(68,151,123,1) 0%, rgba(245,240,240,1) 100%)' }}>
            <div className="card-body">
              <h2 className="card-title lg:text-3xl ">Industrial Automation Service</h2>
              <p className='text-black lg:text-xl font-bold'>
                1.PC base industrial Automation <br />
                2.SCADA(supervisory control and data acquisition)  <br />
                3.DCS(distributed control system) <br />
                4.New industrial Automation installation <br />
                5.Plan erection and commissioning <br />
                6.Industrial automation troubleshooting <br />
                7.PLC programming, installation and troubleshooting <br />
                8.HMI programming, installation and troubleshooting <br />
                9.Inverter programming, installation and troubleshooting <br />
                10.Servo drive programming, installation and troubleshooting <br />
                11.Electrical machine erection, commissioning, and troubleshooting <br />

              </p>

            </div>
          </div>

          {/* service--------------2------------ */}
          <div className="card w-full  shadow-xl" style={{ background: 'linear-gradient(0deg, rgba(68,151,123,1) 0%, rgba(245,240,240,1) 100%)' }}>
            <div className="card-body">
              <h2 className="card-title lg:text-3xl ">Microcontroller Support</h2>
              <p className='text-black lg:text-xl font-bold'>
                1.Customized & Internet controlled LED Display solution <br />
                2.Low cost Industrial Automation solution which is complicated using PLC <br />
                3.Industrial Machine to Machine data communication using Radio Frequency <br />
                4.Data acquisition from any machine and save it locally or transmit it to the web server  using Microcontroller ( like as small SCADA) <br />
                5.Various Low Cost Industrial Sensor interfacing. <br />
                6.Customized Power Factor corrector design. <br />
                7.Remote controlled Machine status check using GSM-Mobile technology. <br />
                8.Fingerprint and RFID based time attendance system. <br />
                9.Customized and remotely accessible anti-theft security system and fire alarm system design.

              </p>

            </div>
          </div>
          {/* service------------------3 */}
          <div className="card w-full  shadow-xl" style={{ background: 'linear-gradient(0deg, rgba(68,151,123,1) 0%, rgba(245,240,240,1) 100%)' }}>
            <div className="card-body">
              <h2 className="card-title lg:text-3xl ">Product Support</h2>
              <p className='text-black lg:text-xl font-bold'>
                1.PLC(programmable logic controller) <br />
                2.VFI(Variable frequency inverter) <br />
                3.HMI(Human machine interface) <br />
                4.Servo drive <br />
                5.DC drive <br />
                6.Industrial sensor and switch <br />
                7.Low voltage device
                8.microcontroller <br />
                9.Electrical, electronics equipment and device <br />
                10.Robotics

              </p>

            </div>
          </div>
          {/* service4---------------- */}
          <div className="card w-full  shadow-xl" style={{ background: 'linear-gradient(0deg, rgba(68,151,123,1) 0%, rgba(245,240,240,1) 100%)' }}>
            <div className="card-body">
              <h2 className="card-title lg:text-3xl ">Innovative Products</h2>
              <p className='text-black lg:text-xl font-bold'>
                1.Lab Instruments & Trainer Boards <br />
                2.Customized 3D printer <br />
                3.3D custom mold design <br />
                4.GSM based automation system <br />
                5.GPS based tracking system <br />
                6.Intelligent Robot <br />
                7.Image processing tools <br />
                8.Industrial Automation solution <br />
                9.SCADA System Installation <br />
                10.Raspberry-pi based embedded solution <br />
                11.PCB fabrication and development

              </p>

            </div>
          </div>
        </div>

        {/* Trainiing Support-------------------------------------- */}
        <div>
          <div>
            <h1 className='mt-20 text-center lg:text-5xl md:text-2xl text-lg font-semibold'>Training Support</h1>
          </div>
          <div className='mt-20'>
            {/* Support -1-------------------------------- */}
            <div className="card w-full   shadow-xl" style={{ background: 'linear-gradient(0deg, rgba(68,151,123,1) 0%, rgba(245,240,240,1) 100%)' }}>
              <div className="card-body">
                <h2 className="card-title lg:text-3xl ">Corporate/ Job-oriented Training</h2>
                <p className='text-black lg:text-xl font-bold'>
                  Are you an Engineer? Currently working on Maintenance and Installation Department in an Industry? We have a customized training facility for you! Corporate training facility is also available. If you need <br />
                  automation or microcontroller related corporate training please contact with our research and development department. We will touch you soon. For corporate training send us a proposal with your company profile and

                </p>

              </div>
            </div>
            {/* Support 2--------------------------------- */}
            <div className="card w-full  shadow-xl" style={{ background: 'linear-gradient(0deg, rgba(68,151,123,1) 0%, rgba(245,240,240,1) 100%)' }}>
              <div className="card-body">
                <h2 className="card-title lg:text-3xl ">Industrial Attachments</h2>
                <p className='text-black lg:text-xl font-bold'>
                  Diploma in Engineering, B.Sc in Engineering, M.Sc in Engineering students can join our Industrial Attachment program. We have a lot of dedicated teacher with relative topics. <br />
                  Our program is enhanced with a lot of practical coursework well structured, credit-bearing work experience in a professional work setting during which the student applies and acquires knowledge and skills.

                </p>

              </div>
            </div>
            {/* Support 3--------------------------------------- */}

          </div>
        </div>
        {/* Training Support End----------------------------------------- */}

      </div>
      <div className='w-full h-[100px] mt-20' style={{ background: "radial-gradient(circle, rgba(68,151,123,1) 0%, rgba(86,235,241,1) 100%)" }}>
        <h1 className='lg:text-4xl text-2xl pt-5 font-bold text-center text-white'>Our Industrial Attachment</h1>
      </div>
      <div className='max-w-screen-xl servicesbody m-auto grid lg:grid-cols-3 h-auto md:grid-cols-2 grid-cols-1 gap-10 mt-10'>
        {
          data?.slice(0, 5)?.map(indusrial =>
            <div key={indusrial?._id}>
              <div className="card w-full bg-base-100 shadow-lg  hover:shadow-2xl border border-gray-400">
                <figure><img className='w-full servicesImg h-[250px] bg-[#1D2939]' src={indusrial?.icone} alt="image" /></figure>
                <div className="card-body">
                  <h2 className="card-title lg:text-xl md:text-lg  font-bold">{indusrial?.depname}</h2>
                  <p className='text-[10px]'>Industrial Attachment Training is the Hands on Industry Based Training where a student get training and takes preparation for his or her upcoming career and jobs. After successful training with excillent skills from the institute a student can explore himself in the job market. </p>
                  <div className="card-actions justify-end">
                    <div>
                      <Link to={`services/${indusrial?._id}`} className="inline-flex items-center px-3 py-2 w-[156px] h-[40px] text-sm font-medium text-center hover:bg-[#D0D5DD] bg-[#EAECF0] justify-center mr-4 rounded-[6px] mt-4 ">
                        See Details
                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      </div>

    </div>
  );
};

export default Home;