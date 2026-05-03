import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  href?: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ href, className, children, onClick }) => {
  const baseClasses = 'px-4 py-2 rounded font-semibold';
  const classes = `${baseClasses} ${className}`;

  if (href) {
    return (
      <Link href={href}>
        <a className={classes}>{children}</a>
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default Button;
