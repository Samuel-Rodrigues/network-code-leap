import React from 'react';

type Props = { children: JSX.Element; condition: boolean };

const If = ({ children, condition }: Props) => <>{condition && children}</>;

export default If;
