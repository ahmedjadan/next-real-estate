import Layout from '@layout/Layout';
import useSWR from 'swr';
import request from 'graphql-request';

import React, { useState } from 'react';
import { useRouter } from 'next/router';
import ProductCard from '@components/Cards/ProductCard';

const fetcher = (query, variables) => {
  return request(
    `https://real-estate-next-app.herokuapp.com/graphql`,
    query,
    variables
  );
};
export default function Search() {
  const router = useRouter();
  const { query } = router;
  const { purpose, type, price } = query;
  const variables = { purpose, type, price };

  const { data, error } = useSWR(
    [
      `
      query getPropertySearch($type: String!, $price: String, $purpose: String!) {
        properties(
          filters: {
            type: { contains: $type }
            price: { contains: $price }
            sale: { contains: $purpose }
          }
        ) {
          data {
            attributes {
              name
              price
              beds
              rooms
              price
              bathrooms
              type
              area
              address
              sale
              slug
              createdAt
              updatedAt
              description
              display
              cover {
                data {
                  attributes {
                    url
                    size
                  }
                }
              }
            }
          }
        }
      }    
      `,
      variables,
    ],
    fetcher
  );
  if (!data)
    return (
      <Layout>
        {' '}
        <div className="text-indigo-500 animate-bounce font-semibold text-xl max-w-5xl mx-auto text-center">
          loading...
        </div>{' '}
      </Layout>
    );
  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        <div className="mt-4 px-4">
          <h1 className="font-semibold text-2xl text-gray-700">
            Search Results Found {data?.properties?.data.length}{' '}
          </h1>
        </div>
        <div className=" grid  px-4 md:px-1 grid-cols-1 md:grid-cols-3 sm:grid-cols-2  gap-4 my-8 md:my-16">
          {data?.properties?.data.map((property, idx) => (
            <ProductCard {...property} key={idx} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
