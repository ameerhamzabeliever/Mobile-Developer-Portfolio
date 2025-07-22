import React from "react";
import "./Blog.scss";
import {blogSection} from "../../portfolio";
import {Fade} from "react-reveal";

export default function Blogs() {
  if (!blogSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      {/* Blogs section is disabled */}
    </Fade>
  );
}
