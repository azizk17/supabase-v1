import React from 'react';

type CardHeaderProps = {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  actions: React.ReactNode;
};
export const CardHeader: React.FC<CardHeaderProps> = ({
  title,
  subtitle,
  children,
  actions
}) => {
  return (
    <div className="flex justify-between items-center mb-2">
      <div className="flex items-center">
        <div className="text-2xl font-semibold">{title}</div>
        <div className="">{subtitle}</div>
      </div>
      <div>{actions}</div>
    </div>
  );
};
