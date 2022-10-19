import Lock from "../../components/lock/Lock";
import "../loginScreen/loginScreen.css";
import "../../index.css";
import ReusableForm from "../../components/reusableForm/reusableForm";
import "./signUpScreen.css";
import Separator from "../../components/separator/separator";

const SignUpScreen = () => {
  return (
    <div className="signUpContainer">
      <div className="loginBox">
        <Lock />
        <Separator/>
        <ReusableForm type="signUp" />
      </div>
    </div>
  );
};

export default SignUpScreen;
