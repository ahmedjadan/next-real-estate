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
