import React from 'react';
import img1 from '../assets/varients.png';
import img2 from '../assets/index2.jpeg';
import img4 from '../assets/banner/products.jpg';
import SolutionComponent from '../components/SolutionComponent.jsx';
import RevarceComponent from '../components/RevarceComponent.jsx';
import AOS from 'aos'; // Import AOS

const Components = () => {
  AOS.init(); // Initialize AOS

  return (
    <>    
      <div className='container mb-5 ' data-aos="fade-in"> {/* Add AOS attribute */}
        <img src={img4} className=" img-fluid" alt="Responsive image"  style={{ width: '100%', height: '50%' }} ></img>
        {/* <div class="content" data-aos="zoom-in">  */}
          <h1 className='display-3 centered-left m-5 absolute text-white' style={{ fontFamily: "'Times New Roman', Times, serif" }}>PRODUCT VARIENTS </h1>
        </div>
      {/* </div> */}
      <p></p>
      <div className="jumbotron"  style={{  paddingLeft:'155px', paddingRight:'155px' }} data-aos="slide-up"> {/* Add AOS attribute */}
        <div>
          <RevarceComponent
            mainheading="PARAM SHAVAK (HPC)"
            para1=" Unveiling Scientific Insights: A Robust Desktop HPC solution for Advanced Computational Research and Analysis."
            description={
              <ul>
                <li>PARAM Shavak is a ready-to-use HPC system pre-loaded with all the required system software and applications from selected scientific domains. The system is designed to be enabling tool for research organizations as well as academic institutions that are on the verge of adopting HPC culture and skill sets generation.</li>
              </ul>
            }
            imgSrc={img1}
            button={<a href="/varients/HPC" className="btn btn-sm btn-warning shadow  border-2 border-white rounded-1"> Know More..</a>}
          >
          </RevarceComponent>
          <SolutionComponent
            mainheading="PARAM SHAVAK (DL GPU)"
            para1="Applications Empowering AI Innovations: A HPC Desktop solution designed for Deep Learning and Machine Learning Applications."
            description="C-DAC's Deep Learning development - supercomputer in a box, “PARAM SHAVAK DL GPU System” is exclusively designed for academic institutions and research organizations that employ GPU accelerated deep learning techniques for machine learning applications, big data problems, computer vision, speech recognition, natural language processing, life sciences and artificial intelligence. Equipped with Ampere architecture-based co-processing technologies (RTX A4500) and software development environment (with Deep Learning GPU accelerated libraries and SDK)."
            imgSrc={img2}
            button={<a href="/varients/DL_GPU" className="btn btn-sm btn-warning shadow  border-2 border-white rounded-1"> Know More..</a>}

         >
          </SolutionComponent>
          <RevarceComponent
            mainheading="PARAM SHAVAK (VR)"
            para1="Leveraging Virtual Reality (VR): Redefining the professional learning landscapes in High-risk sectors like Healthcare, Military, Aviation etc."
            description= "PARAM Shavak VR, a packaged solution from C-DAC enables collaborative VR experiences come alive. With this compact system, users can extend their reach beyond the traditional domains of design, manufacturing and entertainment to further VR enriched healthcare, defence, advertising and education."
            imgSrc={img1}
            button={<a href="/varients/VR" className="btn btn-sm btn-warning shadow  border-2 border-white rounded-1"> Know More..</a>}


            >
          </RevarceComponent>
          <SolutionComponent
            mainheading="PARAM SHAVAK (SRISHTI)"
            para1="Cultivating Digital Harvests: Bridging Agriculture and Bioinformatics with cutting-edge HPC solutions for Crop Genomics and Data-Driven Farming."
            description="C-DAC’s indigenous Param Shavak Srishti solution is one such milestone to couple technologies in bioinformatics and agriculture. This affordable High Performance computational resource is all set to provide the readily available computing platform, which is designed to provide scalable, green and power efficient ecosystem. PARAM Shavak Srishti is a table-top based Supercomputing-in-a-Box solution which does not require any sophisticated data centre ecosystem to operate. It isequipped with x86 based latest processor architecture along with high memory
            "
            imgSrc={img2}
         
            button={<a href="/varients/Srishti" className="btn btn-sm btn-warning shadow  border-2 border-white rounded-1"> Know More..</a>}
            >
          </SolutionComponent>
        </div>
      </div>

      <style>
        {`
          .container {
            display: flex;
            align-items: center;
            justify-content: center
            position: relative;

            margin: 0 auto;
          }


          .container .content {
            position: absolute; 
            bottom: 370px; 
            background: rgb(0, 0, 0); 
            background: rgba(0, 0, 0, 0.5); 

            color: #FFFFFF;
            width: 50%; 
            padding: 30px; 
          }


           `}
      </style>

    </>
  );
};

export default Components;