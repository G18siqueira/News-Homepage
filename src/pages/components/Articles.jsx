import { Article } from './Utils';

import ArticleImage01 from '/public/assets/general/image-retro-pcs.jpg';
import ArticleImage02 from '/public/assets/general/image-top-laptops.jpg';
import ArticleImage03 from '/public/assets/general/image-gaming-growth.jpg';

import styles from './articles.module.scss';
import useAnimationScroll from './hooks/useAnimationScroll';
const Articles = () => {
	useAnimationScroll();
	return (
		<article className={`${styles.articles} `}>
			<div className={styles.content}>
				<Article
					className={`animation animation--from-left`}
					image={ArticleImage01}
					alt="article"
					number="01"
					title="Reviving Retro PCs"
					resume="What happens when old PCs are given modern upgrades?"
				/>
				<Article
					className={`animation animation--from-bottom`}
					image={ArticleImage02}
					alt="article"
					number="02"
					title="Top 10 Laptops of 2022"
					resume="Our best picks for various needs and budgets."
				/>
				<Article
					className={`animation animation--from-right`}
					image={ArticleImage03}
					alt="article"
					number="03"
					title="The Growth of Gaming"
					resume="How the pandemic has sparked fresh opportunities."
				/>
			</div>
		</article>
	);
};

export default Articles;
