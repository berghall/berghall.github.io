import * as React from 'react';
import Helmet from 'react-helmet';
import { graphql } from "gatsby"

interface ISEOProps {
  data: {
    site: {
      siteMetadata: {
        title: string
        about: string
      }
    }
  }
  pageName: string
}

const SEO: React.FunctionComponent<ISEOProps> = ({ data, pageName }) => {

  const node = data.site.siteMetadata
  
  return (
    <Helmet>
      <html lang='en' />
      <title>{`${pageName} |  ${node.title}`}</title>
      <meta name='description' content={node.about} />
    </Helmet>
  );
}

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

export default SEO;