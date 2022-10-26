import AppLink from "next/link";
import Text from "../Text";

type PropsType = {
  href: string;
  children: string;
  locale?: string;
};

const Link = (props: PropsType) => {
  const { href, children, locale } = props;

  return (
    <AppLink href={href} locale={locale} passHref>
      <a>
        <Text component="span" size="sm" weight="semibold">
          {children}
        </Text>
      </a>
    </AppLink>
  );
};

export default Link;
