import Image from 'next/image';
import { useState } from 'react';

interface CreateUserResponse {
    message: string;
  };

const SeekSalaryForm = () => {

    const [inputValue, setInputValue] = useState("");

    const handleSubmit = async (submitEvent: React.SyntheticEvent) => {
        console.log("Submitted");
        console.log(submitEvent);
        submitEvent.preventDefault();
        const e = submitEvent.target as HTMLFormElement;
        console.log("Submitted");
        console.log("add are",e);
        await login().then((value)=>{
        console.log(value);
        });
    }
    
    
    
    const handleInputChange = (inputChangeEvent: React.SyntheticEvent) => {
        const inputElement = inputChangeEvent.target as HTMLInputElement;
        console.log("handleInputChange",inputElement.value);
        setInputValue(inputElement.value);
    
    }

    const login = async () => {
        try {
        // 👇️ const response: Response
        const response = await fetch('http://localhost:3000/api/seeksalary', {
            method: 'POST',
            body: JSON.stringify({
            jobId: inputValue,
            }),
            headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
        }

        // 👇️ const result: CreateUserResponse
        const result = (await response.json()) as CreateUserResponse;

        console.log('result is: ', JSON.stringify(result, null, 4));
        return result;

        } catch (error) {
        if (error instanceof Error) {
            console.log('error message: ', error.message);
            return error.message;
        } else {
            console.log('unexpected error: ', error);
            return 'An unexpected error occurred';
        }
        }
    };

    return (  
        // flex flex-col items-center justify-start
        <div className=' min-h-max w-full bg-sms-purple flex justify-center text-white sms-radius'>

            <div className=' w-11/12 md:max-w-2xl flex flex-col items-center justify-start gap-10 '>
                <div className='' >
                    <Image src={"/seekmysalarylogo.svg"} alt="" height={200} width={500} ></Image>
                </div>
                <h2 className='text-center' >Discover the salary range for any listed job on Seek.</h2>
                <form onSubmit={handleSubmit} className='w-full flex flex-col items-stretch gap-4'>
                    <input onChange={handleInputChange} className='py-3 rounded-xl text-center'  type="text" id ="add" name="add" required placeholder="Paste the URL of the SEEK job, i.e. https://www.seek.com.au/job/..." />
                    <button className='bg-sms-aqua py-3 rounded-xl text-sms-purple' >SEEK</button>
                    {/* <input id ="button" name="button" type="submit" value="SEEK"/> */}
                </form>
                <h2 className='flex justify-center text-center pb-10'>This tool is not connected with Seek Limited. Please note that the listed range entered by the employer may include super..</h2>
            </div>
            
        </div>
    );
}
 
export default SeekSalaryForm;