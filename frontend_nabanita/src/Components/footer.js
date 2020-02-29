import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer
        className="conatiner d-flex justify-content-center"
        style={{
          backgroundColor: `#f8f9fA`,
          paddingTop: 15 + `px`
        }}
      >
        <p>
          <strong>&copy; DC KGEC 2020 </strong>| All Rights Reserved
        </p>
      </footer>
    );
  }
}

export default Footer;
