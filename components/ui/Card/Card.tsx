import React from 'react';
interface CardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
export const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="card">
      <div className="card-body">{children}</div>
    </div>
  );
};
