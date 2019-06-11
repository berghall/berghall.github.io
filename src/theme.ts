const primary: string = "#f7931e"
const secondary: string = "#ed1e79"
const theme = {
  blogPost: {
    layout: {
      cardMaxWidth: 1000,
      backgroundColor: "#eeeeee",
    },
    showMoreButton: {
      color: primary,
      borderColor: "#059ce2",
      backgroundColor: "none",
      width: 130,
    },
  },
  blogListElement: {
    avatar: {
      color: "none",
      backgroundColor: "#059ce2",
    },
  },
  index: {
    layout: {
      cardSectionMaxWidth: 800,
      backgroundColor: "#eeeeee",
    },
    header: {
      background: `linear-gradient(20deg, ${primary}, ${secondary})`,
    },
    aboutButton: {
      color: "white",
      borderColor: "white",
      backgroundColor: "none",
      width: 100,
    },
  },
  author: {
    avatar: {
      width: 200,
      height: 200,
    },
    title: {
      color: "white",
      fontSize: 30,
    },
    desc: {
      color: "white",
      fontSize: 20,
      maxWidth: 500,
    },
  },
  callToActionButton: {
    width: 25,
    height: 25,
  },
  fabButton: {
    color: primary,
    backgroundColor: "white",
  },
  networkButton: {
    color: "white",
    backgroundColor: "#333",
    width: 45,
    height: 45,
  },
  aboutPage: {
    layout: {
      cardMaxWidth: 800,
      backgroundColor: "#eeeeee",
    },
  },
}

export {
  primary,
  secondary
}
export default theme
