import * as React from "react"
import { StaticQuery, graphql } from "gatsby"
import Responsive from "react-responsive"
import { makeStyles } from '@material-ui/styles';

import Author from "../me/author"
import AboutButton from "../me/about-button"
import SocialNetworks from "../me/social-networks"
import CallToActionButton from "../me/calltoaction-button"
import theme from "../../theme"

const Mobile = props => <Responsive {...props} maxWidth={767} />
const Default = props => <Responsive {...props} minWidth={768} />

interface IDataProps {
  site: {
    siteMetadata: {
      author: {
        name: string
        image: string
        biography: string
      }
      networks: string[]
    }
  }
}
interface IIndexProps {
  data: IDataProps
  styles: {
    paddingTop: number
    paddingBottom: number
  }
  children: React.ReactNode
}

interface IHeaderArea {
  data: IDataProps
  styles: {
    paddingTop: number
    paddingBottom: number
  }
}

const useStyles = makeStyles(() => ({
  hero: {
    background: theme.index.header.background,
    backgroundSize: '150% 150%',
    animation: '$gradient 10s ease infinite'
  },
  '@keyframes gradient': {
    '0%': {
      'background-position': '0% 50%'
    },
    '50%': {
      'background-position': '100% 50%'
    },
    '100%': {
      'background-position': '0% 50%'
    }
  },
}));

const HeaderArea = ({ data, styles }: IHeaderArea) => {
  const classes = useStyles({});

  return (
    <div className={classes.hero}>
      <AboutButton />
      <div
        style={{
          paddingTop: styles.paddingTop,
          paddingBottom: styles.paddingBottom,
        }}
      >
        <Author author={data.site.siteMetadata.author} />
        <SocialNetworks networks={data.site.siteMetadata.networks} />
        <CallToActionButton />
      </div>
    </div>
  )
}

const ContentArea = ({ children }: { children: React.ReactNode }) => (
  <div
    id={"children"}
    style={{
      flexGrow: 1,
      margin: "0 auto",
      maxWidth: theme.index.layout.cardSectionMaxWidth,
      padding: 10,
      paddingTop: 10,
    }}
  >
    {children}
  </div>
)

const IndexLayout = ({ data, styles, children }: IIndexProps) => (
  <div style={{ backgroundColor: theme.index.layout.backgroundColor }}>
    <HeaderArea data={data} styles={styles} />
    <ContentArea children={children} />
  </div>
)

/*
      IndexLayoutWrapper
*/
export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            author {
              name
              image
              biography
            }
            networks
          }
        }
      }
    `}
    // tslint:disable-next-line:react-this-binding-issue
    render={(data: IDataProps) => (
      <>
        <Default>
          <IndexLayout
            data={data}
            styles={{ paddingTop: 75, paddingBottom: 75 }}
          >
            {children}
          </IndexLayout>
        </Default>
        <Mobile>
          <IndexLayout
            data={data}
            styles={{ paddingTop: 50, paddingBottom: 50 }}
          >
            {children}
          </IndexLayout>
        </Mobile>
      </>
    )}
  />
)
