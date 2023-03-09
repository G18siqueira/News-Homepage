import { useState, useEffect } from 'react';

const useAnimationScroll = () => {
	const [scrollPosition, setScrollPosition] = useState(0);

	const handleScroll = () => {
		setScrollPosition(
			window.pageYOffset || document.documentElement.scrollTop,
		);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const offset = (el) => {
		const rect = el.getBoundingClientRect();
		const scrollLeft =
			window.pageXOffset || document.documentElement.scrollLeft;
		const scrollTop =
			window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
	};

	useEffect(() => {
		document.querySelectorAll('.animation:not(.start)').forEach((el) => {
			if (offset(el).top < scrollPosition + window.innerHeight * 1) {
				el.classList.add('start');
			}
		});
	}, [scrollPosition]);

	return null;
};

export default useAnimationScroll;
