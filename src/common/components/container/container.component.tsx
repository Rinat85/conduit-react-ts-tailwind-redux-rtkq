import { FC, PropsWithChildren } from 'react';
// interface IContainerProps {};

export const Container: FC<PropsWithChildren> = ({ children }) => {
  return <div className="container mx-auto">{children}</div>;
};
