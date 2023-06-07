import { Routes, Route, Link } from 'react-router-dom';
import Signup from "./Components/Signup/Signup";
import Signin from "./Components/SignIn/Signin";
import "./App.css";
import ConfirmationPage from "./Components/ConfirmationPage/ConfirmationPage";
import NewPassword from './Components/Signup/NewPassword';
import AdditionalInfo from "./Components/Signup/AdditionalInfo";
import ResetPassword from "./Components/ResetPassword/ResetPassword";

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
          <Route path="/newPassword" element={<NewPassword />} />
          <Route path="/additionalInfo" element={<AdditionalInfo />} />
          <Route path="/resetPassword" element={<ResetPassword />} />




        </Routes>
      </main>
    </div>
  );
}

export default App;
