import PropTypes from 'prop-types';
import s from './Transaction.module.css';

export const TransactionItem = ({ type, amount, currency }) => {
  return (
    <>
      <tr className={s.deskRow}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    </>
  );
};
TransactionItem.prototype = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};