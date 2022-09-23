import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="tmp"></div>
      <div className="logo">Language-Exchange-Voice</div>
      <div className="hamburger">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="contents">
        <div className="language-class">언어클래스</div>
        <button className="login-button">로그인</button>
        <button className="join-button">회원가입</button>
      </div>
    </div>
  );
}

export default Header;
