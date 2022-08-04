import React, { FC, ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode
};

const Layout: FC<LayoutProps> = ({ children }) => {

  return (
    <section>
      Hello
      { children }
    </section>
  );
};

export const getPersistiveLayout = (page: ReactNode) => <Layout>{page}</Layout>;

export default Layout;
