import type { NextPage } from "next";
import Image from "next/image";
import Layout from "../components/Layout";
import teddy_bear from "../public/teddy-bear-dalle-no-bg.png";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="m-auto max-w-xl flex justify-center pb-20 min-h-screen flex-col">
        <Image src={teddy_bear} alt="teddy_bear" />

        <div className=" lg:text-3xl text-center text-2xl">{` Bear markets aren't all bad. `}</div>
      </div>
    </Layout>
  );
};

export default Home;
