import React from "react";
import { CgProfile } from "react-icons/cg";
import { SlUserFemale } from "react-icons/sl";
import { SlUser } from "react-icons/sl";

const UserGender = ({ gender }) => {
  let genderIcon;
  if (gender === "Male") {
    genderIcon = <SlUser size={88} />;
  } else if (gender === "Female") {
    genderIcon = <SlUserFemale size={88} />;
  } else {
    genderIcon = <CgProfile size={88} />;
  }
  return <div className="gender-icon"> {genderIcon}</div>;
};

export default UserGender;
