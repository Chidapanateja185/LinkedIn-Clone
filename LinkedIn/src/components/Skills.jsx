import React from 'react';
import "../css/skills.css"
import pic1 from "../images/pic1.jpg";

const Skills = () => {
  return (
    <div>
        <div className="container1">
            <div className="para1">
                <h1>Develop skills that move careers & <br /> businesses forward</h1>
                <p>The only skills development platform built on insights from 1 billion <br /> professionals on LinkedIn.</p>
                <div className="buttons">
                    <button className="btn1">Explore plans</button>
                    <button className="btn2">Buy for my team</button>
                </div>
            </div>
            <div className="picture">
                <img src={pic1} alt='Pic' />
            </div>
        </div>

        <div className="container2">
            <div className="item">
                <h1>Develop critical skills</h1>
                <p>with content & experiences as dynamic as the world we live in</p>
            </div>
            <div className="item">
                <h1>Get career guidance</h1>
                <p>at scale with insights from 1 billion careers on LinkedIn</p>
            </div>
            <div className="item">
                <h1>Measure impact</h1>
                <p>on personal career growth or business priorities</p>
            </div>
        </div>

    </div>
  );
};

export default Skills;
