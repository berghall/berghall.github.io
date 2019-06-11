import * as React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from "gatsby"

interface ISEOProps {
  pageName: string
}
interface ISEOPropsWithData extends ISEOProps {
  data: {
    site: {
      siteMetadata: {
        title: string
        about: string
      }
    }
  }
}

const HelmetContainer: React.FunctionComponent<ISEOPropsWithData> = ({ pageName, data }) => {
  return (
    <Helmet>
      <html lang='en' />
      <title>{`${pageName} |  ${data.site.siteMetadata.title}`}</title>
      <meta name='description' content={data.site.siteMetadata.about} />
    </Helmet>
  )
}

export default ({pageName}, props: ISEOProps) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
            about
          }
        }
      }
    `}
    // tslint:disable-next-line
    render={(data) => <HelmetContainer data={data} pageName={pageName}/>}
  />
)