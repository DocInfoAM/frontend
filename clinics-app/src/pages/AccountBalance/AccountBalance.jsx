import { Link } from "react-router-dom";
import classes from "./AccountBalance.module.css";

const AccountBalance = () => {
  return (
    <div>
      <p>Account Balance page</p>
      <p><Link to="/topupaccountbalance">Пополнить баланс клиники</Link></p>
    </div>
  );
};

export default AccountBalance;
