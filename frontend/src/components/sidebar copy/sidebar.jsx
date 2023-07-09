import "./sidebar.scss";
import AdjustIcon from '@mui/icons-material/Adjust';
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  


  return (
    <div className="sidebar">
      <div className="top">
        
          <span className="logo">Course Name</span>
        
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MODULE 1</p>
          <li>
            <AdjustIcon className="icon" />
            <span>Chapter 1</span>
          </li>
          <p className="title">MODULE 2</p>
        
            <li>
              <AdjustIcon className="icon" />
              <span>Chapter 1</span>
            </li>
         
            <li>
              <AdjustIcon className="icon" />
              <span>Chapter 2</span>
            </li>
         
          <li>
            <AdjustIcon className="icon" />
            <span>Chapter 3</span>
          </li>
          <li>
            <AdjustIcon className="icon" />
            <span>Chapter 4</span>
          </li>
          <p className="title">MODULE 3</p>
          <li>
            <AdjustIcon className="icon" />
            <span>Chapter 1</span>
          </li>
          <li>
            <AdjustIcon className="icon" />
            <span>Chapter 1</span>
          </li>
          <p className="title">MODULE 4</p>
          <li>
            <AdjustIcon className="icon" />
            <span>Chapter 1</span>
          </li>
          <li>
            <AdjustIcon className="icon" />
            <span>Chapter 1</span>
          </li>
          <li>
            <AdjustIcon className="icon" />
            <span>Chapter 1</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AdjustIcon className="icon" />
            <span>Chapter 1</span>
          </li>
          <li>
            <AdjustIcon className="icon" />
            <span>Back to Course Page</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
