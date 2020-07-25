import React from "react";
import Slider from "../Animation/Slider";

const Home = () => {
  return (
    <div className="div_home">
      <Slider />
      <div className="div_text">
        <div
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          // data-aos-delay="300"
          data-aos-offset="0"
          className="div_text_para"
          data-aos-duration="1000"
        >
          <h3>Mainstreaming Hidden Voices Since 1967.</h3>
          <p>
            Films d’art is an independent production company specializing in
            documentary film making. Our focus is on human rights, women’s
            rights and social development.
          </p>
        </div>
      </div>
      <div className="div_image">
        <div className="div-total_image2">
          <div
            data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="3000"
            className="div_box_image1"
          >
            <img src="/images/finished1.jpg" alt="image" className="tag_img" />
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="3000"
            className="div_box_image1"
          >
            <img src="/images/giphy-2.gif" alt="image" className="tag_img" />
          </div>
        </div>
        <div className="div-total_image2">
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="div_box_image2"
          >
            <img src="/images/giphy-1.gif" alt="image" className="tag_img_2" />
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="div_box_image2"
          >
            <img src="/images/noor.jpg" alt="image" className="tag_img_2" />
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="div_box_image2"
          >
            <img src="/images/giphy.gif" alt="image" className="tag_img_2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
