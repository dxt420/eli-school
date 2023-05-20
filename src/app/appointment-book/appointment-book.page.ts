import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InfiniteScrollCustomEvent, LoadingController, NavController } from '@ionic/angular'; 
import { ApiDjangoService } from 'src/services/api-django.service';
import { AuthenticationService } from 'src/services/authentication.service';
@Component({
  selector: 'app-appointment-book',
  templateUrl: './appointment-book.page.html',
  styleUrls: ['./appointment-book.page.scss'],
})
export class AppointmentBookPage implements OnInit {
   faqExpand1: boolean;
   faqExpand2: boolean;
   faqExpand3: boolean;
   faqExpand4: boolean;
   faqExpand5: boolean;
   faqExpand6: boolean;
   faqExpand7: boolean;
   faqExpand8: boolean;
   faqExpand9: boolean;
   faqExpand10: boolean;
   faqExpand11: boolean;
   faqExpand12: boolean;
   faqExpand13: boolean;
   faqExpand14: boolean;
 

   doctor: any;

   docForm: FormGroup;
  //  student: FormControl;
  //  suggestedTime: FormControl;


   students= [];
   currentPage = 1;

   school = [];

   chosenOne: any;


   selecTedValue: any;
   

  constructor(private route: ActivatedRoute, 
              private router: Router,
              private navCtrl: NavController,
              private djangoService: ApiDjangoService,
              private loadingCtrl: LoadingController,
              private authService: AuthenticationService,
              private fb: FormBuilder) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        console.log('hi');
        this.doctor = this.router.getCurrentNavigation().extras.state.doctor;
        console.log(this.doctor);
      }
    });



    this.docForm = this.fb.group({
      student: ['', Validators.required],
      suggestedTime: ['', Validators.required],
      suggestedDate: ['', Validators.required]
    });
  }


 async submitForm() {
    console.log(this.docForm.value);

    const loading = await this.loadingCtrl.create({
      message: 'Loading..',
      spinner: 'bubbles',
    });
    console.log(this.school[0] );
    console.log(this.docForm.value);
    await loading.present();
    // event.preventDefault();
    // if (ourLoginDir.submitted){
      console.log(this.doctor.name );
      
      const data = {
        'notes': 'School Consultation Request',
        'suggestedTime' : this.docForm.value['suggestedTime'],
        'suggestedDate' : this.docForm.value['suggestedDate'],
        'student' : parseInt(this.docForm.value['student']) ,
        'school' : this.school[0].id ,
        'status' : 'pending' ,
        'doctor' : this.doctor.id ,
      }



      console.log(data);
      

      // sendConsultation
      this.djangoService.sendConsultation(data,this.authService.getUsername()).subscribe(
        (res) => {
          loading.dismiss();
          console.log(res);
          
     
        },
        (err) => {
          console.log(err);
          loading.dismiss();
        }
      );

      this.navCtrl.navigateRoot(['./appointment-booked']);
 
    
  }

  ngOnInit() {

    this.loadData();


    // let username = this.apiDjangoService.getUsername()
    // this.student  = new FormControl("", [
    //             Validators.required
    //        ])

    //        this.suggestedTime  = new FormControl("", [
    //         Validators.required
    //    ])
    // this.username  = new FormControl(email, [
    //         Validators.required,
    //         Validators.minLength(0),
    //         Validators.maxLength(280)
    //    ])
    // this.password  = new FormControl("", [
    //             Validators.required,
    //             Validators.minLength(4),
    //             Validators.maxLength(280)
    //        ])
    // this.docForm = new FormGroup({
    //     'student': this.student,
    //     'suggestedTime': this.suggestedTime
    // })
  }


  selectCategory(param){
    console.log('Select Category');
    console.log(param);

    this.djangoService.getStudentInfo(param).subscribe(
      (res) => {
        // loading.dismiss();
        console.log(res);
        
        this.chosenOne = res;
   
      },
      (err) => {
        console.log(err);
        // loading.dismiss();
      }
    );


    //populate here
  }

  async loadData(event?: InfiniteScrollCustomEvent) {
    const loading = await this.loadingCtrl.create({
      message: 'Loading..',
      spinner: 'bubbles',
    });
    await loading.present();

    console.log(this.authService.getUsername());
    
    
 
    this.djangoService.getSchoolInfo(this.currentPage,this.authService.getUsername()).subscribe(
      (res) => {
        loading.dismiss();
        console.log(res);
        this.school[0] = res;
        console.log('School Array : ',this.school[0]);
        // this.school.push(...res.results);
 
        // event?.target.complete();
        // if (event) {
        //   event.target.disabled = res.total_pages === this.currentPage;
        // }
      },
      (err) => {
        console.log(err);
        loading.dismiss();
      }
    );

    this.djangoService.getStudents(this.currentPage,this.authService.getUsername()).subscribe(
      (res) => {
        loading.dismiss();
        console.log(res);
        // this.students = res;
        this.students.push(...res.results);
 
        event?.target.complete();
        if (event) {
          event.target.disabled = res.total_pages === this.currentPage;
        }
      },
      (err) => {
        console.log(err);
        loading.dismiss();
      }
    );
  }
 
  loadMore(event: InfiniteScrollCustomEvent) {
    this.currentPage++;
    this.loadData(event);
  }

  async handleSubmit(event:any, ourLoginDir:any, docFormGroup:FormGroup){
    // const loading = await this.loadingCtrl.create({
    //   message: 'Loading..',
    //   spinner: 'bubbles',
    // });
    // console.log(this.school[0] );
    // console.log(this.docForm.value);
    // await loading.present();
    // event.preventDefault();
    // if (ourLoginDir.submitted){
    //   console.log(this.doctor.name );
      
    //   const data = {
    //     'notes': 'School Consultation Request',
    //     'consultation_time' : docFormGroup.value['suggestedTime'],
    //     'student' : docFormGroup.value['student'] ,
    //     'doctor' : this.doctor.id ,
    //     'school' : this.school[0].id 
    //   }


    //   // "date_created": null,
    //   // "notes": "",
    //   // "consultation_time": "",
    //   // "student": null,
    //   // "doctor": null,
    //   // "school": null

    //   console.log(data);
      

    //   // sendConsultation
    //   this.djangoService.sendConsultation(data).subscribe(
    //     (res) => {
    //       loading.dismiss();
    //       console.log(res);
          
    //       // this.students = res;
    //       // this.students.push(...res.results);
   
    //       // event?.target.complete();
    //       // if (event) {
    //       //   event.target.disabled = res.total_pages === this.currentPage;
    //       // }
    //     },
    //     (err) => {
    //       console.log(err);
    //       loading.dismiss();
    //     }
    //   );

    //   this.navCtrl.navigateRoot(['./appointment-booked']);
    //     // interact with the server
    //     // let authLoginData = new AuthLoginData(
    //     //   docFormGroup.value['email'], 
    //     //   docFormGroup.value['password']
    //     //     )
    //     // this.login(authLoginData)
    //     // docFormGroup.resetForm({})
    // }
}


