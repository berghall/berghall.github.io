import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layouts/index-layout"
import BlogList from "../components/blog-list/blog-list"
import Seo from "../components/shared/Seo";
import { FluidObject } from "gatsby-image"

interface IProps {
  data: {
    site: {
      siteMetadata: {
        title: string
        about: string
      }
    }
    allMarkdownRemark: {
      totalCount: number
      tags: string[]
      edges: {
        node: {
          id: string
          frontmatter: {
            title: string
            date: string
            tags: string[]
            description: string
            cover: {
              childImageSharp: {
                fluid: FluidObject
              }
            }
            fields: {
              slug: string
            }
            excerpt: string
          }
        }
      }[]
    }
  }
}

class Index extends React.Component<IProps> {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges.map(
      (e: any) => e.node
    )
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    const tags = this.props.data.allMarkdownRemark.tags
    const meta = this.props.data;

    return (
      <Layout>
        <Seo pageName='Home' />
        <BlogList posts={posts} tags={tags} totalCount={totalCount} />
      </Layout>
    )
  }
}

export default Index

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        about
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            tags
            description
            cover {
              childImageSharp {
                ... on ImageSharp {
                  fluid(maxWidth: 800, maxHeight: 400) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
