import Link from 'next/link';

import styles from './post.module.scss';

const Post = ({ title, resume }) => {
	return (
		<Link href="/#" aria-label="post" className={styles.post}>
			<h2>{title}</h2>
			<p>{resume}</p>
		</Link>
	);
};

export default Post;
