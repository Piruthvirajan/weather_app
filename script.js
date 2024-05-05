//VARIABLE DECLARATIONS

const APIkey = "ce232454e2aaf490178d93f2bf3d0d9a"
const form = document.querySelector('form')
const input = document.querySelector('input')
const main = document.querySelector('main')

form.addEventListener('submit',event =>{
    event.preventDefault()     //to remove default submit behaviour of forms (dont know what!!!)
    if(input.value != ""){
        const cityname = input.value
        getWeatherData(cityname)

    }
    else{
        console.log("NO LOCATION ENTERED")
        const errorMsg = document.createElement('p')
        errorMsg.style.fontFamily = "sans-serif"
        errorMsg.style.fontWeight = "700"
        errorMsg.style.fontSize = "2.6rem"
        
        main.appendChild(errorMsg)
        main.style.justifyContent = "flex-start"
        form.style.marginBottom = "4rem"
        
        
        errorMsg.innerHTML  = "NO LOCATION ENTERED"
    }
    

})



 async function getWeatherData(cityname){
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIkey}`)
        const data = await response.json()
        displayData(data)
        

    }
    catch(err){
        console.error(err)

    }
}




function displayData(data){
    console.log(data)
    const locationName = document.querySelector('.place')
    const temperature = document.querySelector('.temp')
    const humidity = document.querySelector('.humidity')
    const cloudDescription = document.querySelector('.cloud-detail')
    const container = document.querySelector('.container')
    
    const img = document.querySelector('img')

    container.style.display = 'flex'

    const crtHumidity = `Humidity:  ${data.main.humidity}%`
    const celsius = ((data.main.temp)-273.15).toFixed(2) + "°C"
    
    locationName.innerHTML = data.name
    temperature.innerHTML = celsius
    humidity.innerHTML = crtHumidity
    cloudDescription.innerHTML = data.weather[0].description
    

    const id = data.weather[0].id

    switch (true){
        case (id>=200 && id<300):
            img.src = "https://openweathermap.org/img/wn/11d@2x.png"
            break
        case (id>=300 && id<400):
            img.src = "https://openweathermap.org/img/wn/09d@2x.png"    
            break
        case (id>=500 && id<505):
            img.src = "https://openweathermap.org/img/wn/10d@2x.png"    
            break
        case (id>=505 && id<540):
            img.src = "https://openweathermap.org/img/wn/09d@2x.png"    
           break
        case (id>=803):
            img.src = "https://openweathermap.org/img/wn/04d@2x.png"    
            break  
        case (id==801):
            img.src = "https://openweathermap.org/img/wn/02d@2x.png"    
            break  
        case (id==802):
            img.src = "https://openweathermap.org/img/wn/03d@2x.png"    
            break 
        case (id==800):
           img.src = "https://openweathermap.org/img/wn/01d@2x.png"    
            break 
        case (id>=700 && id<800):
            img.src = "https://openweathermap.org/img/wn/50d@2x.png"    
            break 
        case (id>=600 && id<700):
            img.src = "https://openweathermap.org/img/wn/13d@2x.png"    
            break 


    }


}







