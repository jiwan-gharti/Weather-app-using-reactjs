import React, { useEffect, useState } from 'react';



// const api_end_point = "api.openweathermap.org/data/2.5/weather?q={city name}&appid={api_key}"
// const api_end_point = "api.openweathermap.org/data/2.5/weather?q=kathmandu&appid=10ccd076ae03108008170f3613400108"
const api_key = "10ccd076ae03108008170f3613400108";
const Weather1 = () =>{
    let [city, setCity] = useState(null);
    let [search, setSearch] = useState("Kathmandu");

    useEffect(()=>{
        const fetchApi = async () =>{
            const api_end_point = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${api_key}`;
            const response = await fetch(api_end_point)
            const responseJson = await response.json();
            console.log(responseJson)
            setCity(responseJson)
        };
        fetchApi();
    },[search])

    return(
    <>
        <div className='container'>
            <h1 className='my-3'>Weather App</h1>
            <div className='cards w-50 m-auto'>
               <input 
                    type="search"
                    value={search}
                    className='my-4 w-75 px-2 py-1 text-decorations-none'
                    onChange={
                        (event)=>{
                            setSearch(event.target.value);
                        }
                    }
                    
                />
            
                
                {!city ?
                    (<p className='error'>No data Found!!</p>)
                    : city.cod === '404' || city.cod ==='400' ? <p className='error'>No data Found</p>
                    :
                    (
                        <>
                        {console.log(city)}
                            <div className='info m-auto w-100'>
                                <div className='card'>
                                    <h1>{search}, {city.sys.country}</h1>
                                    <h5 className='py-4'>
                                        {weatherIcon(city.weather[0].main)}
                                    </h5>
                                    <h1 className='py-2'>{city.main.temp}&deg;</h1>
                                    {/* max and min tempurature */}
                                    {minmaxTemp(city.main.temp_min,city.main.temp_max)}

                                    <h4 className='py-4'>{city.weather[0].main}</h4>
                                </div>
                            </div>

                            <div className='wave -one'></div>
                            <div className='wave -two'></div>
                            <div className='wave -three'></div>
                    
                        </>
                    )
                }

            </div>
        </div> 
    </>



    )
}

function minmaxTemp(min,max){
    return(
        <h3>
            <span className='px-4'>Min: {min}&deg;</span> ||
            <span className='px-4'>Max: {max}&deg;</span>
        </h3>
    )
}

function weatherIcon(weatherIcon){

    if(weatherIcon === "sunny" | weatherIcon === "Clear"){
        return <i className="wi wi-day-sunny display-1"></i>
    }
    if(weatherIcon === "Smoke"){
        return <i className="wi wi-day-windy display-1"></i>

    }
    if(weatherIcon === "Clouds"){
        return <i className="wi wi-day-cloudy display-1"></i>

    }
    if(weatherIcon === "Rain"){
        return <i className="wi wi-day-showers display-1"></i>

    }

}

export default Weather1;