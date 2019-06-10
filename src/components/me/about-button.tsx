import * as React from "react"
import { Link } from "gatsby"
import Button from "@material-ui/core/Button"
import theme from "../../theme"

export default () => (
  <div style={{ textAlign: "right" }}>
    <Link to={`/about/`} style={{ textDecoration: "none" }}>
      <Button
        variant="outlined"
        style={{
          marginRight: 30,
          marginTop: 30,
          color: theme.index.aboutButton.color,
          borderColor: theme.index.aboutButton.borderColor,
          backgroundColor: theme.index.aboutButton.backgroundColor,
          textTransform: "none",
          width: theme.index.aboutButton.width,
        }}
      >
        About
      </Button>
    </Link>
  </div>
)
