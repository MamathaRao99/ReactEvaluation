import Input from "../input/Input";
import "../signInForm/signInForm.css";
import "../signUpForm/signUpForm.css";
import "../button/button.css";
import "../input/Input.css";
import { Link } from "react-router-dom";
import "./reusableForm.css";
import Button from "../button/Button";

const ReusableForm = (props: any) => {
  return (
    <div className="formBox">
      {props.type === "signUp" ? (
        <>
          <form className="signInBox">
            <p className="signUpHeading ">SIGN UP</p>
            <Input placeholder="Enter Mobile Number" />
            <div className="mpinLayout">
              <Input placeholder="Enter 4 Digit MPin" />
              <img
                src={require("../../assets/image/eye_on.png")}
                alt="eyeIcon"
                className="eyeOn"
              />
            </div>
            <div className="mpinLayout">
              <Input placeholder="Re-Enter 4 Digit MPin" />
              <img
                src={require("../../assets/image/eye_on.png")}
                alt="eyeIcon"
                className="eyeOn"
              />
            </div>
            <div className="bottombox">
              <Link to="/success">
                <Button value="SIGN UP" />
              </Link>
            </div>
          </form>
        </>
      ) : (
        <>
          <form className="signInBox">
            <p className="sign-in-to-your-acco">SIGN IN TO YOUR ACCOUNT</p>
            <Input placeholder="Mobile Number" />
            <div className="mpinLayout">
              <Input placeholder="MPin" minValue={4} maxValue={4} />
              <img
                src={require("../../assets/image/eye_on.png")}
                alt="eyeIcon"
                className="eyeOn"
              />
            </div>
            <div className="bottombox">
              <p className="forgotPassText">Forgot your password?</p>
              <div className="btnDiv">
                <Link to="/home">
                  <Button value="SIGN IN" />
                </Link>
              </div>
              <p className="sign-in-text">
                Don’t have a Account?
                <Link to="/signup" className="signUpLinkActive">
                  SIGNUP
                </Link>
              </p>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default ReusableForm;
