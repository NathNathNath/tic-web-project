const SA = "SA"; // Super Administrator
const MA = "MA"; // Merchant Administrator;
const BA = "BA"; // Branch Administrator;
const BM = "BA"; // Branch Manager;
const WA = "WA"; // Waiter;
const UA = "UA"; // User;

function search(str1: any, str2: string) {
  return String(str1).includes(str2);
}

export default { SA, MA, BA, BM, WA, UA, search };
