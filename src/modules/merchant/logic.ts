
import {
    email,
  } from "react-admin";

  // Generate Merchant ID
const generateMerchantID = () => {var _ranValue = Math.floor(Math.random() *90000) + 10000; return _ranValue; }

  // Validate Email
const validateEmail = () => { return email();} 

export default{
    generateMerchantID,
    validateEmail
}

