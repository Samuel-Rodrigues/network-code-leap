import React, { ReactNode } from 'react';

import { Wrapper } from './styles';

type Props = { children: ReactNode };

const Container = ({ children, ...rest }: Props) => (
  <Wrapper {...rest}>{children}</Wrapper>
);

export default Container;
