import React,{useRef}from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonials = () => {

  const slider = useRef();
  let tx = 0;
  const slideForward=()=>{
    if(tx > -50){
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`

    
  }
  const slideBackward=()=>{

  }
  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward}/>
      <img src={back_icon} alt="" className="back-btn" onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" srcset="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>EduNexus,UK</span>
                </div>
              </div>
              <p>
                I personally love the old historic campus vibes with few modern
                buildings and facilities. I loved the library and the recent
                improvements with group study space, cafe and museums. Student
                life is easy and smooth with a lot of support from AUSA and the
                university.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" srcset="" />
                <div>
                  <h3>Jyothi Basapathi Raghavendra</h3>
                  <span>EduNexus,UK</span>
                </div>
              </div>
              <p>
                {" "}
                As a PhD student, I believe inter-school collaborations and
                working principles needs to be improved. I found it really hard
                to work or access facilities in another school when needed. Also
                the prices in the Union and food quality could be improved.
                Prefer some more healthier options and price concessions.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" srcset="" />
                <div>
                  <h3>Charlotte Doig</h3>
                  <span>EduNexus,UK</span>
                </div>
              </div>
              <p>
                Studying Archaeology at Aberdeen was the best decision I’ve ever
                made, I love the department and work so much I’m staying on for
                a masters. The lecturers have been generous with their time and
                expertise, and have supported me at every stage of my learning.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" srcset="" />
                <div>
                  <h3>Jessica Courtney</h3>
                  <span>EduNexus,UK</span>
                </div>
              </div>
              <p>
                I have been offered so much support throughout my time at university, I am a mature student and parent and I have found the university of Portsmouth to be very inclusive and welcoming.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
