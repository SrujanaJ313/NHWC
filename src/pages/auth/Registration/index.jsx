import React from "react";
import CustomerProfile from "./customerProfile";
import ContactInformation from "./contactInformation";

function Registration() {
  return (
    <>
      <h1>Registration</h1>
      <div>
        <CustomerProfile />
        <ContactInformation />
      </div>
    </>
  );
}

export default Registration;
