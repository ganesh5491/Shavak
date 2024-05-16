import React, { Component } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import img2 from '../assets/banner/support1.jpg';
import logo1 from '../assets/logo/ticket1.png';
import logo2 from '../assets/logo/FAQ.webp';
import logo3 from '../assets/logo/KB.png';
import logo4 from '../assets/logo/chatboat.jpg';

class Products extends Component {
  componentDidMount() {
    Aos.init({ duration: 2000 });
  }

  render() {
    return (
      <div className='w-[100vw] overflow-x-hidden ' >
        <div className='container  '>
          <img src={img2} className="img-fluid object-fit overflow-hidden w-[100%] mb-5 " alt="Responsive image"></img>
          <button className="btn1">Sign In</button>
          <button className="btn2">Create Account</button>
        </div>

        <div className="col-md-10 col-sm-12 col-s-12">
          <div className="row product-box-bg" style={{ paddingLeft:'14%' }}>

            {/* First Card */}
            <div className="col-md-3 pb-8">
              <div className="card border mx-sm-4 p-3 shadow "  
                data-aos="zoom-in-up"
                data-aos-duration="1000"
                data-aos-delay="500" 
                style={{ width:'100%',height: '100%' }}>
                <div className="card-body d-flex flex-column justify-content-between">
                  <img src={logo1} alt="Logo" className="img-fluid mb-4" />
                  <div>
                    <h1 className='fs-3 mb-3'>Ticketing portal</h1>
                    <h5 className="card-title">High Performance, Grid and Cloud Computing</h5>
                    <p className="card_text mb-4">High Performance Computing (HPC) plays an important role in both scientific..</p>
                  </div>
                  <div className="text-left"><a href="/index.aspx?id=products&thematic=hgc" className="btn btn-sm btn-warning shadow border border-3 border-white rounded-1"> Know More..</a></div>
                </div>
              </div>
            </div>

            {/* Second Card */}
            <div className="col-md-3 pb-8">
              <div className="card border mx-sm-4 p-3 shadow"   data-aos="zoom-in-up"
                data-aos-duration="1000"
                data-aos-delay="500" style={{width:'100%', height: '100%' }}>
                <div className="card-body d-flex flex-column justify-content-between">
                  <img src={logo2} alt="Logo" className="img-fluid mb-4" />
                  <div>
                    <h1 className='fs-3 mb-3'>FAQ's</h1>
                    <h5 className="card-title">High Performance, Grid and Cloud Computing</h5>
                    <p className="card_text mb-4">High Performance Computing (HPC) plays an important role in both scientific..</p>
                  </div>
                  <div className="text-left"><a href="/index.aspx?id=products&thematic=hgc" className="btn btn-sm btn-warning shadow border border-3 border-white rounded-1"> Know More..</a></div>
                </div>
              </div>
            </div>

            {/* Third Card */}
            <div className="col-md-3 pb-8">
              <div className="card border mx-sm-4 p-3 shadow"   data-aos="zoom-in-up"
                data-aos-duration="1000"
                data-aos-delay="500" style={{width:'100%', height: '100%' }}>
                <div className="card-body d-flex flex-column justify-content-between">
                  <img src={logo3} alt="Logo" className="img-fluid mb-4" />
                  <div>
                    <h1 className='fs-3 mb-3'>Knowledge Base</h1>
                    <h5 className="card-title">High Performance, Grid and Cloud Computing</h5>
                    <p className="card_text mb-4">High Performance Computing (HPC) plays an important role in both scientific..</p>
                  </div>
                  <div className="text-left"><a href="/index.aspx?id=products&thematic=hgc" className="btn btn-sm btn-warning shadow border border-3 border-white rounded-1"> Know More..</a></div>
                </div>
              </div>
            </div>

            {/* Fourth Card */}
            <div className="col-md-3 pb-8">
              <div className="card border mx-sm-4 p-3 shadow"   data-aos="zoom-in-up"
                data-aos-duration="1000"
                data-aos-delay="500" style={{width:'100%', height: '100%' }}>
                <div className="card-body d-flex flex-column justify-content-between">
                  <img src={logo4} alt="Logo" className="img-fluid mb-4" />
                  <div>
                    <h1 className='fs-3 mb-3'>Chatbot</h1>
                    <h5 className="card-title">High Performance, Grid and Cloud Computing</h5>
                    <p className="card_text mb-4">High Performance Computing (HPC) plays an important role in both scientific..</p>
                  </div>
                  <div className="text-left"><a href="/index.aspx?id=products&thematic=hgc" className="btn btn-sm btn-warning shadow border border-3 border-white rounded-1"> Know More..</a></div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <style jsx>{`
          .container {
            position: relative;
            width: 100%;
          }

          .container img {
            width: 100%;
            height: auto;
          }

          .container .btn1 {
            position: absolute;
            top: 75%;
            left: 19%;
            transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
            background-color: #FFFFFF;
            color:#9400D3;
            font-size: 20px;
            padding: 10px 24px;
            border: none;
            cursor: pointer;
            border-radius: 20px;
          }

          .container .btn1:hover {
            background-color: black;
          }

          .container .btn2 {
            position: absolute;
            top: 75%;
            left: 8%;
            transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
            background-color: #FFFFFF;
            color:#9400D3;
            font-size: 20px;
            padding: 10px 24px;
            border: none;
            cursor: pointer;
            border-radius: 20px;
          }

          .container .btn2:hover {
            background-color: black;
          }
        `}</style>
      </div>
    );
  }
}

export default Products;