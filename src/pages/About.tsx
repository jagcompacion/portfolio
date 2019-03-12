import React from "react";
import { Link } from "react-router-dom";

const About = () => (
  <>
    <h1 className="mt-2">About me</h1>
    <div className="mb-2">The content for this page isn't ready yet.</div>
    <div>
      You gotta make do with <Link to="/">Home</Link> for now.
    </div>
  </>
);

export default About;