reset(){
  this.faqExpand1=false;
  this.faqExpand2=false;
  this.faqExpand3=false;
  this.faqExpand4=false;
  this.faqExpand5=false;
  this.faqExpand6=false;
  this.faqExpand7=false;
  this.faqExpand8=false;
  this.faqExpand9=false;
  this.faqExpand10=false;
  this.faqExpand11=false;
  this.faqExpand12=false;
  this.faqExpand13=false;
  this.faqExpand14=false;
}
faqExpandToggle1() {
  this.reset();
    this.faqExpand1 = !this.faqExpand1;
  }

  faqExpandToggle2() {
  this.reset();
    this.faqExpand2 = !this.faqExpand2;
  }
   faqExpandToggle3() {
  this.reset();
    this.faqExpand3 = !this.faqExpand3;
  } 
  faqExpandToggle4() {
  this.reset();
    this.faqExpand4 = !this.faqExpand4;
  }  
 faqExpandToggle5() {
  this.reset();
    this.faqExpand5 = !this.faqExpand5;
  }  
 faqExpandToggle6() {
  this.reset();
   this.faqExpand6 = !this.faqExpand6;
  }  
 faqExpandToggle7() {
  this.reset();
    this.faqExpand7 = !this.faqExpand7;
  }  
 faqExpandToggle8() {
  this.reset();
    this.faqExpand8 = !this.faqExpand8;
  }  
 faqExpandToggle9() {
  this.reset();
    this.faqExpand9 = !this.faqExpand9;
  }  
 faqExpandToggle10() {
  this.reset();
    this.faqExpand10 = !this.faqExpand10;
  }	
  faqExpandToggle11() {
  this.reset();
    this.faqExpand11 = !this.faqExpand11;
  }	
 faqExpandToggle12() {
  this.reset();
    this.faqExpand12 = !this.faqExpand12;
  }	
 faqExpandToggle13() {
  this.reset();
    this.faqExpand13 = !this.faqExpand13;
  }	
 faqExpandToggle14() {
  this.reset();
    this.faqExpand14 = !this.faqExpand14;
  }		

 
 appointment_booked() {
    this.navCtrl.navigateRoot(['./appointment-booked']);
  }     
    
}