import { Roboto } from "next/font/google";
import localFont from "next/font/local";

export const roboto = Roboto({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-roboto",
});

export const sfProText = localFont({
  src: [
    {
      path: "./SFProText-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./SFProText-RegularItalic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./SFProText-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./SFProText-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-sf-pro-text",
});
