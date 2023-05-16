import { gql } from "@apollo/client";

export const UPDATE_STATE_MUTATION=gql`
mutation($state:String!){
    transitionOrderToState(state: $state) {
      ...on Order{
        id
      }
      ...on OrderStateTransitionError{
        errorCode
        message
      }
    }
  }`