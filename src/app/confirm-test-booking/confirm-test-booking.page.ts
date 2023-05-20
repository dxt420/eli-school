import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
// import { FileUploadComponent } from 'src/components/app-file-upload-control';
import { ApiDjangoService } from 'src/services/api-django.service';
import { AuthenticationService } from 'src/services/authentication.service';

@Component({
  selector: 'app-confirm-test-booking',
  templateUrl: './confirm-test-booking.page.html',
  styleUrls: ['./confirm-test-booking.page.scss']
})
export class ConfirmTestBookingPage implements OnInit {


  lab: any;
  school= [];
  currentPage = 1;
   
  students= [];

  labForm: FormGroup;

  chosenOne: any;

  selecTedValue: any;

  setImg: any;
  // constructor(private route: Router,  private statusBar: StatusBar) { }

  constructor(private route: ActivatedRoute, 
              private router: Router,
              private djangoService: ApiDjangoService,
              private loadingCtrl: LoadingController,
              private authService: AuthenticationService,
              private fb: FormBuilder) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        // console.log('hi');
        this.lab = this.router.getCurrentNavigation().extras.state.lab;
        this.school = this.router.getCurrentNavigation().extras.state.school;
        // console.log(this.school);
        // console.log(this.lab);
      }
    });


    this.labForm = this.fb.group({
      student: ['', Validators.required],
      // time: ['', Validators.required],
      // date: ['', Validators.required],
      file: ['', Validators.required]
    });
  }


  ngOnInit() {
    this.loadData();
  }


   openFileDialog = () => {
    (document as any).getElementById("file-upload").click();
 };
 
  setImage  = (_event: any) => {
   let f = _event.target.files![0];
  
 }

  async submitForm() {
    console.log(this.labForm.value);

    console.log(this.setImg)

    

    const loading = await this.loadingCtrl.create({
      message: 'Loading..',
      spinner: 'bubbles',
    });
    // console.log(this.school[0] );
    // console.log(this.labForm.value);
    await loading.present();
    // event.preventDefault();
    // if (ourLoginDir.submitted){
      // console.log(this.doctor.name );
      

      // const formData =  new FormData();

      const att =  (document as any).getElementById("file-upload").files[0];
      

      console.log(att);

      console.log(att.name);

      // const reader = new FileReader();
      // reader.onloadend = () => {
      //   const formData = new FormData();
      //   const blobFile = new Blob([reader.result], { type: att.type });
      //   formData.append("attachment", blobFile, att.name);
      //   formData.append('laboratory', this.lab.id);
      //   formData.append("notes", 'Student Test Request');
      //   // formData.append("consultation_time", this.labForm.value['suggestedTime']);
      //   formData.append("student", this.labForm.value['student']);
      //   // formData.append("attachment", att);
      //   formData.append("school", this.school[0].id );
      //   formData.append("status", 'pending');


      //     // const data = {
      // //   'laboratory' :  this.lab.id ,
      // //   'notes': 'Student Test Request',
      // //   'consultation_time' : this.labForm.value['suggestedTime'],
      // //   'student' : parseInt(this.labForm.value['student']) ,
      // //   'attachment' : att,
      // //   'school' : this.school[0].id ,
      // //   'status' : 'pending' 
        
      // // }

      //   // POST formData call

      //   this.djangoService.sendTestRequest(formData,this.authService.getUsername()).subscribe(
      //     (res) => {
      //       loading.dismiss();
      //       console.log(res);
            
       
      //     },
      //     (err) => {
      //       console.log(err);
      //       loading.dismiss();
      //     }
      //   );


      // };
      // reader.readAsArrayBuffer(att);

      // this.router.navigate(['./my-lab-tests']);

     

      


      // student = models.ForeignKey(Student, on_delete=models.CASCADE)
      // date_created = models.DateTimeField(auto_now_add=True)
      // laboratory = models.ForeignKey(Laboratory, on_delete=models.CASCADE)
      // notes = models.TextField()
      // # fee = models.CharField(max_length=254)
      // school = models.ForeignKey(School,on_delete=models.CASCADE)
      // status = models.CharField(max_length=254)
      // attachment = models.FileField(upload_to='test_attachment', blank=True)


      // this.labForm.

      //   const att =  (document as any).getElementById("file-upload").files[0];
      

      // console.log(att);


      // const data = {
      //   'laboratory' :  this.lab.id ,
      //   'notes': 'Student Test Request',
      //   'student' : parseInt(this.labForm.value['student']) ,
      //   'attachment' : att,
      //   'school' : this.school[0].id ,
      //   'status' : 'pending' 
        
      // }


      const formData = new FormData();
        // const blobFile = new Blob([reader.result], { type: att.type });
        formData.append("attachment", att, att.name);
        formData.append('laboratory', this.lab.id+'');
        formData.append("notes", 'Student Test Request');
        // formData.append("consultation_time", this.labForm.value['suggestedTime']);
        formData.append("student", this.labForm.value['student']);
        // formData.append("attachment", att);
        formData.append("school", this.school[0].id );
        formData.append("status", 'pending');


      // var options = {
      //   'enctype': 'multipart/form-data;'
        
      // };
      



      // console.log(formData);

      // console.log(formData.get('laboratory'));
// 
      // console.log(formData.get('attachment'));
      

      // sendConsultation
      this.djangoService.sendTestRequest(formData,this.authService.getUsername()).subscribe(
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

      this.router.navigate(['./appointment-booked']);

      
 
    
  }


  selectCategory(param){
    // console.log('Select Category');
    // console.log(param);

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



  my_lab_tests() {
    const formData = new FormData();
    formData.append('file', this.labForm.get('file').value);
    console.log(formData);
      this.router.navigate(['./my-lab-tests']);
    } 
  
}
