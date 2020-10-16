import React from "react";
import MenuItems from "../menu-item";
import styles from './directory.module.scss';

const Directory = ({data = []}) => {

  const renderData = items => items.length !== 0
    ? items.map(item => <MenuItems key={item.id} {...item}/>)
    : <span>no items found</span>;

  return <div className={styles["directory-menu"]}>
    {renderData(data)}
  </div>
}
    


export default Directory;