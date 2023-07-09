import kidsFootball from '../css/about.webp';
import '../css/About.css'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import QuizIcon from '@mui/icons-material/Quiz';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
function About() {
  return (
    <div className="About" >
      <div className='aboutTop' style={{ backgroundImage: `url(${kidsFootball})` }}>
      </div>
      <div className='aboutBottom'>
        <div className='tagline'>
          <h3><i>Coaching you to help you coach better</i></h3>
        </div>
        <br></br>
        <div className='aboutus'>
          <h3>About us</h3>
          <p>
            We understand the pivotal role coaches play in shaping the future of athletes and strive to empower you to unlock your athletes' full potential. With our user-friendly interface, comprehensive features, and a vibrant community of coaches, we offer a cohesive platform that streamlines your coaching process, fosters continuous learning, and ensures a safe and trusted environment.
          </p>
          <br></br>
        </div>
        <div className='mission'>
          <h3>Our Mission</h3>
          <p>At Football Club, our mission is to promote and develop football at all levels. Whether you are a player, a coach, or a fan, we strive to provide you with a platform to connect, learn, and grow within the football community.</p>
        </div>
        <div >
          <br></br>
          <h3 >Our Values</h3>

          <p>
            <div>
              <b>Inclusivity:</b> We embrace diversity and welcome individuals from all backgrounds to be a part of our football family.
            </div> <div>
              <b>Respect:</b> We promote respect for the game, the opponents, and the officials, both on and off the field.
            </div> <div>
              <b>Growth:</b> We are committed to continuous learning and improvement, both individually and as a collective.
            </div> <div>
              <b>Community:</b> We foster a sense of belonging and camaraderie among our members, building lasting friendships along the way.
            </div>
          </p>

        </div>
        <div className="card">
          <MenuBookIcon className="cardIcon" />
          <p>Get courses tailored to you</p>
        </div>

        <div className="card">
          <QuizIcon className="cardIcon" />
          <p>Evaluate your learning after each module</p>
        </div>

        <div className="card">
          <OndemandVideoIcon className="cardIcon" />
          <p>Live interactions with our instructors</p>
        </div>

        <div className="card">
          <CardMembershipIcon className="cardIcon" />
          <p>Earn certifications</p>
        </div>
      </div>
    </div>
  );
};
export default About;