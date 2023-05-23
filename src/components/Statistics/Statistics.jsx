import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export const Statistics = ({ stats, title }) => {

//     const getRandomHexColor = () => {
//     const letters = '0123456789ABCDEF';
//     let backgroundColor = '#';
//     for (let i = 0; i < 6; i++){
//        backgroundColor += letters [Math.floor(Math.random() * 16)];
//     }
//     return backgroundColor;
// };

  return (
    <section className={s.statistics}>
      <h2 className={s.title}>{title}</h2>

      <ul className={s.statList}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li className={s.item} key={id}>
              <span className={s.label}>{label}</span>
              <span className={s.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.prototype = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
  title: PropTypes.string.isRequired,
};
