import { gql } from '@apollo/client';

export const QUERY_POLLS = gql`
query polls {
    polls {
      _id
      title
      description
      value
      option1
      option2
    }
  }
`;
export const QUERY_USER = gql`
query Query($username: String!) {
  user(username: $username) {
    eggplants
  }
}
`;

export const QUERY_USER_by_id = gql`
query Query($userId: String!) {
  user(id: $userId) {
    eggplants
    _id
  }
}
`;

export const QUERY_ME = gql`
query Query {
  me {
    eggplants
    polls {
      title
      description
      value
      option1
      option2
    }
  }
}
`;


// export const QUERY_MATCHUPS = gql`
//   query matchups($_id: String) {
//     matchups(_id: $_id) {
//       _id
//       tech1
//       tech2
//       true_votes
//       false_votes
//     }
//   }
// `;

// import { useMutation, gql } from '@apollo/client';

// const UPDATE_USER_EGGPLANT_COUNT = gql`
//   mutation UpdateUserEggplantCount($userId: ID!, $eggplantCount: Int!) {
//     updateUser(userId: $userId, eggplantCount: $eggplantCount) {
//       eggplantCount
//     }
//   }
// `;