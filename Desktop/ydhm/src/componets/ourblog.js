import React from "react";


export const Ourblog = () => {

   return(
    <div className="site-section" id="section-blog">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-md-7 text-center border-primary">
              <h2 className="font-weight-light text-custom" data-aos="fade-up">Our Blog</h2>
              <p className="color-black-opacity-5" data-aos="fade-up">See Our Daily News &amp; Updates</p>
            </div>
          </div>
          <div className="row mb-5 align-items-stretch">
            <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up">
              <div className="h-entry">
                <a href="single.html"><img src={require(`../images/blog_1.jpg`)} alt="Image" className="img-fluid" /></a>
                <h2 className="font-size-regular"><a href="single.html">How Logistics Company Improve Spendings</a></h2>
                <div className="meta mb-4">by Jed Wilson <span className="mx-2">&bullet;</span> Jan 18, 2019 <span className="mx-2">&bullet;</span> <a href="#">News</a></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div className="h-entry">
                <a href="single.html"><img src={require(`../images/blog_2.jpg`)} alt="Image" className="img-fluid" /></a>
                <h2 className="font-size-regular"><a href="single.html">How Logistics Company Improve Spendings</a></h2>
                <div className="meta mb-4">by Jed Wilson <span className="mx-2">&bullet;</span> Jan 18, 2019 <span className="mx-2">&bullet;</span> <a href="#">News</a></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay="200">
              <div className="h-entry">
                <a href="single.html"><img src={require(`../images/blog_3.jpg`)} alt="Image" className="img-fluid" /></a>
                <h2 className="font-size-regular"><a href="single.html">How Logistics Company Improve Spendings</a></h2>
                <div className="meta mb-4">by Jed Wilson <span className="mx-2">&bullet;</span> Jan 18, 2019 <span className="mx-2">&bullet;</span> <a href="#">News</a></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center" data-aos="fade-up" data-aos-delay="300">
              <p className="mb-0"><a href="https://free-template.co" className="btn btn-primary py-3 px-5 text-white">View All Blog Posts</a></p>
            </div>
          </div>
        </div>
      </div>
   )

}
export default Ourblog;