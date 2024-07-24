import React,{useEffect, useState} from 'react'
import axios from "axios";

export default function Mainpage() {
    //states for form fields
    const[date, setDate] = useState(null);
    const[sourceCurrency, setSourceCurrency] = useState("");
    const[targetCurrency, setTargetCurrency] = useState("");
    const[amountInSouurceCurrency,setAmountInSourceCurrency] = useState(0);
    const[amountInTargetCurrency,setAmountInTargeteCurrency] = useState(0);
    //currency names array
    const [currencyNames, setCurrencyNames] = useState({});
    //handleSubmit method
    const handleSubmit = (e) => { 
      e.preventDefault();
        };

    //get all currency names
    useEffect(()=>{
      const getCurrencyNames = async() => {
        try{
          const responce = await axios.get("http://localhost:5000/getAllCurrencies");

          setCurrencyNames(responce.data);
        }catch(err){
          console.error(err);
        }
      };
      getCurrencyNames();
    } , [])
    
  return (
    <div>
      <h1 className="lg:mx-32 text-4xl text-center font-bold text-green-500  ">Convert Your Currencies Today</h1>
      <p className="lg:mx-10 opacity-60 py-10">
        Welcome to "convert Your Currencies Today"! This application allows you to easily Convert
        Currenciesbased on the latest exchange rates. Whether you're planning a trip, managing yor finances,
         or simply curious about the value of your money in different cirrencies, this tool is here to help.
      </p>
      <h3 className="lg:mx-10 text-2xl"> Let's get a good experience !!!</h3>

      <div className="mt-5 flex items-center justify-center flex-col">
        <section className="w-full lg:w-1/2">
            <form onSubmit={handleSubmit} >
                <div className="mb-4">
                    <label htmlFor={date} id={date} name={date} className="block mb-2 text-1xl font-medium text-gray-900 dark:text-white">Date</label>
                    <input
                    onChange={(e) => setDate(e.target.value)} type="Date" className="bg-gray-50 border border-gray-300 text-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"  required/>

                    <div className="mb-4">
                    <label htmlFor={sourceCurrency} className="block mb-2 text-1xl pt-3 font-medium text-gray-900 dark:text-white">Source Currency</label>
                    <select 
                    omChange={(e) => setSourceCurrency(e.target.value)} className="bg-gray-50 border border-gray-300 text-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="source currency" id={sourceCurrency} name={sourceCurrency} required>
                    <option value={sourceCurrency}>Select the source currency</option>
                    <option value={sourceCurrency}>Select the target currency</option>
                    </select>
                    </div>

                    <div className="mb-4">
                    <label htmlFor={targetCurrency} className="block mb-2 text-1xl pt-3 font-medium text-gray-900 dark:text-white">Target Currency</label>
                    <select onChange={(e) => setTargetCurrency(e.target.value)}
                 className="bg-gray-50 border border-gray-300 text-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="target currency" id={targetCurrency} name={targetCurrency} value={targetCurrency} required >
                    <option value={targetCurrency}>Select the target currency</option>
                    <option value={targetCurrency}>Select the target currency</option>
                    <option value={targetCurrency}>Select the target currency</option>
                    </select>
                    </div>

                    <div className="mb-4">
                    <label htmlFor={amountInSouurceCurrency} id={amountInSouurceCurrency} name={amountInSouurceCurrency} className="block mb-2 text-1xl pt-3  font-medium text-gray-900 dark:text-white">Amount in Source Currency</label>
                    <input
                    onChange={(e) => setAmountInSourceCurrency(e.target.value)} type="text" className="bg-gray-50 border border-gray-300 text-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="amount" required/>
                    </div>

                    <button  type=" " className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md">{" "} Get the target Currency </button>
                    </div>
                    </form>
                    </section>
                    </div>
                    </div>
  )
}
