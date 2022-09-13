import React from 'react'
import { getRandomRGB } from 'utilities/getRandomColor'
import styles from './Statistics.module.css'
import PropTypes from 'prop-types';


const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>Upload stats</h2>}

      <ul className={styles['stat-list']}>
        {stats.map(item => (
          <li style={{ backgroundColor: getRandomRGB() }} key={item.id} className={styles.item}>
            <span className={styles.label}>{item.label}</span>
            <span className={styles.percentage}>{item.percentage} %</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
}

export default Statistics