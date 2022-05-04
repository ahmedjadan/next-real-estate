import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_STRAPI_ENDPOINT;

export const getProperties = async (page, pageSize) => {
  const query = gql`
    query getProperty($page: Int!, $pageSize: Int!) {
      properties(pagination: { page: $page, pageSize: $pageSize }) {
        data {
          attributes {
            name
            price
            display
            slug
            type
            area
            sale
            beds
            rooms
            bathrooms
            description
            cover {
              data {
                attributes {
                  url
                  size
                }
              }
            }
            agent {
              data {
                attributes {
                  name
                }
              }
            }
          }
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query, { page, pageSize });

  return result.properties;
};

export const getSingleProperty = async (slug) => {
  const query = gql`
    query getSingleProperty($slug: String!) {
      properties(filters: { slug: { eq: $slug } }) {
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
            agent {
              data {
                attributes {
                  name
                }
              }
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });
  return result.properties;
};

export const getPropertyPath = async () => {
  const query = gql`
    query getPropertyPath {
      properties {
        data {
          attributes {
            slug
          }
        }
      }
    }
  `;
  const reslut = await request(graphqlAPI, query);
  return reslut.properties;
};
