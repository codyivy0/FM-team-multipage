import styles from "./Button.module.css";
import PropTypes from "prop-types";

const Button = ({ children, className }) => {
  return <button className={`${styles.btn} ${className}`}>{children}</button>;
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Button;
