import AppLink from "next/link";
import Text from "../Text";

type PropsType = {
  href: string;
  children: string;
};

const Link = (props: PropsType) => {
  const { href, children } = props;

  return (
    <AppLink href={href} passHref>
      <a>
        <Text component="span" size="sm" weight="semibold">
          {children}
        </Text>
      </a>
    </AppLink>
  );
};

export default Link;
