import PropTypes from 'prop-types';
import { TransactionItem } from './TransactionItem';
import s from './Transaction.module.css';
export const TransactionHistory = ({ items }) => {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr className={s.transactionDeskHead}>
          <th className={s.headItem}>Type</th>
          <th className={s.headItem}>Amount</th>
          <th className={s.headItem}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => {
          return <TransactionItem key={item.id} {...item} />;
        })}
      </tbody>
    </table>
  );
};
TransactionHistory.prototype = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
    })
  ),
};