import React from "react";
import Logo from "../../ui/logo/logo";
import ShareButtons from "../../blocks/share-buttons/share-buttons";
import "./style.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main social">
        <Logo />
        <ShareButtons />
      </div>
      <a href="/" className="footer__popup-link">Политика обработки персональных данных</a>
      <p className="footer__copyright">© Гросс маркет 2020</p>
    </footer>
  );
}

export default Footer;