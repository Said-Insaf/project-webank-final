import { Route, Switch, Redirect } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { current } from "./JS/actions/user";
import Errors from "./pages/Errors/Errors";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Profile from "./pages/Profile/Profile";
import AccountList from "./pages/AccountList/AccountList";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import LandPage from "./pages/HomePage/LandPage";
import PrivateRoute from "./router/PrivateRoute";
import PreverifUsers from "./pages/PreverifUsers/PreverifUsers";
import VerifUsers from "./pages/VerifUsers/VerifUsers";
import Create from "./pages/CreateAccount/Create";
import ZoomUser from "./Components/ZoomUser/ZoomUser";
import SignUpAgent from "./pages/SignUpAgent/SignUpAgent";
import AgentList from "./pages/AgentList/AgentList";
import Depot from "./pages/Depot/Depot";
import Retrait from "./pages/Retrait/Retrait";
import Virement from "./pages/Virement/Virement";
import Consulting from "./pages/Consulting/Consulting";
import NavbarOpt from "./Components/NavbarOperations/NavBarOpt";
import NewCptUser from "./pages/NewCptUser/NewCptUser";
import ConsultationSldBank from "./pages/ConsultationSldParBank/ConsultationSldBank";
import HistoComptes from "./pages/HistoComptes/HistoComptes";
import MyHistorique from "./pages/MyHistoriques/MyHistorique";
import "./App.css";
// import ConsultationSldBank from "./pages/ConsultationSldBank/ConsultationSldBank"

function App() {
  const dispatch = useDispatch();
  const userNow = useSelector((state) => state.userReducer.user);
  useEffect(() => {
    dispatch(current());
  }, []);
  return (
    <div className="App">
      <div>
      <Navbar />
      <NavbarOpt />
      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/home" component={LandPage} />

        {/* <Route path="/error" component={Errors} />
        <Redirect from="/" to="/error" /> */}

        {userNow.role && userNow.role !== "user" ? (
          <>
            <PrivateRoute path="/profile" component={Profile} />
            <Route path="/consulter" component={Consulting} />

            <Route path="/ajoutCompte/:id" component={VerifUsers} />
            <Route path="/depot" component={Depot} />
            <Route path="/dashOperations" component={NavbarOpt} />
            <Route path="/accounts" component={AccountList} />
            <Route path="/newCompte/:id" component={NewCptUser} />
            <Route path="/newBankAgent" component={SignUpAgent} />
            {userNow.role === "admin" ? (
              <Route path="/allAgents" component={AgentList} />
            ) : (
              <></>
            )}
            <Route path="/ZoomUser/:id" component={ZoomUser} />
            <Route path="/preverified" component={PreverifUsers} />
            <Route path="/retrait" component={Retrait} />
            <Route path="/csltUser" component={ConsultationSldBank} />
            <Route path="/histoUser" component={HistoComptes} />
            <Route path="/virements" component={Virement} />

            <Route path={["/add", "/edit"]} component={Create} />
          </>
        ) : (
          <>
            <PrivateRoute path="/profile" component={Profile} />
            <Route path="/consulter" component={Consulting} />
            <Route path="/myhistorique" component={MyHistorique} />
            {/* <Redirect from="*" to="/error" /> */}
          </>
        )}
      </Switch>
      </div>
      {/*<Switch> <Route path="/error" component={Errors} /></Switch> */}

      <Footer />
    </div>
  );
}

export default App;
