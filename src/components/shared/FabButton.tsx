import * as React from "react"
import Fab from "@material-ui/core/Fab"
import ArrowBackIcon from "@material-ui/icons/ArrowBack"
import theme from "../../theme"

const FabButton = ({ onClickHandler }: { onClickHandler: () => void }) => (
  <Fab
    style={{
      position: "absolute" as any,
      marginTop: 20,
      marginLeft: 20,
      zIndex: 50,
      color: theme.fabButton.color || "#059ce2",
      backgroundColor: theme.fabButton.backgroundColor || "white",
    }}
    aria-label="Back"
    onClick={onClickHandler}
  >
    <ArrowBackIcon />
  </Fab>
)

export default FabButton
