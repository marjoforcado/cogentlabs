import { NextPage } from "next";

type NextPageWithLayout = NextPage & {
  layout?: "default" | "none";
};

export type { NextPageWithLayout };
