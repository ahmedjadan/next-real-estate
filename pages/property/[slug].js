import ProductCard from '@components/Cards/ProductCard';
import ProductDetails from '@components/Product/ProductDetails';
import {
  getProperties,
  getPropertyPath,
  getSingleProperty,
} from '@graphql/queries';
import Layout from '@layout/Layout';
export default function property({ property, related }) {
  const currentProperty = property.attributes;
  const relatedProperty = related
    ?.map((property, i) => property)
    .filter(
      (p) =>
        p.attributes.type === currentProperty.type &&
        p.attributes.sale === currentProperty.sale &&
        currentProperty.slug !== p.attributes.slug
    )
    .slice(0, 2);

  //better to create custom query for related properties with pagination
  return (
    <Layout>
      <ProductDetails {...property} />
      <div className=" max-w-6xl mx-auto my-6 md:my-16">
        <h2 className="text-xl my-4 px-4 md:px-2 lg:px-0 text-gray-700 font-semibold ">
          Related Properties
        </h2>
        <div className="grid max-w-6xl mx-auto  px-4 md:px-1 grid-cols-1 md:grid-cols-3 sm:grid-cols-2  gap-4">
          {relatedProperty.map((property, idx) => (
            <ProductCard {...property} key={idx} />
          ))}
        </div>
      </div>
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
  const page = 1;
  const pageSize = 20;
  const property = await getSingleProperty(params.slug);
  const related = await getProperties(page, pageSize);

  return {
    props: {
      property: property.data[0] || null,
      related: related?.data,
    },
  };
}
