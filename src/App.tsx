import './App.css';

import profileImage from '/me.jpg';

function App() {
  return (
    <>
      <div className="container">
        <div className="title">청강증</div>
        <div className="content">
          <div className="left">
            <img
              src={profileImage}
              className="profile-image"
              alt="프로필 이미지"
            />
          </div>
          <div className="right">
            <div className="name">심영인</div>
            <div className="description">
              <div className="birth">980915-1******</div>
              <div>지구환경과학부 16학번</div>
              <div>과목 : 프론트엔드</div>
              <div>취미 : 수영, 배드민턴, 테니스, 탁구, 등산</div>
              <div>포부 : 한 학기 동안 열심히 하겠습니다</div>
            </div>
            <div className="seal">2024.09.11. 세미나장</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
