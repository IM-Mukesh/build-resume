import React from "react";

const PersonalInformation = () => {
  return (
    <div className="p-info-main">
      <h3 id="personal-heading">Personal information</h3>
      <hr />
      <div className="personal-content-area">
        <div className="single-fill">
          <label htmlFor="">Name*</label>
          <input type="text" required placeholder="Enter your name" />
        </div>
        <div className="single-fill">
          <label htmlFor="">Email</label>
          <input type="text" placeholder="Enter your Email" />
        </div>
        <div className="single-fill">
          <label htmlFor="">Phone number</label>
          <input type="text" placeholder="Enter your Phone number" />
        </div>
        <div className="single-fill">
          <label htmlFor="">Website link</label>
          <input type="text" placeholder="https://" />
        </div>
        <div className="single-fill">
          <label htmlFor="">City</label>
          <input type="text" placeholder="Enter your City" />
        </div>
        <div className="save-parent">
          <button id="save-btn">Save</button>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
