import React, { useRef } from 'react';
import "../css/course.css";
import 'boxicons';
import img1 from '../images/img1.png';
import img2 from '../images/img2.png';
import img3 from '../images/img3.png';
import img4 from '../images/img4.jpg';
import img5 from '../images/img5.png';
import img6 from '../images/img6.png';
import img7 from '../images/img7.png';
import img8 from '../images/img8.png';
import img9 from '../images/img9.png';
import img10 from '../images/img10.png';
import img11 from '../images/img11.jpg';
import img12 from '../images/img12.png';
import img13 from '../images/img13.png';
import img14 from '../images/img14.png';

const Course = () => {
  const scrollRef = useRef(null);

  const courseData = [
    { img: img1, title: "Goal Setting: Objectives and Key Results (OKRs)" },
    { img: img2, title: "Excel Essential Training" },
    { img: img3, title: "Interpersonal Communication" },
    { img: img4, title: "Growth Mindset" },
    { img: img5, title: "Critical Thinking with Questions" },
    { img: img6, title: "Team Collaboration" },
    { img: img7, title: "Unconscious Bias" },
    { img: img8, title: "Confident Communication" },
    { img: img9, title: "Effective Speaking" },
    { img: img10, title: "OWASP Top 10" },
    { img: img11, title: "Strategic Thinking" },
    { img: img12, title: "SQL Training" },
    { img: img13, title: "Agile Foundations" },
    { img: img14, title: "Critical Thinking" }
  ];

  const scroll = (direction) => {
    const { current } = scrollRef;
    const scrollAmount = current.offsetWidth; // scroll by container width (4 cards approx)
    current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth"
    });
  };

  return (
    <div className="course-container">
      <div className="matter">
        <h1>Popular Courses</h1>
        <p>
          Learn the most relevant skills with business, creative, and tech courses - <br />
          dozens of courses added each week.
        </p>
      </div>

      <div className="carousel-wrapper">
        <button className="arrow left" onClick={() => scroll("left")}><box-icon name='chevron-left'></box-icon></button>

        <div className="scroll-bar" ref={scrollRef}>
          {courseData.map((course, index) => (
            <div className="course-card" key={index}>
              <img src={course.img} alt={course.title} />
              <h3>{course.title}</h3>
            </div>
          ))}
        </div>

        <button className="arrow right" onClick={() => scroll("right")}><box-icon name='chevron-right'></box-icon></button>
      </div>
    </div>
  );
};

export default Course;
