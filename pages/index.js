import Banner from '@components/Banner/Banner';
import ProductCard from '@components/Cards/ProductCard';
import FeatureList from '@components/Features/FeatureList';
import Product from '@components/Product/Product';
import { getProperties } from '@graphql/queries';
import Layout from '@layout/Layout';
import Navigation from '../components/Header/Navigation';

export default function Home({ properties }) {
  console.log('Home ~ properties', properties);

  return (
    <Layout>
      <Banner/>
      <FeatureList />
      <Product properties={properties} />
    </Layout>
  );
}

export async function getStaticProps() {
  const page = 1;
  const pageSize = 20;
  const property = await getProperties(page, pageSize);

  return {
    props: { properties: property.data },
  };
}
