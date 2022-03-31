function searchTemperature() {

    var newName = document.getElementById("city-name");
    var cityName = document.getElementById("cityName");
    cityName.innerHTML = "--"+newName.value+"--";

fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=6b5a6be9782ef17261f32bd31e8326a4')
.then(response => response.json())
.then(data => {

    //Getting the min and max values for each day
    for(i = 0; i<7; i++){
        document.getElementById("day" + (i+1) + "Min").innerHTML = "Min: " + Number(data.list[i].main.temp_min - 273.15).toFixed(1)+ "°";
       
    }

    for(i = 0; i<7; i++){
        document.getElementById("day" + (i+1) + "Max").innerHTML = "Max: " + Number(data.list[i].main.temp_max - 273.15).toFixed(2) + "°";
    }
    // for(i = 0; i<5; i++){
    //     document.getElementById("condition" + (i+1) + "clouds").innerHTML = (data.list[i].weather[0].main);
    // }
    

    //Getting Weather Icons
     for(i = 0; i<7; i++){
        document.getElementById("img" + (i+1)).src = "http://openweathermap.org/img/wn/"+
        data.list[i].weather[0].icon
        +".png";
    }

    console.log(data)


})
.catch(err => alert("Something Went Wrong: Please type correct city"))


}

const d = new Date();
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];


function CheckDay(day){
    if(day + d.getDay() >6){
        return day + d.getDay() - 7;
    }
    else{
        return day + d.getDay();
    }
}

    for(i = 0; i<7; i++){
        document.getElementById("day" + (i+1)).innerHTML = weekday[CheckDay(i)];
    }


