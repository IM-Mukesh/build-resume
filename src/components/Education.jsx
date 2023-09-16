import React from "react";

const Education = () => {
  return (
    <div className="p-info-main">
      <h3 id="personal-heading">Education</h3>
      <hr />
      <div className="personal-content-area">
        <div className="single-fill">
          <label htmlFor="">Institute name*</label>
          <input type="text" required placeholder="Enter your institute name" />
        </div>

        <div className="date-area">
          <div className="date-col d1">
            <label htmlFor="">From*</label>
            <button>Date</button>
          </div>
          <div className="date-col">
            <label htmlFor="">To*</label>
            <button>Date</button>
          </div>
        </div>
        <div className="single-fill">
          <label htmlFor="">Degree*</label>
          <input type="text" placeholder="Your Degree" />
        </div>

        <div className="date-area">
          <div className="date-col d1">
            <label htmlFor="">Field of Study</label>
            {/* <button>Date</button> */}
            <input
              type="text"
              className="half-text-input"
              placeholder="ex. Computer Science"
            />
          </div>
          <div className="date-col">
            <label htmlFor="">Grade</label>
            {/* <button>Date</button> */}
            <input
              type="text"
              className="half-text-input"
              placeholder="ex. 7.5 or 75%"
            />
          </div>
        </div>
        <div className="single-fill">
          <label htmlFor="">Activities</label>
          <input
            type="text"
            placeholder="ex. Entrepreneurship, Racing, Band etc."
          />
        </div>
        <div className="single-fill">
          <label htmlFor="">Description</label>
          <textarea
            name=""
            id="text-area"
            cols="30"
            rows="10"
            placeholder="Describe your education in detail."
          ></textarea>
        </div>
        <div className="save-parent">
          <button id="save-btn">Save</button>
        </div>
      </div>
    </div>
  );
};

export default Education;
