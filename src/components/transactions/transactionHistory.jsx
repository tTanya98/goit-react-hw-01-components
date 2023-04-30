import PropTypes from 'prop-types';
import sty from './transaction.css';

export const TransactionHistory = ({ transactions }) => {
  return (
    <table className={sty.transactionHistory}>
      <thead className={sty.head}>
        <tr>
          <th className={sty.th}>Type</th>
          <th className={sty.th}>Amount</th>
          <th className={sty.th}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(({ id, type, amount, currency }) => {
          return (
            <tr className={sty.tr} key={id}>
              <td
                className={sty.td}
                style={{
                  textTransform: 'capitalize',
                  color: '#818181',
                }}
              >
                {type}
              </td>
              <td
                className={sty.td}
                style={{
                  color: '#818181',
                }}
              >
                {amount}
              </td>
              <td
                className={sty.td}
                style={{
                  color: '#818181',
                }}
              >
                {currency}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};