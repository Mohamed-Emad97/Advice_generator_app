import React , {useEffect, useState}from 'react';
import Axios from "axios";
import divderPic from "../images/pattern-divider-desktop.svg";
import dicePic from "../images/icon-dice.svg";

export default function Advice() {
    const [advice, setAdvice] = useState([]);

    async function getAdvice() {
        let url = `https://api.adviceslip.com/advice`;
        let {data} = await Axios.get(`${url}`);
        console.log(data);
        setAdvice(data.slip);
    }

    useEffect(()=>{
        getAdvice();
    }, []);

  return (
    <>
        <section id="advice" className="vh-100">
            <main className='container h-100'>
                <div className="block d-flex align-items-center justify-content-center h-100">
                    <div className="adviceCard position-relative p-5 rounded-3 text-center">
                        <p className='id h5'>Advice # {advice.id}</p>
                        <h2 className='my-4'>
                            <q>
                                {advice.advice}
                            </q>
                        </h2>
                        <div className="img">
                            <img src={divderPic} alt="" className='w-75'/>
                        </div>
                        <div className="btn">
                            <button onClick={getAdvice} className='btnMain p-3 rounded-circle d-flex justify-content-center align-items-center'>
                                <img src={dicePic} alt="" className='w-100'/>
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    </>
  )
}
