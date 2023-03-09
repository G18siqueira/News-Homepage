import Link from 'next/link';
import Image from 'next/image';

import styles from './utils.module.scss';

export const Post = ({ title, resume }) => {
	return (
		<Link href="/#" aria-label="post" className={styles.post}>
			<h2>{title}</h2>
			<p>{resume}</p>
		</Link>
	);
};

export const Article = ({ className, image, alt, number, title, resume }) => {
	return (
		<Link
			href="/#"
			aria-label="article"
			className={`${styles.article} ${className}`}
		>
			<div className={styles.image}>
				<Image src={image} alt={alt} />
			</div>
			<div className={styles.infos}>
				<h2>{number}</h2>
				<h3>{title}</h3>
				<p>{resume}</p>
			</div>
		</Link>
	);
};
