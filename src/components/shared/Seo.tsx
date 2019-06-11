import * as React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from "gatsby"

interface ISEOProps {
  pageName: string
}

export default ({ pageName }: ISEOProps) => (
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
    render={data => (
      <Helmet>
        <html lang='en' />
        <title>{`${pageName} |  ${data.site.siteMetadata.title}`}</title>
        <meta name='description' content={data.site.siteMetadata.about} />
      </Helmet>
    )}
  />
)