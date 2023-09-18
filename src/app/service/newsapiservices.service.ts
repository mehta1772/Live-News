import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) {
    
   }
  
   newsApiUrl ="https://newsapi.org/v2/top-headlines?country=in&apiKey=fdf7d9f666894e3cb23dad1c59dc9891";

   //technewsapiurl
   techApiUrl="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=fdf7d9f666894e3cb23dad1c59dc9891";

   //businessapiurl
   businessApiUrl="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=fdf7d9f666894e3cb23dad1c59dc9891";


   //topheading()
   topHeading():observable<any>
   {
    return this._http.get(this.newsApiUrl);
   }

   //techNews
   techNews():observable<any>
   {
    return this._http.get(this.techApiUrl);
   }

   //business mews
   businessNews():observable<any>
   {
    return this._http.get(this.businessApiUrl);
   }
}
