import { useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import LogoImage from '/public/assets/logo.svg';

import { HiBars3, HiOutlineXMark } from 'react-icons/hi2';

import styles from './header.module.scss';
import useAnimationScroll from '../hooks/useAnimationScroll';
const Header = () => {
	useAnimationScroll();

	const [toggle, setToggle] = useState(false);

	const handleClick = () => {
		setToggle(!toggle);
	};

	const navVisible = toggle ? styles.navShow : styles.navHide;

	return (
		<header className={`${styles.header} `}>
			<div
				className={`container ${styles.container} animation animation--from-right`}
			>
				<div className={styles.logo}>
					<Image src={LogoImage} alt="logo" />
				</div>
				<nav className={navVisible}>
					<Link
						href="/#"
						aria-label="Home"
						onClick={() => setToggle(false)}
					>
						Home
					</Link>
					<Link
						href="/#"
						aria-label="New"
						onClick={() => setToggle(false)}
					>
						New
					</Link>
					<Link
						href="/#"
						aria-label="Popular"
						onClick={() => setToggle(false)}
					>
						Popular
					</Link>
					<Link
						href="/#"
						aria-label="Trending"
						onClick={() => setToggle(false)}
					>
						Trending
					</Link>
					<Link
						href="/#"
						aria-label="Categories"
						onClick={() => setToggle(false)}
					>
						Categories
					</Link>
					<button className={styles.btn} onClick={handleClick}>
						<HiOutlineXMark />
					</button>
				</nav>
				<button className={styles.btn} onClick={handleClick}>
					<HiBars3 />
				</button>
			</div>
		</header>
	);
};

export default Header;
