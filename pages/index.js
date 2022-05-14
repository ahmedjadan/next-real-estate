import Banner from '@components/Banner/Banner';
import FeatureList from '@components/Features/FeatureList';
import Product from '@components/Product/Product';
import { getProperties, getPropertiesType } from '@graphql/queries';
import Layout from '@layout/Layout';

export default function Home({ properties, propertiesType }) {
  console.log('Home ~ propertiesType', propertiesType);

  return (
    <Layout>
      <Banner properties={properties} />
      <FeatureList />
      <Product properties={properties} />
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const propertyType = await getPropertiesType('sale');
  const page = 1;
  const pageSize = 20;
  const property = await getProperties(page, pageSize);

  return {
    props: { properties: property?.data, propertiesType: propertyType?.data },
  };
}
