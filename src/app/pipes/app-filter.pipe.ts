import { Pipe, PipeTransform } from '@angular/core';

//Finnkino - kompoonentin hakulaatikolle tarvittava pipe

@Pipe({
  name: 'appFilter'
})
export class AppFilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }

    // //testiksi tulostetaan mitä vittua tänne tulee:
    // console.log("Taulukon 1. objekti merkkijonona: " + JSON.stringify(items[0]));
    // console.log("hakusana: " + searchText);

    //muutetaan hakusana pieneksi
    searchText = searchText.toLocaleLowerCase();
    

    //palautetaan objekti, jos sen title, publishdate tai htmllead -kenttä sisältää hakusanan
    return items.filter(it => {
    return it.Title.toLocaleLowerCase().includes(searchText) || it.PublishDate.toLocaleLowerCase().includes(searchText) || it.HTMLLead.toLocaleLowerCase().includes(searchText);

    /*
      vaihtoehtoinen tapa jos haluaa hakea koko objektin tiedoista, muutetaan ensin koko 'it' -JSON yhdeksi stringiksi, ei toimi kyllä finnkinon APIn tapauksessa kovin hyvin:
      return items.filter(it => {
      return JSON.stringify(it).toLocaleLowerCase().includes(searchText);
      */
    });

  }

}
