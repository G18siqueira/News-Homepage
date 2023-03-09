import Post from './ui/Post';
import styles from './posts.module.scss';
import useAnimationScroll from './hooks/useAnimationScroll';

const Posts = () => {
	useAnimationScroll();

	return (
		<aside className={`${styles.posts} animation animation--from-top`}>
			<div className={styles.content}>
				<h1>New</h1>

				<div className={styles.postContent}>
					<Post
						title="Hydrogen VS Electric Cars "
						resume="Will hydrogen-fueled cars ever catch up to EVs?"
					/>
					<Post
						title="The Downsides of AI Artistry"
						resume="What are the possible adverse effects of on-demand AI image generation?"
					/>
					<Post
						title=" Is VC Funding Drying Up?"
						resume="Private funding by VC firms is down 50% YOY. We take a look at what that means."
					/>
				</div>
			</div>
		</aside>
	);
};

export default Posts;
