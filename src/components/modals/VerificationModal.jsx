import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const VerificationModal = ({show2, handleClose2}) => {
    const [isVerified, setIsVerified] = useState(false);

  return (
    <Modal show={show2} onHide={handleClose2} size="lg" animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Get Verified</Modal.Title>
        </Modal.Header>
        <div className='my-4 text-center '>
        {
            isVerified?(              <form
                className="pt-4 d-flex gap-4 flex-column"
                style={{ color: "#8F8F8F", fontSize: "18px" }}
              >
                <p style={{textAlign:"center"}}>Email has been sent to <span style={{color:"#EB7C49", fontWeight:"500"}}> tutor1@yourcollege.edu.</span><br/>
Your Education will be verified once the verifier accepted your request. </p>
      
                <div className='d-flex justify-content-center gap-4 mb-4'>
                <Button
                      onClick={handleClose2}
                        className=" d-flex flex-row btn justify-content-center align-items-center gap-2"
                        style={{
                          color: "white",
                            marginTop:"0",
                          background:
                            "linear-gradient(180deg, #EB7C49 -0.55%, #F04F52 121.03%)",
                          border: "none",
      
                          maxWidth: "250px",
                          fontSize: "14px",
                        }}
                      >
                      Done
                      </Button>
                      </div>
              </form>):(
               
                       <form
          className="pt-4 d-flex gap-4 flex-column"
          style={{ color: "#8F8F8F", fontSize: "18px" }}
        >
          <div className="form-row justify-content-center d-flex gap-4 ">
            {/* Enter your Verifier Email ID */}
            <div
              className="form-group flex flex-col col-5"
              style={{ position: "relative", zIndex: "1" }}
            >
              <label style={{ color:"black", fontWeight:"500", marginBottom:"10px"}} htmlFor="Enter your Verifier Email ID">Enter your Verifier Email ID</label>
              <input
                type="text"
                className="form-control  "
                id="Ex: tutor1@yourcollege.edu"
                placeholder="Ex: tutor1@yourcollege.edu"
               
                style={{
                  backgroundColor: "#F3F3F3",
                  color: "#858585",
                  fontSize: "18px",
                }}
              />
            </div>
      
          </div>
          <p style={{textAlign:"center"}}>The Verifier’s Email ID should be valid & It can be your<br/> Tutor, principal or any management </p>

          <div className='d-flex justify-content-center gap-4 mb-4'>
          <Button
            
                  className=" d-flex flex-row btn justify-content-center align-items-center gap-2"
                  style={{
                    color: "black",
                    maxWidth: "250px",
                    fontSize: "14px",
                    borderWidth:"2px",
                    borderColor:"#F04F52",
                    backgroundColor:"transparent"
                  }}
                >
                Skip for Now
                </Button>
          <Button
                onClick={()=> setIsVerified(true)}
                  className=" d-flex flex-row btn justify-content-center align-items-center gap-2"
                  style={{
                    color: "white",

                    background:
                      "linear-gradient(180deg, #EB7C49 -0.55%, #F04F52 121.03%)",
                    border: "none",

                    maxWidth: "250px",
                    fontSize: "14px",
                  }}
                >
                Send for Verification

                  <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.76191 7.85714C5.76191 6.12333 7.17095 4.71429 8.90476 4.71429C9.48095 4.71429 10.0152 4.87143 10.4762 5.13857V1.04762C10.4762 0.769773 10.3658 0.503307 10.1694 0.30684C9.97288 0.110374 9.70642 0 9.42857 0H1.04762C0.46619 0 0 0.46619 0 1.04762V7.33333C0 7.61118 0.110374 7.87765 0.30684 8.07411C0.503307 8.27058 0.769773 8.38095 1.04762 8.38095H5.80905C5.78286 8.2081 5.76191 8.03524 5.76191 7.85714ZM1.04762 2.09524V1.04762L5.2381 3.66667L9.42857 1.04762V2.09524L5.2381 4.71429L1.04762 2.09524ZM9.42857 9.42857V8.38095H7.33333V7.33333H9.42857V6.28571L11 7.85714L9.42857 9.42857Z" fill="white"/>
</svg>

                </Button>
                </div>
        </form>

        
              
            )
            
        }
          </div>
    
      </Modal>
  )
}

export default VerificationModal