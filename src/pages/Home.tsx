import React from "react";
import { Divider } from "respectre/components";
import { Img } from "respectre/elements";
import { ReactComponent as GithubLogo } from "../images/github-logo.svg";
import { ReactComponent as GmailLogo } from "../images/gmail-logo.svg";
import { ReactComponent as LinkedinLogo } from "../images/linkedin-logo.svg";
import { ReactComponent as SkypeLogo } from "../images/skype-logo.svg";

const Home = () => (
  <>
    <div className="text-center p-2">
      <h1 className="mb-1">Jess Compacion</h1>
      <h5>Reactjs developer</h5>
      <div className="text-center">
        <a href="https://github.com/jagcompacion" className="d-inline-block">
          <GithubLogo className="p-1" width="42" height="42" />
        </a>
        <a
          href="mailto:jagcompacion@gmail.com?Subject=Hello%20again"
          className="d-inline-block"
        >
          <GmailLogo className="p-1" width="42" height="42" />
        </a>
        <a
          href="https://www.linkedin.com/in/jagcompacion/"
          className="d-inline-block"
        >
          <LinkedinLogo className="p-1" width="42" height="42" />
        </a>
        <a
          href="https://join.skype.com/invite/pikKVAdu7Je0"
          className="d-inline-block"
        >
          <SkypeLogo className="p-1" width="42" height="42" />
        </a>
      </div>
    </div>
    <Divider />
    <div className="p-2">
      <h3>I Build Things</h3>
      <p>I have created a few Web apps and React libraries.</p>
      <div className="mb-2">
        <a href="https://github.com/jagcompacion/respectre">Respectre</a> •
        React ui library using spectre.css.
      </div>
      <div className="mb-2">
        <a href="https://reitscreener.com">Reitscreener</a> • Investment
        portfolio through REITs.
      </div>
      <div className="mb-2">
        <a href="https://www.identifi.com/">Identifi</a> • A simple tool to
        schedule and run employee checkins.
      </div>
      <div className="mb-2">
        <a href="https://www.growtiger.com/">Growtiger</a> • Shopify plugin for
        social proof.
      </div>
    </div>
  </>
);

export default Home;
