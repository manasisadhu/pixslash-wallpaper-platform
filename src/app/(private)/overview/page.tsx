import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Overview | PixSlash",
  description:
    "View your PixSlash dashboard overview, including your uploaded wallpapers, activity, and account insights.",
};

const page = () => {
  return <div className="grid h-dvh place-items-center">overview</div>;
};

export default page;
