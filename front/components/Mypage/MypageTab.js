import React, { useCallback, useState } from 'react'
import styles from './MypageTabs.module.css'
import { MypageTabWrapper } from './mypageStyles'

const MypageTab = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label)
  const handleClick = useCallback((e, newActiveTab) => {
    e.preventDefault()
    setActiveTab(newActiveTab)
  })

  return (
    <div>
      <ul className={styles.tabs}>
        {children.map(tab => {
          const label = tab.props.label
          return (
            <li
              onClick={e => handleClick(e, label)}
              className={label === activeTab ? styles.current : ''}
              key={label}
            >
              <p>{label}</p>
            </li>
          )
        })}
      </ul>

      {children.map(one => {
        if (one.props.label === activeTab)
          return (
            <div key={one.props.label} className={styles.content}>
              {one.props.children}
            </div>
          )
      })}
    </div>
  )
}

export default MypageTab
