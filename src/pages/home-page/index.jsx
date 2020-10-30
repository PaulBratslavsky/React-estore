import React from 'react'
import Directory from '../../components/directory'
import styles from './home-page.module.scss'
import { connect } from 'react-redux'
import { selectDirectoryItems } from '../../redux/directory/directory.selector'
import { createStructuredSelector } from 'reselect'

function HomePage({menu = []}) {
    return <div className={styles["homepage"]}>
      <Directory data={menu} />
    </div>
}

const mapStateToProps = createStructuredSelector({
  menu: selectDirectoryItems
})

export default connect(mapStateToProps)(HomePage)
