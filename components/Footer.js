import footerStyles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <ul>
        <li>About</li>&nbsp;.&nbsp;
        <li>Help</li>&nbsp;.&nbsp;
        <li>Press</li>&nbsp;.&nbsp;
        <li>API</li>&nbsp;.&nbsp;
        <li>Jobs</li>&nbsp;.&nbsp;
        <li>Privacy</li>&nbsp;.&nbsp;
        <li>Terms</li>&nbsp;.&nbsp;
        <li>Locations</li>&nbsp;.&nbsp;
        <li>Language</li>&nbsp;.&nbsp;
        <li>Meta Verified</li>
      </ul>
      <p>&copy; 2023 INSTAGRAM META</p>
    </footer>
  );
};

export default Footer;
