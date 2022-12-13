import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LippuserviceService {

  //funktio, johon kirjataan liput ja niiden hinta sekä tuodaan komponenttiin
  getTickets()
  {
    return[
      {"Lippu": "Peruslippu", "Hinta": 16, "Maara": 0, "ID": 0},
      {"Lippu": "Opiskelijalippu", "Hinta": 10, "Maara": 0, "ID": 1},
      {"Lippu": "Eläkeläislippu", "Hinta": 8, "Maara": 0, "ID": 2},
    ];
    
  }

  postTicket(firstname:any, lastname:any, email:any, total:any, tickets:any)
  {
    console.log("Tiedot: " + firstname + " " + lastname + " sähköposti: " + email);
    console.log("Yhteissumma: " + total);
    console.log("Peruslippujen määrä: " + tickets[0].Maara); 
    console.log("Opiskelijalippujen määrä: " + tickets[1].Maara); 
    console.log("Eläkeläislippujen määrä: " + tickets[2].Maara); 
  }

  constructor() { }
}
