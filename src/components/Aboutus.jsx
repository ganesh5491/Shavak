import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img1 from '../assets/ONAMA.png';
import img2 from '../assets/CHReME.png';
import img3 from '../assets/Tango.png';
import img4 from '../assets/Anyaya.png';
import img5 from '../assets/office.jpeg';
import SolutionComponent from '../components/SolutionComponent.jsx';
import RevarceComponent from '../components/RevarceComponent.jsx';

const AboutUs = () => {
  AOS.init();

  return (
    <>
      <div className="jumbotron" style={{ paddingLeft: '155px', paddingRight: '155px' }}>
        <h1
          className="display-5 text-center mb-4 fw-normal mt-5"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-delay="500"
          style={{ fontFamily: "'Times New Roman', Times, serif" }}
        >
          About CDAC
        </h1>

        <div className="container shadow-lg p-3 bg-body rounded">
          <p
            className="mb-4 text-black text-wrap w-[50%]"
            data-aos="fade-down"
            data-aos-duration="500"
            data-aos-delay="500"
            style={{ paddingLeft: '105px', paddingRight: '105px' }}
          >
            C-DAC, or the Centre for Development of Advanced Computing, is a prominent Indian initiative established in 1988 by the Government of India to enhance the nation's technological prowess in Information Technology (IT). Renowned for its expertise in areas like High Performance Computing (HPC), Grid Computing, and Software Technologies, C-DAC has earned a strong reputation both nationally and internationally. It specializes in developing IT products and solutions across various sectors such as Finance, Healthcare, Defense, and e-Governance. Noteworthy achievements include pioneering the OpenFrame Architecture and producing the PARAM series of Supercomputers, including the latest PARAM Siddhi-AI. C-DAC's contributions extend to fields like Computational Sciences, Bioinformatics, and Financial Modeling. With a focus on advancing national technological capabilities, C-DAC aims to emerge as a premier R&D institution, contributing to economic and societal development through cutting-edge electronic and IT solutions.
          </p>

          <div className="image mb-4" style={{ width: '550%', height: '100%' }}>
            <img src={img5} alt="Paris" />
          </div>
        </div>

       

       

        <div className="container-fluid border-top pb-4"></div>

        <h1
          className="display-5 text-center mb-4 fw-normal"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-delay="500"
          style={{ fontFamily: "'Times New Roman', Times, serif" }}
        >
          Indigenous Software Tools Along With PARAM SHAVAK
        </h1>
        <p
          className="mb-4 text-black shadow p-3 bg-body rounded"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          The novelty of the entire solution is in providing end-to-end programming environment, application support, training materials and tutorials, customized development platform along with in-built C-DAC indigenously developed tools
        </p>

        <SolutionComponent
          mainheading="1. Onama"
          para1=" Onama has been specially designed for technical institutions to inculcate and augment HPC into the education curriculum at the early stage, thereby promoting high-end research at the academic level with huge generation of HPC professional. It consists of HPC enabled open-source tools in engineering domain."
          imgSrc={img1}
          heading="Salient Features"
          para2={
            <ul>
              <li>  PA well selected set of parallel as well as serial applications and tools across various engineering disciplines. </li>
              <li>  Onama comes with built-in applications and execution model. </li>
              <li>  It also provides access to various mathematical, scientific and engineering libraries that can be used to develop programs to solve user's problems. </li>
              <li>  Onama offers unique opportunity to faculty members and students of the engineering colleges to adopt parallel programming. </li>
            </ul>
          }
        ></SolutionComponent>

        <RevarceComponent
          mainheading="2. CHReME (C-DAC HPC Resource Management Engine)"
          para1="The growth of Parallel Applications in Scientific and Engineering domain has posed a serious challenge of efficient usage and management of HPC system resources. To address this challenge, C-DAC has indigenously developed CHReME, which is a web-based Portal that empowers Scientists, Researchers, System administrators and HPC Users with intuitive GUI to exploit the various resources of HPC systems. CHReME provides a layer of abstraction to shield the end-user from the complexity of accessing HPC resources."
          imgSrc={img2}
          heading="Salient Features"
          para2={
            <ul>
              <li>GUI based Web Interface</li>
              <li> Job Creation, Submission, Management & Monitoring</li>
              <li>Alerts and Reporting</li>
              <li>Data Management</li>
              <li>Comprehensive Monitoring of HPC Resources</li>
              <li> Application Specific Interfaces</li>
              <li>Workload Manager Integration (e.g. PBS/Torque, Slurm)</li>
              <li>Ease of Credential Management</li>
              <li>Extensive Runtime Environment</li>
              <li>Secure Access</li>
            </ul>
          }
        ></RevarceComponent>

        <SolutionComponent
          mainheading=" 3. Tango"
          para1=" Tango is software which is used in drug discovery pipeline. It helps in finding 3-D structure of a probable drug molecule, which can be then synthesised to form a drug. TANGO is conformation generation and optimization tool which uses semi- empirical energy calculations. The conformation generation is based on torsion angle rotation of the exocyclic bonds. The energy calculations are performed using MOPAC. The unique feature of this tool lies in the implementation of MPI for conformation generation and optimization."
          imgSrc={img3}
          heading="Salient Features"
          para2={
            <ul>
              <li>  Parallel code which runs across cluster node </li>
              <li>  Can generate conformers for multiple molecules at a time</li>
              <li>  User can decide the torsion angle for which conformers are to be generated Interface to external visualizers </li>
            </ul>
          }
        ></SolutionComponent>

        <RevarceComponent
          mainheading="4. Anyaya"
          para1=" Anvaya is a software application, which provides a workflow environment for high throughput comparative genomics. It consists of an interface to Bioinformatics tolls and databases that are loosely coupled together in a coordinated system to execute a set of analyses tools in series or in parallel"
          imgSrc={img4}
          heading="Salient Features"
          para2={
            <ul>
              <li>Powerful automated environments</li>
              <li> Custom Tools to provide novel functionalities </li>
             <li>Drag-drop facility to build custom workflows </li>
              <li>Can handle multiple genomes/proteomes at a time</li>
              <li>Uses back-end parallel supercomputer for rapid execution</li>
            </ul>
          }
        ></RevarceComponent>
      </div>

      <style>
        {`
    .container {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .text {
      flex: 1;
    }

    .image {
      flex: 1;
      margin-left: 3rem;
    }

    @media (max-width: 768px) {
      .container {
        flex-direction: column;
      }

      .text,
      .image {
        flex: none;
      }

      .image {
        margin-left: 0;
        margin-top: 2rem;
      }
    }
  `}
      </style>
    </>
  );
};

export default AboutUs;