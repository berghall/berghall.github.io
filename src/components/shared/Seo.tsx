import * as React from 'react';
import Helmet from 'react-helmet';

interface ISEOProps {
  title: string
  pageName: string
  description: string
}
const SEO: React.FunctionComponent<ISEOProps> = ({ pageName, description, title }) => (
  <Helmet>
    <html lang='en' />
    <title>{`${pageName} |  ${title}`}</title>
    <meta name='description' content={description} />
  </Helmet>
);

export default SEO;