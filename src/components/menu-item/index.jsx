import React from 'react';
import styles from './menu-items.module.scss';
import { withRouter } from 'react-router-dom';

const MenuItems = ({ title, subtitle = "Shop Now", imageUrl, linkUrl, history, match }) => (
	<div className={styles["menu-item"]} onClick={() => history.push(`${match.url}${linkUrl}`)}>
		<div className={styles["bg-image"]} style={{ backgroundImage: `url(${imageUrl})`}}></div>
		<div className={styles["content"]}>
			<h1 className={styles["title"]}>{title}</h1>
			<span className={styles["subtitle"]}>{subtitle}</span>
		</div>
	</div>
)


export default withRouter(MenuItems);
