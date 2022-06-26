import { gql } from "@apollo/client";

export const GET_FIRST_LESSON = gql`
  query GetFirstLesson {
    lessons(first: 1) {
      slug
    }
  }
`;
