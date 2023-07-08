import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Sportisfy</span>
        <span className="headerTitleLg">Welcome</span>
      </div>
      <img
        className="headerImg"
        src="https://img.freepik.com/free-photo/young-basketball-player-team-wearing-sportwear-training-practicing-action-motion-run-isolated-white-wall-concept-sport-movement-energy-dynamic-healthy-lifestyle_155003-28548.jpg?w=1800&t=st=1688834431~exp=1688835031~hmac=819ae4e342f75ca546a4f34d876e0d7b0074e273a527617f0effea8b47708433"
        alt=""
      />
    </div>
  );
}
