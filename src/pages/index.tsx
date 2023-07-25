import Head from "next/head";
import { useState } from "react";
// import Link from "next/link";
import Footer from "~/components/Footer";
import SeekSalaryForm from "~/components/SeekSalaryForm";



export default function Home() {


  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (submitEvent: React.SyntheticEvent) => {
    console.log("Submitted");
    console.log(submitEvent);
    submitEvent.preventDefault();
    const e = submitEvent.target as HTMLFormElement;
    console.log("Submitted");
    console.log("add are",e.add);
  }
  
  
  
  const handleInputChange = (inputChangeEvent: React.SyntheticEvent) => {
    const inputElement = inputChangeEvent.target as HTMLInputElement;
    console.log("handleInputChange",inputElement.value);
    setInputValue(inputElement.value);
  
  }
  



  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <SeekSalaryForm handleSubmit={handleSubmit} handleInputChange={handleInputChange} />

        <p>{inputValue}</p>

        <Footer/>

    
      </main>
    </>
  );
}


