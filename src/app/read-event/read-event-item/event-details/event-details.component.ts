import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EvenementService} from '../../../services/evenement.service';
import {Evenement} from '../../../models/evenement.model';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  eventId: number = Number(this.router.snapshot.paramMap.get('id'));
  evenement?: Evenement;
  pog: Window | null | undefined;

  donatedAmount?: {
    success: boolean,
    date: string,
    result: number,
    info: {},
    query: {}
  }
  urlToDonate?: string;

  amount: number = 0;

  constructor(private router: ActivatedRoute, private evenementService: EvenementService, private route: Router) { }

  ngOnInit(): void {
    this.evenementService.getEventById(this.eventId).subscribe(res => {
      this.evenement = res;
    });
  }

  donate() {
    let myHeaders = new Headers();
    myHeaders.append("apikey", "11M0KevWMg6g1vFpO3cXPUIXqB8mWlMk");

    console.log(this.amount);

    fetch("https://api.apilayer.com/fixer/convert?to=EUR&from=MAD&amount="+this.amount, {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    })
      .then(response => response.text())
      .then(result => {this.donatedAmount = JSON.parse(result); console.log(this.donatedAmount?.result); this.urlToDonate = "https://www.paypal.com/paypalme/xersky/" + this.donatedAmount?.result.toFixed(2) + "EUR";    console.log(this.urlToDonate); this.pog = window.open(this.urlToDonate, 'donate' , "width=500,height=800"); console.log(this.pog?.closed)})
      .catch(error => console.log('error', error));

    let batch = setInterval(() => {
    if (this.pog?.closed) {
     alert("Merci pour votre don !\nVous avez donné un montant de: " +this.amount.toFixed(2)+" MAD\nVous allez être redirigé vers la page d'accueil");
     this.route.navigate(['/']);
     clearInterval(batch);
    }}, 5000);

  }

}
