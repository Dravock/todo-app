import React from 'react'
import styles from '../includes/css/loading.module.css'

const LoadingError = (props) => {

  const {text} = props

  const errorStyle = {
    width:'100vw',
    position: 'absolute',
    top: 'calc(40% - 40px)'
    // left: 'calc(50% - 40px)'
    // width: '90%'
  }

  return (
    <div className={styles.background}>
        <div style={errorStyle}>
              <div className={styles.text} dangerouslySetInnerHTML={{__html:text}} style={{color:'red',padding:'20px'}}></div>
        </div>     
    </div>
  )
}

export default LoadingError