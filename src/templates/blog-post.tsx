import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layouts/blog-post-layout"
import { FluidObject } from "gatsby-image"
import SEO from "../components/shared/Seo";

interface IBlogPost {
  data: {
    site: {
      siteMetadata: {
        title: string
        about: string
      }
    }
    markdownRemark: {
      html: string
      frontmatter: {
        title: string
        tags: string[]
        cover: {
          childImageSharp: {
            fluid: FluidObject
          }
        }
      }
    }
  }
}

export default ({ data }: IBlogPost) => {
  const node = data.markdownRemark
  const cover =
    node.frontmatter.cover && node.frontmatter.cover.childImageSharp
      ? node.frontmatter.cover.childImageSharp.fluid
      : null

  return (
    <>
      <SEO pageName={node.frontmatter.title} />
      <Layout title={node.frontmatter.title} cover={cover} tags={node.frontmatter.tags}>
        {
          // tslint:disable:react-no-dangerous-html
          <div dangerouslySetInnerHTML={{ __html: node.html }} />
          // tslint:enable:react-no-dangerous-html
        }
      </Layout>
    </>
  )
}

export const query = graphql`
  query($slug: String!, $coverImageMaxWidth: Int!) {
    site {
      siteMetadata {
        title
        about
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        tags
        cover {
          childImageSharp {
            ... on ImageSharp {
              fluid(maxWidth: $coverImageMaxWidth) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`
