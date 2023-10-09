import Image from 'next/image';

// interface formProps {
//     handleSubmit: (submitEvent: React.SyntheticEvent)=>void;
// }

const SeekSalaryForm = ({handleSubmit,handleInputChange}:{handleSubmit:(submitEvent: React.SyntheticEvent)=>void, handleInputChange:(submitEvent: React.SyntheticEvent)=>void}) => {
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