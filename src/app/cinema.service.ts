import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {
  url: string = "https://www.finnkino.fi/xml/News/";
  testData =
    [
      { 'Title': "PalmSprings", 'PublishDate': '2020-11-24T00:00:00', 'HTMLLead': '', 'ImageURL': 'http://media.finnkino.fi/1012/news/6124/PalmSprings_550.jpg' },
      { 'Title': 'Ensi-ilta: Karjamäenjoulu', 'PublishDate': '2020-11-24T00:00:00', 'HTMLLead': '', 'ImageURL': 'http://media.finnkino.fi/1012/news/6123/JulPaKutoppen_550.jpg' }];

  getTestData(): Observable<any> {
    return of(this.testData);
  }

  getData(): Observable<any> {
    // pipe kokoaa operaattorit yhteen (map, filter, etc)
    // map operaattori, tyypin muuttamiseen (esim. response => json-tyyppiseksi)
    // filter operaattori, suodatus annetun ehdon mukaan
    return this.httpClient.get(this.url, { responseType: 'text' })
      .pipe(map(response => {
        let newsData: any = [];
        // tässä muunnetaan xml-data json muotoon:

        var parseString = require('xml2js').parseString;
        var xml = newsData;
        parseString(response, {
          trim: true,
          explicitArray: false,
          mergeAttrs: true
        }, function (err: any, result: any) {
          newsData = result.News.NewsArticle;
        });
        return newsData;
      }))
  


  // return of (this.testData);

};

constructor(private httpClient: HttpClient) { }

}
