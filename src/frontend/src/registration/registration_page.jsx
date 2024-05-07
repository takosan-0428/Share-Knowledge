// registration_page.jsx
import React from "react";
import RegistrationForm from "./registration_form";

import '../login/login.css';

const RegistrationPage = () => {
  return (
    <div className="login_main">
      <h2>アカウント登録</h2>
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;
