import "./dashBoard.css";
import { useState } from "react";

const DashBoard = () => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="homePageContainer">
      <div className="Content">
        <div className="leftTab">
          <div className="homeTabDiv">
            <img
              src={require("../../assets/image/burger_menu.png")}
              alt="menuIcon"
              className="menuIcon"
            />
          </div>
          <div className="homeTabDiv">
            <div className="orangeTab"></div>
            <img
              src={require("../../assets/image/home_icn.png")}
              alt="home"
              className="homeIcon"
            />
            <div className="orangeOval">
              <img src={require("../../assets/image/Oval.png")} alt="" />
            </div>
          </div>
        </div>
        <div className="content">
          <div className="headerContent">
            <div className="logo">
              <img
                src={require("../../assets/image/pass_logo.png")}
                alt="passwordManagerIcon"
                className="passwordManagerlogo"
              />
            </div>
            <div className="twoIcon">
              <img
                src={require("../../assets/image/sync.png")}
                alt="sync"
                className="iconBar"
              />
              <img
                src={require("../../assets/image/profile.png")}
                alt="profile"
                className="iconBar"
              />
            </div>
          </div>

          <div className="mainContent">
            <div className="titleAndSearch">
              <div className="titleLeftSide">
                <div className="sitesHeading">
                  <p className="sitesP">Sites</p>
                  <div className="orangeUnderline"></div>
                </div>
                <div className="subHead">
                  <div className="subHeadTitle">Social Media</div>
                  <div className="counter">0</div>
                  <div className="dropdown">
                    <img
                      src={require("../../assets/image/Path Copy.png")}
                      alt="dropdown"
                      className="dropdownIcon"
                    />
                  </div>
                </div>
              </div>
              <div className="titleRightSide">
                <div className="searchBar">
                  <input
                    type="text"
                    placeholder="Search"
                    className="searchBarInput"
                  />
                  <img
                    src={require("../../assets/image/search.png")}
                    alt="searchIcon"
                    className="searchIcon"
                  />
                </div>
                <img
                  src={require("../../assets/image/add_btn.png")}
                  alt="addIcon"
                  className="addIcon"
                  onClick={toggleModal}
                />
              </div>
            </div>

            <div className="vaultWindow">
              <div className="addSite">
                <p>Please Click on the “+” symbol to add sites</p>
              </div>
              {modal && (
                <div className="overlaymodal">
                  <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                      <p className="add-site">Add Site</p>
                      <div className="urlBox">
                        <p className="url">URL</p>
                        <input type="text" className="urlInput" />
                      </div>
                      <div className="siteSectorBox">
                        <div className="siteNameBox">
                          <p className="siteNameText">Site Name</p>
                          <input type="text" className="siteNameContainer" />
                        </div>
                        <div className="siteNameBox">
                          <p className="siteNameText">Sector/Folder</p>
                          <input type="text" className="siteNameContainer" />
                        </div>
                      </div>
                      <div className="UserSiteBox">
                        <div className="siteNameBox">
                          <p className="siteNameText">User Name</p>
                          <input type="text" className="siteNameContainer" />
                        </div>
                        <div className="siteNameBox">
                          <p className="siteNameText">Site Password</p>
                          <input type="text" className="siteNameContainer" />
                        </div>
                      </div>

                      <div className="noteBox">
                        <p className="noteText">Notes</p>
                        <input type="text" className="noteContainer "></input>
                      </div>
                      <div className="buttons">
                        <button className="btn-background">
                          <span className="resetText">Reset</span>
                        </button>
                        <button className="saveBtn">
                          <span className="saveText">Save</span>
                        </button>
                      </div>
                      <button className="close-modal" onClick={toggleModal}>
                        CLOSE
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
