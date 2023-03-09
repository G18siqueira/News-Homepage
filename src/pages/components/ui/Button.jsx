import styles from './button.module.scss';

const Button = ({ className, children }) => {
	return (
		<button className={`${styles.btn} ${className}`}>
			<span>{children}</span>
		</button>
	);
};

export default Button;
