import React, { Component } from "react";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import WalletOutlinedIcon from "@mui/icons-material/WalletOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

//add bootstrap links

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-2 col-md-3 col-sm-4 col-5 pl-3">
              <a className="navbar-brand" href="">
                <img
                  src="assests/images/logo.png"
                  alt="LNMBus"
                  height="90%"
                  width="90%"
                  className=" align-self-center"
                />
              </a>
            </div>
            <div className="col-xl-10 col-md-8 col-sm-8 offset-md-1 offset-xl-0 offset-xxl-0 col-7 mt-2 pr-3">
              <button
                className="navbar-toggler float-right"
                type="button "
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto ">
                  <li className="nav-item pt-2 ">
                    <a className="nav-link" href="#">
                      Home <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item pt-2 ">
                    <a className="nav-link" href="#">
                      View Schedule <span className="sr-only">(current)</span>
                    </a>
                  </li>

                  {!(
                    this.props.auth.user.role === "admin" ||
                    this.props.auth.user.role === "caretaker" ||
                    this.props.auth.user.role === "conductor"
                  ) ? (
                    <>
                      <li className="nav-item pt-2">
                        <a className="nav-link" href="#">
                          Request Bus <span className="sr-only">(current)</span>
                        </a>
                      </li>
                      <li className="nav-item dropdown pt-2">
                        <div
                          className="nav-link dropdown-toggle"
                          id="navbarDropdown"
                          data-toggle="dropdown"
                        >
                          Manage Booking
                        </div>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdown"
                        >
                          <a className="dropdown-item" href="#">
                            Book Ticket
                          </a>
                          <a className="dropdown-item" href="#">
                            Cancel Ticket
                          </a>
                          <a className="dropdown-item" href="#">
                            View Trips
                          </a>
                        </div>
                      </li>
                      <li className="nav-item pt-2">
                        <a className="nav-link" href="#">
                          <QrCodeScannerIcon /> QR-Code
                          <span className="sr-only">(current)</span>
                        </a>
                      </li>
                      <li className="nav-item pt-2">
                        <a className="nav-link" href="#">
                          <WalletOutlinedIcon /> Wallet
                          <span className="sr-only">(current)</span>
                        </a>
                      </li>
                    </>
                  ) : null}
                  {!this.props.auth.isAuthenticated ? (
                    <li>
                      <button
                        type="button"
                        class="btn btn-outline-secondary btn-lg pb-0 pt-0 mt-2 mx-2"
                      >
                        Login
                      </button>
                    </li>
                  ) : (
                    <li className="nav-item dropdown">
                      <div
                        className="nav-link dropdown-toggle"
                        id="navbarDropdown"
                        data-toggle="dropdown"
                      >
                        {/* When login is completed Icon Will be displayed */}
                        {this.props.auth.user.image === "" ? (
                          <>
                            <AccountCircleIcon fontSize="large" />{" "}
                            <span className="sr-only">(current)</span>
                          </>
                        ) : (
                          
                          <img src={this.props.auth.user.image} className=" mb-1 rounded-circle img-thumbnail" height="60rem" width="60rem" alt="user image" />
                        )}
                      </div>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <a className="dropdown-item" href="#">
                          Profile
                        </a>
                        <a className="dropdown-item" href="#">
                          Log Out
                        </a>
                      </div>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;

// add image icon of different users
