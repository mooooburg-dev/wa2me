import React from 'react';

type Props = {
  children?: any;
};
export default function Page({ children }: Props) {
  return <div>{children}</div>;
}
