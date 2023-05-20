import { Component, OnInit, ViewChild } from '@angular/core'; 
import { SelectDayPage } from '../select-day/select-day.page';  
import { InfiniteScrollCustomEvent, LoadingController, ModalController } from '@ionic/angular';
import { IonDatetime } from '@ionic/angular';
import { format, parseISO } from 'date-fns'
import { ActivatedRoute, Router } from '@angular/router';
import { ApiDjangoService } from 'src/services/api-django.service';
import { AuthenticationService } from 'src/services/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pill-reminder',
  templateUrl: './pill-reminder.page.html',
  styleUrls: ['./pill-reminder.page.scss'],
})
export class PillReminderPage implements OnInit {

  pharmacy: any;


  pharmacyForm: FormGroup;
  
  school = [];
  currentPage = 1;


  students= [];
  
  chosenOne: any;


  selecTedValue: any;


  

  
  selectTimeA = '';
  selectTimeB = '';
  modes = ['date-time'];
  showPicker = false;
  dateValue = format(new Date(), 'yyyy-MM-dd') + 'T09:00:00.000Z';
  @ViewChild(IonDatetime) datetime: IonDatetime;
  // constructor(private modalController: ModalController) { }

  constructor(private route: ActivatedRoute,
    private router: Router,
    private modalController: ModalController,
    private djangoService: ApiDjangoService,
    private loadingCtrl: LoadingController,
    private authService: AuthenticationService,
    private fb: FormBuilder) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        console.log('hi');
        this.pharmacy = this.router.getCurrentNavigation().extras.state.pharmacy;
        console.log(this.pharmacy);
      }
    });

    this.pharmacyForm = this.fb.group({
      student: ['', Validators.required],
      // suggestedTime: ['', Validators.required],
      // suggestedDate: ['', Validators.required],
      file: ['', Validators.required]
    });
  }


  ngOnInit(): void {
    this.loadData();
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

  openFileDialog = () => {
    (document as any).getElementById("file-upload").click();
 };
 
  setImage = (_event: any) => {
   let f = _event.target.files![0];
   

  //  (document as any).getElementById("viewer").value = f.name;
 }


 async submitForm() {
  console.log(this.pharmacyForm.value);



  

  const loading = await this.loadingCtrl.create({
    message: 'Loading..',
    spinner: 'bubbles',
  });

  await loading.present();


    const att =  (document as any).getElementById("file-upload").files[0];
    

    console.log(att);

    console.log(att.name);

   
    const formData = new FormData();
      // const blobFile = new Blob([reader.result], { type: att.type });
      formData.append("attachment", att, att.name);
      formData.append('pharmacy', this.pharmacy.id);
      formData.append("notes", 'Student Prescription Note');
      // formData.append("consultation_time", this.labForm.value['suggestedTime']);
      formData.append("student", this.pharmacyForm.value['student']);
      // formData.append("attachment", att);
      formData.append("school", this.school[0].id );
      formData.append("status", 'pending');



    // sendConsultation
    this.djangoService.sendPrescriptionNote(formData,this.authService.getUsername()).subscribe(
      (res) => {
        loading.dismiss();
        console.log(res);
        
   
      },
      (err) => {
        console.log(err);
        loading.dismiss();
      }
    );

    // this.navCtrl.navigateRoot(['./my-lab-tests']);

    // this.router.navigate(['./my-pharmacy-orders']);

    this.router.navigate(['./appointment-booked']);

  
}

  select_day(){
    this.modalController.create({component:SelectDayPage}).then((modalElement)=>
    {
      modalElement.present();
    }
    )
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

  close() {
    this.datetime.cancel(true);
  }
  select() {
    this.datetime.confirm(true);
  }

  timeChanged1(value) {
    this.dateValue = value;
    this.selectTimeA = format(parseISO(value), 'HH:mm a');
  }
  timeChanged2(value) {
    this.dateValue = value;
    this.selectTimeB = format(parseISO(value), 'HH:mm a');
  }
}
