import Head from "next/head";
import { useState, useEffect, useMemo, useCallback } from "react";
import axios from "axios";
import Home from "../components/homePage";
import { useRouter } from "next/router";

export default function MainPage() {
  const router = useRouter();
  const URL = `${router?.basePath}/api/bulk`;

  const [data, setData] = useState([]);
  const res = useCallback(async () => {
    await axios
      .get(URL)
      .then(function (response) {
        console.log(response);
        setData(response?.data?.data?.bulk);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    res();
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="main" id="main">
        <Home data={data} />
        {/* <Cities data={data} />
      <News data={data} /> */}
      </div>
    </>
  );
}
