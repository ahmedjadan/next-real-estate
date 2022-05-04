import ProductDetails from '@components/Product/ProductDetails';
import { getPropertyPath, getSingleProperty } from '@graphql/queries';
import Layout from '@layout/Layout';

export default function property({ property }) {
  const { name } = property.attributes;
  return (
    <Layout>
      <ProductDetails {...property} />
      <div>related properties</div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const propertyPath = await getPropertyPath();
  const paths = propertyPath?.data?.map((property) => ({
    params: {
      slug: property.attributes.slug,
    },
  }));

  return { paths, fallback: true };
}
export async function getStaticProps({ params }) {
  const property = await getSingleProperty(params.slug);

  return {
    props: {
      property: property.data[0] || null,
    },
  };
}
