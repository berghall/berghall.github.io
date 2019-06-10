import * as React from "react"
import Button from "@material-ui/core/Button"
import theme from "../../theme"

export default ({ onClickHandler }) => (
  <div style={{ textAlign: "center" }}>
    <Button
      onClick={onClickHandler}
      style={{
        color: theme.blogPost.showMoreButton.color,
        borderColor: theme.blogPost.showMoreButton.borderColor,
        borderWidth: 1,
        borderStyle: "solid",
        backgroundColor: theme.blogPost.showMoreButton.backgroundColor,
        textTransform: "none",
        width: theme.blogPost.showMoreButton.width,
      }}
    >
      Load More
    </Button>
  </div>
)
