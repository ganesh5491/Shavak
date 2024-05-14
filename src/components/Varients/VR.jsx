import React from 'react';
import img1 from '../assets/products.jpg';
const Products = () => {
        return (
   
         <div className="container-fluid parallax-about bh-36 d-lg-block d-sm-none d-none">
        <div className="row" data-aos="zoom-in" data-aos-delay="200"></div>
      <div id="content" className='container-fluid sp'>
        <div className='row cp'>
          <div className="container-fluid">

            <div className="row">
              <div className="col-md-4 mb-5 col-15 col-s-15 pb-4" data-aos="fade-right" data-aos-delay="150">
                <div className="card shadow">
                  
                  <img src={img1} className="card-img-top" alt="Card 1" />
                  <div className="card-body card-px">
                    <div className="pb-1 mb-4 g_title text-uppercase"> <h2>Products & Services</h2> </div>
                    <p>Our wide range of products, services and solutions are designed to cater to a large market ranging from health care systems, datawarehousing, multimedia and multilingual technologies, networking solutions to technical consultancy, training and eGovernance solutions.</p>

                  </div>
                </div>
              </div>

              <div className="col-md-8 col-sm-12 col-s-12">
                <div className="row product-box-bg">

                  <h2 className="px-3 pb-4 heading">Products</h2>

                  {/* Card Component with JavaScript */}
                  <div className="col-md-6 pb-5" data-aos="fade-right" data-aos-delay="200">
                    <div className="card border mx-sm-1 p-3 shadow">
                      <div className="card-body">
                        
                        <h5 className="card-title">High Performance, Grid and Cloud Computing</h5>
                        <p className="card_text">High Performance Computing (HPC) plays an important role in both scientific..</p>
                        <div className="text-left"><a href="/index.aspx?id=products&thematic=hgc" className="btn btn-sm btn-warning shadow border border-3 border-white rounded-1"> Know More..</a></div>
                      </div>
                    </div>
                  </div>
                  {/* End of Card Component */}
                  <div className="col-md-6 pb-5" data-aos="fade-right" data-aos-delay="200">
                    <div className="card border mx-sm-1 p-3 shadow">
                      <div className="card-body">
                        <h5 className="card-title">High Performance, Grid and Cloud Computing</h5>
                        <p className="card_text">High Performance Computing (HPC) plays an important role in both scientific..</p>
                        <div className="text-left"><a href="/index.aspx?id=products&thematic=hgc" className="btn btn-sm btn-warning shadow border border-3 border-white rounded-1"> Know More..</a></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 pb-5" data-aos="fade-right" data-aos-delay="200">
                    <div className="card border mx-sm-1 p-3 shadow">
                      <div className="card-body">
                        <h5 className="card-title">High Performance, Grid and Cloud Computing</h5>
                        <p className="card_text">High Performance Computing (HPC) plays an important role in both scientific..</p>
                        <div className="text-left"><a href="/index.aspx?id=products&thematic=hgc" className="btn btn-sm btn-warning shadow border border-3 border-white rounded-1"> Know More..</a></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 pb-5" data-aos="fade-right" data-aos-delay="200">
                    <div className="card border mx-sm-1 p-3 shadow">
                      <div className="card-body">
                        <h5 className="card-title">High Performance, Grid and Cloud Computing</h5>
                        <p className="card_text">High Performance Computing (HPC) plays an important role in both scientific..</p>
                        <div className="text-left"><a href="/index.aspx?id=products&thematic=hgc" className="btn btn-sm btn-warning shadow border border-3 border-white rounded-1"> Know More..</a></div>
                      </div>
                    </div>
                  </div>
                

                  {/* Add more card components here */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products;


