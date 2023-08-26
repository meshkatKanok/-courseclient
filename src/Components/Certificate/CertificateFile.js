import React from 'react';
import './CertifcateFile.css'


const CertificateFile = () => {

    const data = JSON.parse(localStorage.getItem("key"))
    const {
        Departmentname,

        MotherName,
        TraningEnd,

        courseName,

        coursetitle,

        fatherName,

        institute,

        name,

        roll,

        session,

        traningDate

    } = data

    return (
        <div>
            <button>Download Pdf</button>
            <div className='certificate'>
                <div className='certificate-content'>
                    <p>This is to Certify that <span style={{ fontWeight: "bold", fontSize: "15pt" }}><b>{name}</b></span>Father’s Name: <span style={{ fontWeight: "bold", fontSize: "15pt" }}><b>{fatherName} </b></span>Mother’s Name:<span style={{ fontWeight: "bold", fontSize: "15pt" }}><b> {MotherName} </b></span> Institute:<span style={{ fontWeight: "bold", fontSize: "15pt" }}><b> {institute} </b></span> Department: <span style={{ fontWeight: "bold", fontSize: "15pt" }}><b>{Departmentname} </b></span>Board Roll: <span style={{ fontWeight: "bold", fontSize: "15pt" }}><b>{roll}</b></span>Session: <span style={{ fontWeight: "bold", fontSize: "15pt" }}><b>{session} </b></span>has successfully Complated the <b>Industrial Attachment.</b></p>

                    {/* ------------------------------------- */}
                    <div className='certificate-dateline'>
                        <span>Training Starting Date</span> <span style={{ marginLeft: "20px" }}>: {traningDate}</span> <br />
                        <span>Training Closing Date</span> <span style={{ marginLeft: "20px" }}>:  {TraningEnd}</span> <br />
                        <span>Course Title</span> <span style={{ marginLeft: "85px" }}>: <b style={{ fontWeight: "bold", fontSize: "15pt" }}>{courseName}</b></span> <br />
                        <span>Obtain Grade </span><span style={{ marginLeft: "71px" }}>: A+</span>
                    </div>
                    {/* ------------------------------------- */}

                    {/* --------------------------- */}
                    <div className='certificate-lastcontent'>
                        During the Period of his internship/training programme with us he was found sincere, hardworking, honest and devoted. We wish him every success in life.
                    </div>
                    {/* --------------------------- */}
                </div>
                <div className='certificate-bottom'>
                    <span>Date: 30 April 2023</span>
                </div>
            </div>

        </div>
    );
};

export default CertificateFile;