import * as React from "react"
import Image, { FluidObject } from "gatsby-image"
import { navigate } from "gatsby"
import Card from "@material-ui/core/Card"
import Chip from "@material-ui/core/Chip"
import Responsive from "react-responsive"

import theme from "../../theme"
import FabButton from "../shared/FabButton"
import Chips from "../shared/Chips"

const Mobile = props => <Responsive {...props} maxWidth={767} />
const Default = props => <Responsive {...props} minWidth={768} />

interface IContentAreaProps {
  children: React.ReactNode
  title: string
  tags: string[]
}

interface IHeaderArea {
  cover: FluidObject
}

interface IBlogPostLayout {
  children: React.ReactNode
  title: string
  cover: FluidObject
  tags: string[]
}

const ContentArea = ({ title, children, tags }: IContentAreaProps) => (
  <>
    <Default>
      <Card style={{ padding: 50 }}>
        <h1 style={{ marginBottom: 30, marginTop: 0, textAlign: "center" }}>
          {title}
        </h1>
        <Chips labels={tags} justify="center"/>
        {children}
      </Card>
    </Default>
    <Mobile>
      <Card style={{ padding: 15 }}>
        <h1
          style={{
            textAlign: "center",
          }}
        >
          {title}
        </h1>
        <Chips labels={tags} justify="center"/>
        {children}
      </Card>
    </Mobile>
  </>
)

const HeaderArea = ({ cover }: IHeaderArea) => {
  const goBack = () => navigate("/")

  return (
    <>
      <FabButton onClickHandler={goBack} />
      <div style={{ height: "auto", width: "auto" }}>
        {cover ? <Image fluid={cover} /> : null}
      </div>
    </>
  )
}

export default ({ title, cover, tags, children }: IBlogPostLayout) => {
  return (
    <div style={{ backgroundColor: theme.blogPost.layout.backgroundColor }}>
      <Default>
        <div
          style={{
            maxWidth: theme.blogPost.layout.cardMaxWidth,
            margin: "0 auto",
            paddingTop: 40,
            paddingLeft: 20,
            paddingRight: 20,
            paddingBottom: 40,
          }}
        >
          <HeaderArea cover={cover} />
          <ContentArea title={title} tags={tags}>{children}</ContentArea>
        </div>
      </Default>
      <Mobile>
        <HeaderArea cover={cover} />
        <ContentArea title={title} tags={tags}>{children}</ContentArea>
      </Mobile>
    </div>
  )
}
