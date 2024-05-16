// Dashboard.jsx
import React from 'react';
import logo1 from '../assets/logo/ticket1.png';
import logo2 from '../assets/logo/FAQ.webp';
import logo3 from '../assets/logo/KB.png';
import Aos from 'aos';
import 'aos/dist/aos.css';

class Dashboard extends React.Component {
  componentDidMount() {
    Aos.init({ duration: 2000 });
  }

  render() {
    return (
      <div className="col-md-3 col-sm-12">
        <div
          className="card border mx-sm-4 p-3 shadow "
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <div className="card-body d-flex flex-column justify-content-between">
            <img src={logo1} alt="Logo" className="img-fluid mb-4" />
            <div>
              <h1 className="fs-3 mb-3">Ticketing portal</h1>
              <h5 className="card-title">
                High Performance, Grid and Cloud Computing
              </h5>
              <p className="card_text mb-4">
                High Performance Computing (HPC) plays an important role in
                both scientific..
              </p>
            </div>
            <div className="text-left">
              <a
                href="/index.aspx?id=products&thematic=hgc"
                className="btn btn-sm btn-warning shadow border border-3 border-white rounded-1"
              >
                Know More..
              </a>
            </div>
          </div>
        </div>

        <div
          className="card border mx-sm-4 p-3 shadow"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <div className="card-body d-flex flex-column justify-content-between">
            <img src={logo2} alt="Logo" className="img-fluid mb-4" />
            <div>
              <h1 className="fs-3 mb-3">FAQ's</h1>
              <h5 className="card-title">
                High Performance, Grid and Cloud Computing
              </h5>
              <p className="card_text mb-4">
                High Performance Computing (HPC) plays an important role in
                both scientific..
              </p>
            </div>
            <div className="text-left">
              <a
                href="/index.aspx?id=products&thematic=hgc"
                className="btn btn-sm btn-warning shadow border border-3 border-white rounded-1"
              >
                Know More..
              </a>
            </div>
          </div>
        </div>

        <div
          className="card border mx-sm-4 p-3 shadow"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <div className="card-body d-flex flex-column justify-content-between">
            <img src={logo3} alt="Logo" className="img-fluid mb-4" />
            <div>
              <h1 className="fs-3 mb-3">Knowledge Base</h1>
              <h5 className="card-title">
                High Performance, Grid and Cloud Computing
              </h5>
              <p className="card_text mb-4">
                High Performance Computing (HPC) plays an important role in
                both scientific..
              </p>
            </div>
            <div className="text-left">
              <a
                href="/index.aspx?id=products&thematic=hgc"
                className="btn btn-sm btn-warning shadow border border-3 border-white rounded-1"
              >
                Know More..
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
