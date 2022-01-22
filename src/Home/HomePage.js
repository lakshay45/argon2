import React from "react";
import "./HomePage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faClone, faHome } from '@fortawesome/free-solid-svg-icons'
import avatar from "../images/avatar1.png";
import ListPage from "../ListPage/ListPage";

const HomePage=()=> {
  return (<>
        <div className='homeUpperLayout'>
            {/* <h1> Fetch data from an api in react </h1>  
             */}
            <div className="headbar">
                <div className="inputDiv">
                    <input type="search" className="search" placeholder="Search" />
                </div>
                <div className="profileIconDiv">
                    <div className="bellDiv">
                        <FontAwesomeIcon icon={faBell} color="white" />
                    </div>
                    <div className="cloneDiv">
                        <FontAwesomeIcon icon={faClone} color="white" />
                    </div>
                    <div className="avatarDiv">
                        <a href="#" class="anchor">
                            <img className="avatar" alt="placeholder" src={avatar} />
                            John Snow
                        </a>
                    </div>
                </div>
            </div>
            <div className="homeUpperBodyContent">
                <div className="headingDiv">
                    <h3 className="heading">Tables</h3>
                </div>
                <div className="tableButton">
                    <button class="buttonPrimary" style={{padding:"10px 10px",borderRadius:"5px",fontSize:"16px"}} type="button">
                        <FontAwesomeIcon icon={faHome} color="#5e72e4" /> / Tables<span style={{color:"gray"}}> / Tables</span>
                    </button>
                </div>
                <div className="grpButtons">
                    <button style={{marginRight:"1vw"}} class="buttonPrimary" type="button">New</button>
                    <button class="buttonPrimary" type="button">Filters</button>
                </div>
            </div>
        </div>
        <div className='homeLowerLayout'>
        </div>
        <ListPage />
        </>
  );
}

export default HomePage;
