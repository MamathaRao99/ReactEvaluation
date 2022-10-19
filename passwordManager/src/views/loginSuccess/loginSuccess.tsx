import "../loginScreen/loginScreen.css"
import "../../index.css"
import "./loginSuccess.css"
import LoginScreen from '../loginScreen/loginScreen'
import Toast from "../../components/toast/Toast"

const LoginSuccess = () => {
    return (
      <div>
        <Toast message="Congrats!!! Success, Signin to access the valut" />
        <LoginScreen />
      </div>
    );
}

export default LoginSuccess