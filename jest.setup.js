jest.mock('next/image', () =>
  jest.fn().mockImplementation(() => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img alt='' />;
  })
);
