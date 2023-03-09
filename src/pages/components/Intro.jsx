import Image from 'next/image';

import BannerImage from '/public/assets/general/image-web-3-desktop.jpg';
import BannerImageMob from '/public/assets/general/image-web-3-mobile.jpg';

import styles from './intro.module.scss';
import Button from './ui/Button';
import useAnimationScroll from './hooks/useAnimationScroll';
const Intro = () => {
	useAnimationScroll();

	return (
		<section className={styles.intro}>
			<div className={styles.content}>
				<div
					className={`${styles.banner} animation animation--from-left`}
				>
					<picture>
						<source
							media="(max-width: 768px)"
							srcSet={BannerImageMob}
						/>
						<source
							media="(min-width: 769px)"
							srcSet={BannerImage}
						/>
						<Image src={BannerImage} alt="banner" />
					</picture>
				</div>
				<div className={styles.introInfos}>
					<h1 className={`animation animation--from-right`}>
						The Bright Future of Web 3.0?{' '}
					</h1>
					<div className={styles.infos}>
						<p className={`animation animation--from-bottom`}>
							We dive into the next evolution of the web that
							claims to put the power of the platforms back into
							the hands of the people. But is it really fulfilling
							its promise?
						</p>
						<div className={`animation animation--zoomOut`}>
							<Button>Read more</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Intro;
