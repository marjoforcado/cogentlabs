import { Footer, Navbar } from "../../components";

type PropsType = {
  children: JSX.Element;
};

const DefaultLayout = (props: PropsType) => {
  const { children } = props;

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
