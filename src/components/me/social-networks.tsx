import * as React from "react"
import { SocialIcon } from "react-social-icons"
import cvlogo from "../../../static/img/cv.png"
import cv from "../../../static/BerghallCV_EN.pdf"
import theme from "../../theme"

interface ISocialNetworks {
  networks: string[]
}

export default ({ networks }: ISocialNetworks) => (
  <ul
    style={{
      textAlign: "center",
      listStyleType: "none",
      margin: "40px 0 35px 0",
    }}
  >
    {networks.map(networkUrl => (
      <li
        key={networkUrl}
        style={{
          display: "inline-block",
          verticalAlign: "top",
          paddingRight: 5,
          paddingLeft: 5,
        }}
      >
        <SocialIcon
          style={{
            width: theme.networkButton.width,
            height: theme.networkButton.height,
          }}
          fgColor={theme.networkButton.color}
          bgColor={theme.networkButton.backgroundColor}
          target="_blank"
          url={networkUrl}
        />
      </li>
    ))}
    <li
      key="CV"
      style={{
        display: "inline-block",
        verticalAlign: "top",
        paddingRight: 5,
        paddingLeft: 5,
      }}
    >
      <a 
        href={cv}
        role="button"
      >
          <img 
            src={cvlogo} 
            role="presentation"
            alt=""
          />
      </a>
    </li>
  </ul>
)
