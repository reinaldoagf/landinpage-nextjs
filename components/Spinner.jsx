import React from 'react';
import styles from '../styles/Spinner.module.css';

const ArticleItem = ({ article }) => {
	return (
		<div className={styles.lds}><div></div><div></div><div></div><div></div></div>
	);
}

export default ArticleItem;
