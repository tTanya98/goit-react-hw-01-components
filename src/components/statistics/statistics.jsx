import PropTypes from 'prop-types';
import sty from './stat-styles.css';

const colors = ['#984ED0', '#CDD25A', '#FDB05E', '#0475ED', '#F02C6E'];

export const Statistics = ({ title, stats }) => {
  return (
    <section className={sty.statistics}>
      {title && <h2 className={sty.title}>{title}</h2>}

      <ul className={sty.list}>
        {stats.map(({ id, label, percentage }, index) => (
          <li className={sty.item} key={id} style={{ background: colors[index] }}>
            <span className={sty.label}>{label}</span>
            <span className={sty.percentage}>{percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};