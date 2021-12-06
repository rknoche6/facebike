import Head from "next/head";
import Header from "../components/Header";


export default function Home() {
  return (
    <div>
      <Head className="h-screen">
        <title>Facebike</title>

      </Head>

      <Header />
    </div>
  )
}
