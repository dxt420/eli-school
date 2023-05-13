import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ApiDjangoService } from 'src/services/api-django.service';

@Component({
  selector: 'app-appointment-detail',
  templateUrl: './appointment-detail.page.html',
  styleUrls: ['./appointment-detail.page.scss'],
})
export class AppointmentDetailPage implements OnInit {

  student: any;

  consultation;

  currentPage = 1;

  

  
  constructor(private route: ActivatedRoute, private router: Router,private djangoService: ApiDjangoService,private loadingCtrl: LoadingController) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        console.log('hi');
        this.consultation = this.router.getCurrentNavigation().extras.state.consultation;
        console.log(this.consultation);
      }
    });
  }

  

  ngOnInit() {
  }

 chat() {
    this.router.navigate(['./chat']);
  }  
 rateDoc() {
    this.router.navigate(['./add-feedback']);
  }  
 
}
