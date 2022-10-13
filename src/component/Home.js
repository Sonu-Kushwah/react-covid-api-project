import React,{useState,useEffect} from 'react'

function Home() {
    const [data, setData] = useState([]);
    const [No, setCount] = useState(1);
   
    const getCovidData = async () => {
        try {
            const res = await fetch('https://data.covid19india.org/data.json');
            const actualData = await res.json();
            /*console.log(actualData.statewise[0]);*/
            setData(actualData.statewise[2]);
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getCovidData();
    }, []);
    return (
        <>
            <div className='container mt-5'>
                <h2 className='text-center'>COVID-19 CORONOVIRUS TRACKER</h2>
                <div className='row mt-5'>
                    <div className='col-lg-4'>
                        <div className='covid' id="countery">
                            <p>Countery</p>
                            <h2>{data.state}</h2>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='covid' id="recoverd">
                            <p>recoverd</p>
                            <h2>{data.recovered}</h2>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='covid' id="confirm">
                            <p>Confirm</p>
                            <h2>{data.confirmed}</h2>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='covid' id="death">
                            <p>Death</p>
                            <h2>{data.deaths}</h2>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='covid' id="active">
                            <p>Active</p>
                            <h2>{data.active}</h2>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='covid' id="update">
                            <p>Update</p>
                            <h2>{data.lastupdatedtime}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home