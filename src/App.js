import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import SignInUI from "./Components/SignIn/SignIn";
import SignUpUI from "./Components/SignUp/SignUp";
import "./index.css";
import OTPUI from "./Components/OTP/Otp";
import SignatureUI from "./Components/Signature/Signature";

function App() {
  const [signedUp, setSignedUp] = React.useState(false);

  return (
    <div className="bg-[#10B981]">
      <div style={{ height: "200px" }}></div>
      <Routes>
        <Route
          path="/signup"
          element={<SignUpUI setSignedUp={setSignedUp} />}
        />
        <Route path="/signin" element={<SignInUI signedUp={signedUp} />} />
        <Route path="/otp" element={<OTPUI />} />
        <Route path="/signature" element={<SignatureUI />} />
      </Routes>
      <div style={{ height: "198px" }}></div>
    </div>
  );
}

export default App;
