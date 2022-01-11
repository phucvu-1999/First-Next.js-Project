import React from "react";
import Link from "next/link";

import styles from "./Button.module.css";

interface ButtonProps {
  link: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button: React.FC<ButtonProps> = ({ link, children, onClick }) => {
  if (link === "btn") {
    return (
      <button onClick={onClick} className={styles.btn}>
        {children}
      </button>
    );
  }

  return (
    <Link href={link}>
      <a className={styles.btn}>{children}</a>
    </Link>
  );
};

export default Button;
