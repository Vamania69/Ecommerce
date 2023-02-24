import React, { useState, useEffect } from "react";
import axios from "../utils/axiosInstance";
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

function Loginpage() {
  //setting user configuration on the page
  const userRef = useState();
  const errRef = useState();
  //states for the form
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sucess, setSucess] = useState(false);
  const [ErrMsg, setErrMsg] = useState("");
  const [loginRegister, setLoginRegister] = useState(true);

  //token storage
  useEffect(() => {
    if (!!localStorage.getItem("Token")) {
      setSucess(true);
    }
  }, []);

  //remove error msg when changed in the form
  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  //signout handler
  const removeHandler = () => {
    setSucess(false);
    localStorage.removeItem("Token");
    toast.success("User logged Out");
  };

  //find active tab login/register
  const [justifyActive, setJustifyActive] = useState("tab1");

  //
  const handleJustifyClick = (value) => {
    setJustifyActive(value);
    console.log(justifyActive);
    if (value === justifyActive) {
      setLoginRegister(true);
    } else {
      setJustifyActive(value);
      setLoginRegister(false);
    }
    // console.log(justifyActive);
    // if (value === justifyActive) {
    //   if (value === "tab1") {
    //     setLoginRegister(true);
    //   }
    // } else {
    //   setJustifyActive(value);
    //   console.log(justifyActive);
    //   setLoginRegister(false);
    //   console.log(loginRegister);
    // }
  };
  console.log(loginRegister);
  //submit handler
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      //request from api with logging details to server
      if (loginRegister) {
        console.log("sending to login");
        const login = await axios.post(
          "/auth/login",
          { userEmail: email, password: password },
          {}
        );
        setSucess(true);
        //setting the response token to local storage
        localStorage.setItem("Token", `${login.data.data.accessToken}`);
        console.log(login);
        if (login.data.code === 200) {
          toast.success("login sucessful");
        } else {
          toast.success(login.data.message);
        }
      }
      //registering the user
      else {
        console.log("sending to register");
        const login = await axios.post("/auth/register", {
          userEmail: email,
          password: password,
          role: "user",
        });
        // setSucess(true);
        console.log(setSucess);
        console.log(login.data);
        //setting the response token to local storage
        if (login.data.code === 200) {
          toast.success("User registered sucessfully");
        } else {
          toast.success(login.data.message);
        }
      }
      // console.log(login.data.data.accessToken)
      //if requst has some error
    } catch (error) {
      setErrMsg(error.response.data);
      console.log(error.response.data.message);
      console.log(ErrMsg);
      toast.success(error.response.data.message);
    }
  };
  return (
    <>
      {sucess ? (
        <section className="vh-100">
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col col-md-9 col-lg-7 col-xl-5">
                <div className="card">
                  <div className="card-body p-4">
                    <div className="d-flex text-black">
                      <div className="flex-shrink-0"></div>
                      <div className="flex-grow-1 ms-3">
                        <h5 className="mb-1">{email}</h5>
                        <p className="mb-2 pb-1">User</p>
                        <div className="d-flex justify-content-start rounded-3 p-2 mb-2">
                          <div>
                            <p className="small text-muted mb-1">Articles</p>
                            <p className="mb-0">41</p>
                          </div>
                          <div className="px-3">
                            <p className="small text-muted mb-1">Followers</p>
                            <p className="mb-0">976</p>
                          </div>
                          <div>
                            <p className="small text-muted mb-1">Rating</p>
                            <p className="mb-0">8.5</p>
                          </div>
                        </div>
                        <div className="d-flex pt-1">
                          <Link to="/ShoppingCart">
                            <button
                              type="button"
                              className="btn btn-outline-primary me-1 flex-grow-1"
                            >
                              View Cart
                            </button>
                          </Link>
                          <button
                            onClick={removeHandler}
                            type="button"
                            className="btn btn-primary flex-grow-1"
                          >
                            Logout
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
          <MDBTabs
            pills
            justify
            className="mb-3 d-flex flex-row justify-content-between"
          >
            <MDBTabsItem>
              <MDBTabsLink
                onClick={() => handleJustifyClick("tab1")}
                active={justifyActive === "tab1"}
              >
                Login
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink
                onClick={() => handleJustifyClick("tab2")}
                active={justifyActive === "tab2"}
              >
                Register
              </MDBTabsLink>
            </MDBTabsItem>
          </MDBTabs>

          <MDBTabsContent>
            <MDBTabsPane show={justifyActive === "tab1"}>
              <div className="text-center mb-3">
                <p>Sign in with:</p>

                <div
                  className="d-flex justify-content-between mx-auto"
                  style={{ width: "40%" }}
                >
                  <MDBBtn
                    tag="a"
                    color="none"
                    className="m-1"
                    style={{ color: "#1266f1" }}
                  >
                    <MDBIcon fab icon="facebook-f" size="sm" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="m-1"
                    style={{ color: "#1266f1" }}
                  >
                    <MDBIcon fab icon="twitter" size="sm" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="m-1"
                    style={{ color: "#1266f1" }}
                  >
                    <MDBIcon fab icon="google" size="sm" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="m-1"
                    style={{ color: "#1266f1" }}
                  >
                    <MDBIcon fab icon="github" size="sm" />
                  </MDBBtn>
                </div>

                <p className="text-center mt-3">or:</p>
              </div>
              {
                //setting error message if req falis
              }
              <div></div>
              {
                // setting input tag with all attributes
              }
              <form onSubmit={submitHandler}>
                <MDBInput
                  wrapperClass="mb-4"
                  label="Email address"
                  id="form1"
                  type="email"
                  autoComplete="off"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="form2"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                />

                <div className="d-flex justify-content-between mx-4 mb-4">
                  <MDBCheckbox
                    name="flexCheck"
                    value=""
                    id="flexCheckDefault"
                    label="Remember me"
                  />
                  <a href="!#">Forgot password?</a>
                </div>

                <MDBBtn className="mb-4 w-100">Sign in</MDBBtn>
              </form>

              <p className="text-center">
                Not a member? <a href="#!">Register</a>
              </p>
            </MDBTabsPane>

            <MDBTabsPane show={justifyActive === "tab2"}>
              <div className="text-center mb-3">
                <p>Sign un with:</p>

                <div
                  className="d-flex justify-content-between mx-auto"
                  style={{ width: "40%" }}
                >
                  <MDBBtn
                    tag="a"
                    color="none"
                    className="m-1"
                    style={{ color: "#1266f1" }}
                  >
                    <MDBIcon fab icon="facebook-f" size="sm" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="m-1"
                    style={{ color: "#1266f1" }}
                  >
                    <MDBIcon fab icon="twitter" size="sm" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="m-1"
                    style={{ color: "#1266f1" }}
                  >
                    <MDBIcon fab icon="google" size="sm" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="m-1"
                    style={{ color: "#1266f1" }}
                  >
                    <MDBIcon fab icon="github" size="sm" />
                  </MDBBtn>
                </div>

                <p className="text-center mt-3">or:</p>
              </div>
              {
                // register input file
              }

              <MDBInput
                wrapperClass="mb-4"
                label="Name"
                id="form1"
                type="text"
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Username"
                id="form1"
                type="text"
              />
              <MDBInput
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                wrapperClass="mb-4"
                label="Email"
                placeholder="enter email"
                id="form1"
                type="email"
              />
              <MDBInput
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                wrapperClass="mb-4"
                label="Password"
                id="form1"
                type="password"
              />

              <div className="d-flex justify-content-center mb-4">
                <MDBCheckbox
                  name="flexCheck"
                  id="flexCheckDefault"
                  label="I have read and agree to the terms"
                />
              </div>

              <MDBBtn className="mb-4 w-100" onClick={submitHandler}>
                Sign up
              </MDBBtn>
            </MDBTabsPane>
          </MDBTabsContent>
        </MDBContainer>
      )}
    </>
  );
}

export default Loginpage;
