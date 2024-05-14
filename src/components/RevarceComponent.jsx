import React from 'react';


const Revarcecomponent = ({ imgSrc, heading, description, para1, mainheading, para2, button}) => {
  return (
    <>
    <div className="SolutionComponent shadow p-4 mb-5 bg-body rounded"
   data-aos= "fade-down"
   data-aos-duration="2000" >

    <div className="text-container">
    <h1 style={{ fontFamily: "'Times New Roman', Times, serif" }}  className="display-6 right-2 mb-3 fs-2 fw-normal">{mainheading}</h1>
    <p className="card-text mb-4 text-black">{para1}</p>
    
    <h2  style={{ fontFamily: "'Times New Roman', Times, serif" }}  className='fs-5 fw-normal mb-3'>{heading}</h2>
    <p>{description}</p> 
        <p  className="bullet-list mb-4">{para2}</p>
    <h3  className=" text-left"> {button}</h3>
</div>
<img src={imgSrc} alt="Related Heading" className="related-image" />
</div>




      <style>
        {`
       
          .SolutionComponent {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding: 40px;
            {/* color: #ffff00; */}
            border-radius: 15px;
            {/* box-shadow: 0 3px 30px #ff0000; */}
=          }

          .related-image {
            width: 100%;
            max-width: 400px;
            height: auto;
            border-radius: 10px;
          }

          .text-container {
            flex: 2;
            padding: 10px;
            background-color: #e83e8c;
            margin: 0px 20px;
            border-radius: 15px;
            border: 5px solid #cc99ff; 
            transition: all 0.3s ease-in-out;
            background-color: #ffffff; /* White background for the jumbotron */
            border: 1px solid #dee2e6; /* Light border color */
            box-shadow: 0 2px 4px rgba(0, 0, 0, 5); /* Soft box shadow */ 
            
          }
          }

          h2 {
            font-size: 24px;
            color: #333333 ;
            margin-bottom: 10px;
            background-color: #ddd; 
            color: #9370DB;
          }

          p {
            font-size: 16px;
            color: #800080;
            line-height: 1.5;
            position: relative;
          
          }
          
          @keyframes example {
            0%   { left:100px; top:0px;}
            50%  { left:10px; top:0px;}
          
          }
          h3{
            color: #0056b3;

          }

          .bullet-list ul {
            list-style-type: none; 
          }
          
          .bullet-list li:before {
            content: '•'; 
            color: #007bff; 
            font-size: 1.5em; 
            margin-right: 0.5em; 
          }

          @media (max-width: 800px) {
            .image-with-text-container {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  );
};

export default Revarcecomponent;
