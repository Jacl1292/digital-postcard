import React from "react";
import OwlCarousel from 'react-owl-carousel';

export const Testimonial = () => {

   return(

    <div className="site-section border-bottom">
    <div className="container">

      <div className="row justify-content-center mb-5">
        <div className="col-md-7 text-center border-primary">
          <h2 className="font-weight-light text-custom " data-aos="zoom-in">Testimonials</h2>
        </div>
      </div>



      <OwlCarousel className='owl-theme'
        autoPlay
        items={1}
        dots={true}
        loop={true}
      >

        <div className='item' data-aos="zoom-in-down">
          <div className="testimonial">
            <figure className="mb-4">
              <img src={require(`../images/Jorgecasañas.jpeg`)} alt="Image" className="img-fluid mb-3" />

            </figure>
            <blockquote>
              <p>&ldquo;Partnering with YDHM Logistic Corp. was a game-changer for our business. Their attention to detail in inventory management and seamless order fulfillment have significantly improved our operational efficiency. We value their commitment to excellence and look forward to a continued successful partnership.&rdquo;</p>
              <p className="author"> &mdash; Jorge Luis Casañas</p>
            </blockquote>
          </div>
        </div>
        <div className='item' data-aos="zoom-in-down">
          <div className="testimonial">
            <figure className="mb-4">
              <img src={require(`../images/Carloscuadra.jpeg`)} alt="Image" className="img-fluid mb-3" />

            </figure>
            <blockquote>
              <p>&ldquo;“YDHM Logistic Corp. goes above and beyond in delivering top-notch logistics services. Their dedication to customer satisfaction is evident in every interaction. The value-added services, including quality control and customized packaging, have set them apart as a trusted and reliable partner for our supply chain needs.&rdquo;</p>
              <p className="author"> &mdash; Carlos Cuadra</p>
            </blockquote>
          </div>
        </div>
        <div className='item' data-aos="zoom-in-down">
          <div className="testimonial">
            <figure className="mb-4">
              <img src={require(`../images/person_4.jpg`)} alt="Image" className="img-fluid mb-3" />
            </figure>
            <blockquote>
              <p>&ldquo;Efficiency, accuracy, and a true understanding of our industry – that's what YDHM Logistic Corp. brings to the table. Their use of advanced technology, such as Warehouse Management Systems, has revolutionized the way we manage our inventory. We are impressed with their commitment to innovation and the seamless experience they provide.&rdquo;</p>
              <p className="author"> &mdash; Ben Carson</p>
            </blockquote>
          </div>
        </div>
        {/*<div className='item' data-aos="zoom-in-down">
          <div className="testimonial">
            <figure className="mb-4">
              <img src={require(`../images/person_5.jpg`)} alt="Image" className="img-fluid mb-3" />
            </figure>
            <blockquote>
              <p>&ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.&rdquo;</p>
              <p className="author"> &mdash; Jed Smith</p>
            </blockquote>
          </div>
   </div>*/}
      </OwlCarousel>


    </div>
  </div>
   )

}
export default Testimonial;