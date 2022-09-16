import React from 'react'
import { getRandomRGB } from 'utilities/getRandomColor'
import styles from './Statistics.module.css'
import PropTypes from 'prop-types';


const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>Upload stats</h2>}

      <ul className={styles['stat-list']}>
        {stats.map(({ id, label, percentage }) => (
          <li style={{ backgroundColor: getRandomRGB() }} key={id} className={styles.item}>
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage} %</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number
    })
  ).isRequired
}

export default Statistics