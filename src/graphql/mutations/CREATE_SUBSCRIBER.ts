import { gql } from "@apollo/client";

export const CREATE_SUBSCRIBER = gql`
  mutation createSubscriber($name: String!, $email: String!) {
    createSubscriber(data: { name: $name, email: $email }) {
      id
    }
  }
`;
