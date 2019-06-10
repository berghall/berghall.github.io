import * as React from "react"
import { graphql, navigate } from "gatsby"

import Card from "@material-ui/core/Card"

import Responsive from "react-responsive"
import FabButton from "../components/shared/FabButton"
import SocialNetworks from "../components/me/social-networks"

import theme from "../theme"
import SEO from "../components/shared/Seo";

const Mobile = props => <Responsive {...props} maxWidth={767} />
const Default = props => <Responsive {...props} minWidth={768} />

const ContentArea = ({ data }: any) => (
  <Card style={{ padding: 50, flexGrow: 1 }}>
    <h1
      style={{
        marginTop: 0,
        marginLeft: 30,
        marginRight: 30,
        textAlign: "center",
      }}
    >
      404 Not Found
    </h1>
  </Card>
)

const HeaderArea = () => {
  const goBack = () => navigate("/")

  return <FabButton onClickHandler={goBack} />
}

export default ({ data }: any) => (
  <>
    <SEO pageName="404 Not Found" data={data}/>
    <Default>
      <div
        style={{
          backgroundColor: theme.aboutPage.layout.backgroundColor,
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            maxWidth: theme.aboutPage.layout.cardMaxWidth,
            margin: "0 auto",
            paddingTop: 40,
            paddingLeft: 20,
            paddingRight: 20,
            paddingBottom: 40,
          }}
        >
          <HeaderArea />
          <ContentArea data={data} />
        </div>
      </div>
    </Default>
    <Mobile>
      <HeaderArea />
      <ContentArea data={data} />
    </Mobile>
  </>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        about
      }
    }
  }
`
