import "../loginScreen/loginScreen.css";
import "../../index.css";
import "./loginScreen.css";
import ReusableForm from "../../components/reusableForm/reusableForm";
import Lock from "../../components/lock/Lock";
import Separator from "../../components/separator/separator";

const LoginScreen = () => {
  return (
    <div className="loginContainer">
      <div className="loginBox">
        <Lock />
        <Separator/>
        <ReusableForm />
      </div>
    </div>
  );
};

export default LoginScreen;
