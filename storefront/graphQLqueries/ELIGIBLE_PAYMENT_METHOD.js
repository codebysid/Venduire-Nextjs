import { gql } from "@apollo/client";

export const ELIGIBLE_PAYMENT_PAYMENT=gql`
query GetPaymentMethods{
    eligiblePaymentMethods {
      id
      name
      code
      description
      isEligible
      eligibilityMessage
    }
  }
  `