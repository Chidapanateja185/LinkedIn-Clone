import React from 'react'
import "../css/plans.css"
import icon1 from "../images/icon1.png"
import icon2 from "../images/icon2.png"
import icon3 from "../images/icon3.png"


const Plans = () => {
  return (
    <div>
      <div className="container">
        <div className="box1">
            <h1>Pick your plan</h1>
            <p>Never stop learning with unlimited access to our library.</p>
        </div>
        <div className="box2">
            <div className="stack">

                <div className="icon-item">
                    <img src={icon2} alt="Individual" />
                    <h1>For individuals</h1>
                    <p>1 learning account</p>
                    <button>Start free Month</button>
                </div>
        
                <div className="theory">
                    <p>✓ Unlimited access to our vast learning library <br /> with personalized recommendations</p>
                    <p>✓ AI-powered search, career coaching, and <br /> role play</p>
                    <p>✓ Professional Certificates offered by LinkedIn <br /> and trusted providers like Adobe, Microsoft,<br /> and more</p>
                    <p>✓ Preparation and practice exams for<br /> certifications from Microsoft, Atlassian, AWS,<br /> and more</p>
                    <p>✓ Continuing education units for major fields <br /> like accounting, project management, and<br /> more</p>
                    <p>✓ Hands-on practice like Code Challenges<br /> powered by Coderpad</p>
                </div>

                <button className="trailbtn">Start free Month</button>
                
            </div>

            <div className="stack">
                <div className="icon-item">
                    <img src={icon3} alt="Teams" />
                    <h1>For Teams</h1>
                    <p>Up to 20 learning accounts</p>
                    <button>Start free Month</button>
                </div>
                <div className="theory">
                    <p>✓ Everything included in the individuals plan, plus:</p>
                    <p>✓ Administrative functionality to manage 20 licenses across your team</p>
                    <p>✓ Basic insights dashboard to see team learning progress</p>
                </div>
                <button className="trailbtn">Start free Month</button>
            </div>

            <div className="stack">
                <div className="icon-item">
                    <img src={icon1} alt="Teams" />
                    <h1>For organizations</h1>
                    <p>21 or more learning accounts</p>
                    <button>Contact Sales</button>
                </div>
                <div className="theory">
                    <p>✓ Everything included in the individuals plan, plus:</p>
                    <p>✓ Administrative functionality to manage organization-wide learning</p>
                    <p>✓ Ability to upload custom content</p>
                    <p>✓ LXP & LMS integrations</p>
                    <p>✓ Role guides, career pathing, and learning plans personalized for every employee, custom to your organization's talent architecture</p>
                    <p>✓ Integrated internal job board and ability to signal interest for internal recruiters*
                    *requires a LinkedIn Hire subscription</p>
                    <p>✓ Rich insights dashboard for executive-level reporting on skill building, career growth, internal mobility, and AI-powered coach usage</p>
                </div>
                <button className="trailbtn">Contact Sales</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Plans
