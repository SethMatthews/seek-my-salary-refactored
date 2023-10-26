import Head from "next/head";
import Footer from "~/components/Footer";
import SeekSalaryForm from "~/components/SeekSalaryForm";



export default function Home() {

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <SeekSalaryForm />
        <Footer/>

    
      </main>
    </>
  );
}


