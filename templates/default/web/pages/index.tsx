import type { NextPage } from "next";
import Image from "next/image";
import Layout from "../components/Layout";
import teddy_bear from "../public/teddy-bear-dalle-no-bg.png";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="m-auto max-w-xl flex justify-center pt-10 pb-20 min-h-screen">
        <Image src={teddy_bear} alt="teddy_bear" />
      </div>
    </Layout>
  );
};

export default Home;
