import React from "react";

const Experience = () => {
  return (
    <div className="p-info-main">
      <h3 id="personal-heading">Experience</h3>
      <hr />
      <div className="personal-content-area">
        <div className="single-fill">
          <label htmlFor="">Company name*</label>
          <input type="text" required placeholder="Enter Company name" />
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

        <div className="date-area">
          <div className="date-col d1">
            <label htmlFor="">Title*</label>
            {/* <button>Date</button> */}
            <input
              type="text"
              className="half-text-input"
              placeholder="Enter Job Title"
            />
          </div>
          <div className="date-col">
            <label htmlFor="">Employment Type</label>
            {/* <button>Date</button> */}
            <select name="cars" id="emp-type">
              <option value="Full time">Full time</option>
              <option value="Part time">Part time</option>
              <option value="Self employed">Self employed</option>
              <option value="Freelance">Freelance</option>
              <option value="Internship">Internship</option>
            </select>
          </div>
        </div>

        <div className="single-fill">
          <label htmlFor="">Description</label>
          <textarea
            name=""
            id="text-area"
            cols="30"
            rows="10"
            placeholder="Describe your experience in detail."
          ></textarea>
        </div>
        <div className="save-parent">
          <button id="save-btn">Save</button>
        </div>
      </div>
    </div>
  );
};

export default Experience;
