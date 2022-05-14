import Product from '@components/Product/Product';
import { getPropertiesType, getPropertyPath } from '@graphql/queries';
import Layout from '@layout/Layout';
import React from 'react';
import { useRouter } from 'next/router';
export default function Properties({ property }) {
  const router = useRouter();
  const { query } = router;
  return (
    <Layout>
      <div className="max-w-6xl mx-auto mt-16 mb-4">
        <h1 className="font-semibold text-2xl text-gray-700">
          {' '}
          Properties for {query.type}{' '}
        </h1>
      </div>
      <Product properties={property} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const propertyPath = await getPropertyPath();
  const paths = propertyPath?.data.map((property) => ({
    params: {
      type: property?.attributes.sale || null,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const property = await getPropertiesType(params.type);

  return {
    props: {
      property: property?.data || null,
    },
  };
}
