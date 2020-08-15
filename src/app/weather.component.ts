import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
    selector: 'weather',
    template: `
        <form (ngSubmit)="process()">
            Enter city name: <input name="city" [(ngModel)]="city" />
            <button type="submit">Search</button>
        </form>
        <h4 *ngIf="temp">Temprature in {{ city }} is {{ temp }}°C and weather is {{ weather }}.</h4>
    `
})
export class WeatherComponent {

    city: string;
    
    //to access any REST/HTTP API, we need to use the HttpClient module
    constructor(private http: HttpClient) {}

    temp: number;
    weather: string;
    
    process(){
        var url = "https://api.openweathermap.org/data/2.5/weather?q="+this.city+"&appid=138b91f7502c917df454a94449df5c18";
        this.http.get(url).subscribe(data => {
            // alert(JSON.stringify(data));
            //alert("Temprature: " + (data.main.temp-273.15) + "°C");
            //alert("Weather: " + data.weather[0].description);
            this.temp = Number((data.main.temp-273.15).toFixed(2));
            this.weather = data.weather[0].description;
        })
    }
}