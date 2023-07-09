import Sidebar from "../rightbar/rightbar";
import "../course_id.css";
import Video from "../../components/Video/chart";
import QA from "../../components/QA/QA";

const Course = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
       
        <div className="widgets">
        
        </div>
        <div className="charts">
          
          <Video title="Cours" />
        </div>
        <div className="listContainer">
          <div className="listTitle">Q&A</div>
          <QA />
        </div>
      </div>
    </div>
  );
};

export default Course;
