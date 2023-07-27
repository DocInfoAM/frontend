import { Link } from "react-router-dom";

const AccountBalance = () => {
  return (
    <div>
      <h2>Account Balance page</h2>
      <p><Link to="/top-up-account-balance">Пополнить баланс клиники</Link></p>
    </div>
  );
};

export default AccountBalance;
