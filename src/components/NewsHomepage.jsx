import React from "react";
import "../style/NewsHomepage.css";
import { Layout, Menu } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import logo from "../img/NewsHomepageDesign/logo.svg";
const { Header, Content } = Layout;

const NewsHomepage = () => {
  const [navToggle, setToggle] = React.useState("");
  const [bodyToggle, setBodyToggle] = React.useState("");

  return (
    <Layout className={"layout"}>
      <Header className={"header"}>
        <div className={`${bodyToggle}`}></div>
        <div className="headerContent">
          <a href="">
            <img className={"logo"} src={logo} alt={"logo"} />
          </a>
          <div className={`menuContainer ${navToggle}`}>
            <div className={"buttonContainer"}>
              <button
                className={"navButton"}
                onClick={() => (
                  navToggle === "" ? setToggle("navOpen") : setToggle(""),
                  bodyToggle === ""
                    ? setBodyToggle("navActive")
                    : setBodyToggle("")
                )}
              >
                {navToggle === "" ? <MenuOutlined /> : <CloseOutlined />}
              </button>
            </div>
            <ul className={"menu"}>
              <li>
                <a href="#?">Home</a>
              </li>
              <li>
                <a href="#?">New</a>
              </li>
              <li>
                <a href="#?">Popular</a>
              </li>
              <li>
                <a href="#?">Trendings</a>
              </li>
              <li>
                <a href="#?">Categories</a>
              </li>
            </ul>
          </div>
        </div>
      </Header>
      <div className={"blockWrapper"}>
        <div className={"block1 blockItem"}>
          <img
            src={require("../img/NewsHomepageDesign/image-web-3-desktop.jpg")}
            alt=""
          />
        </div>
        <div className={"block2 blockItem"}>
          <h1>
            The Bright <br />
            Future of <br />
            Web 3.0?
          </h1>
        </div>
        <div className={"block3 blockItem"}>
          <p>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className={"readButton"}>READ MORE</button>
        </div>
        <div className={"block4 blockItem"}>
          <h2>New</h2>
          <a href="#?">
            <h3>Hydrogen VS Electric Cars</h3>
          </a>
          <span>Will hydrogen-fueled cars ever catch up to EVs?</span>
          <hr className="divider" />
          <a href="#?">
            <h3>The Downsides of AI Artistry</h3>
          </a>
          <span>
            What are the possible adverse effects of on-demand AI image
            generation?
          </span>
          <hr className="divider" />
          <a href="#?">
            <h3>Is VC Funding Drying Up?</h3>
          </a>
          <span>
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </span>
        </div>
        <div className={"block5 blockItem pContainer"}>
          <img
            src={require("../img/NewsHomepageDesign/image-gaming-growth.jpg")}
            alt=""
          />
          <div className="paragContainer">
            <h3>01</h3>
            <a>Reviving Retro PCs</a>
            <p>What happens when old PCs are given modern upgrades?</p>
          </div>
        </div>
        <div className={"block6 blockItem pContainer"}>
          <img
            src={require("../img/NewsHomepageDesign/image-retro-pcs.jpg")}
            alt=""
          />
          <div className="paragContainer">
            <h3>02</h3>
            <a>Top 10 Laptops of 2022</a>
            <p>Our best picks for various needs and budgets</p>
          </div>
        </div>
        <div className={"block7 blockItem pContainer"}>
          <img
            src={require("../img/NewsHomepageDesign/image-top-laptops.jpg")}
            alt=""
          />
          <div className="paragContainer">
            <h3>03</h3>
            <a>The Growth of Gaming</a>
            <p>How the pandemic has sparked fresh opportunities</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export { NewsHomepage };
