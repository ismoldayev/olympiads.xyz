import * as React from 'react';
import Danger from './Danger';

export const IncompleteSection = ({
  children,
}: {
  children?: React.ReactNode;
}): JSX.Element => {
  return (
    <Danger title="Тази секция не е довършена.">
      Всякаква помощ ще бъде оценена! Просто изпратете Pull Request на{' '}
      <a
        href="https://github.com/ismoldayev/olympiads.xyz"
        target="_blank"
        rel="noreferrer"
      >
        Github
      </a>
      .{children && <div className="h-2 mb-0" />}
      {children}
    </Danger>
  );
};
