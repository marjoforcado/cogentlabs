type PropsType = {
  children: JSX.Element;
};

const DefaultLayout = (props: PropsType) => {
  const { children } = props;

  return <main>{children}</main>;
};

export default DefaultLayout;
