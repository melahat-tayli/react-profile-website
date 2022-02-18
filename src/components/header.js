import { Container } from "./container";
import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <Container>
        <div className="navigation">
          <Link to="/">Melahat Tayli</Link>
          <Link to="/research" id="rightNav1">
            Research
          </Link>
          <Link to="/software" id="rightNav2">
            Software
          </Link>
        </div>
      </Container>
    </div>
  );
};
