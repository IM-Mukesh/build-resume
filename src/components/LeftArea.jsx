import React from "react";
import PersonalInfoIcon from "@mui/icons-material/Feed";
const LeftArea = () => {
  const data = [
    {
      name: "Personal Information",
      icon: PersonalInfoIcon,
    },
    // {
    //   name: "Personal Information",
    //   icon: PersonalInfoIcon,
    // },
    // {
    //   name: "Personal Information",
    //   icon: PersonalInfoIcon,
    // },
    // {
    //   name: "Personal Information",
    //   icon: PersonalInfoIcon,
    // },
    // {
    //   name: "Personal Information",
    //   icon: PersonalInfoIcon,
    // },
    // {
    //   name: "Personal Information",
    //   icon: PersonalInfoIcon,
    // },
    // {
    //   name: "Personal Information",
    //   icon: PersonalInfoIcon,
    // },
  ];
  return (
    <div className="left-part">
      {/* {data?.map((item, index) => {
        return <div>
           
        </div>;
      })} */}
      <div className="single-row">
        <PersonalInfoIcon />
        <h3>Personal Information</h3>
      </div>
      <div className="single-row">
        <PersonalInfoIcon />
        <h3>Education</h3>
      </div>
      <div className="single-row">
        <PersonalInfoIcon />
        <h3>Experience</h3>
      </div>
      <div className="single-row">
        <PersonalInfoIcon />
        <h3>Projects</h3>
      </div>
      <div className="single-row">
        <PersonalInfoIcon />
        <h3>Achievements</h3>
      </div>
      <div className="single-row">
        <PersonalInfoIcon />
        <h3>Skills</h3>
      </div>
      <div className="single-row">
        <PersonalInfoIcon />
        <h3>Summary</h3>
      </div>
    </div>
  );
};

export default LeftArea;
