import { Component, OnDestroy, OnInit } from '@angular/core';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
import { ApiDjangoService } from 'src/services/api-django.service';
import { User } from 'src/models/user.model';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { AuthLoginData } from 'src/models/auth.model';
import { AuthGuardService } from 'src/services/auth-guard.service';
import { AuthenticationService } from 'src/services/authentication.service';

declare var anime: any;
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit , OnDestroy {
  userData:User;
  loginForm: FormGroup;
  email: FormControl;
  password: FormControl;
  authLoginSub: any;
  loginErrors: any;
  tokenExists = false;
  didLogin = false;

  constructor(
    // private  apiDjangoService:  ApiDjangoService,
    // private  authService:  AuthGuardService,
    private authService: AuthenticationService,
    private navCtrl: NavController, 
    private loadingController: LoadingController,
    private alertController: AlertController,
    private route: Router, 
    private statusBar: StatusBar) { }

  // ngOnInit() {
  //   this.statusBar.overlaysWebView(false); 
  //   this.statusBar.backgroundColorByHexString('#585ce5');
  // }

  // login(form){
  //   // this.apiDjangoService.login(form.value).subscribe((res)=>{
  //   //   // this.router.navigateByUrl('home');
  //   //   this.route.navigate(['./tabs']);
  //   // });
  // }

  ngOnInit() {
    this.statusBar.overlaysWebView(false); 
    this.statusBar.backgroundColorByHexString('#585ce5');
    // let email = this.apiDjangoService.getUsername()
    let email = this.authService.getUsername()
    // let username = this.apiDjangoService.getUsername()
    this.email  = new FormControl(email, [
                Validators.required,
                Validators.minLength(0),
                Validators.maxLength(280)
           ])
    // this.username  = new FormControl(email, [
    //         Validators.required,
    //         Validators.minLength(0),
    //         Validators.maxLength(280)
    //    ])
    this.password  = new FormControl("", [
                Validators.required,
                Validators.minLength(4),
                Validators.maxLength(280)
           ])
    this.loginForm = new FormGroup({
        'email': this.email,
        'password': this.password,
        // 'username': this.username
    })
    this.tokenExists = this.authService.checkToken()

  }


  async login(data){
      const loading = await this.loadingController.create();
      await loading.present();

   this.authLoginSub = this.authService.login(data).subscribe(async data=>{
     this.userData = data as User
     console.log(this.userData)
     let token = this.userData.token || null
     let date = new Date(data.expires)
     this.authService.performLogin(token, date)
     this.authService.setUsername(this.userData)
    //  this.authService.authState.next(true);
     
     
    //  this.authState.next(true);
     this.didLogin = true
     await loading.dismiss();
    //  this.navCtrl.navigateRoot(['tabs']);
     this.route.navigateByUrl('/tabs', { replaceUrl: true });
    }, async (error)=>{
      // this.loginErrors = error['error']['detail']
      this.loginErrors = error['error']
      console.log(this.loginErrors)
      await loading.dismiss();
            const alert = await this.alertController.create({
              header: 'Login Error',
              message: this.loginErrors['non_field_errors'],
              buttons: ['OK']
            });
      
            await alert.present();
    })
 }


//  async login(data) {
//   const loading = await this.loadingController.create();
//   await loading.present();

//   this.authService.login(data).subscribe(
//     async (res) => {
//       await loading.dismiss();
//       this.route.navigateByUrl('/tabs', { replaceUrl: true });
//     },
//     async (res) => {
//       await loading.dismiss();
//       const alert = await this.alertController.create({
//         header: 'Login failed',
//         message: res.error.error,
//         buttons: ['OK']
//       });

//       await alert.present();
//     }
//   );
// }

 ngOnDestroy(){
  if (this.authLoginSub){
    this.authLoginSub.unsubscribe()
  }
}


 handleSubmit(event:any, ourLoginDir:any, loginFormGroup:FormGroup){
    event.preventDefault()
    if (ourLoginDir.submitted){
        // interact with the server
        let authLoginData = new AuthLoginData(
            loginFormGroup.value['email'], 
            loginFormGroup.value['password']
            )
        this.login(authLoginData)
        ourLoginDir.resetForm({})
    }
}

  tabs() {
    this.navCtrl.navigateRoot(['./tabs']);
  }
  continue() {
    this.route.navigate(['./register']);
  }
  ngAfterViewInit(): void {
    anime.timeline({ loop: false })
      .add({
        targets: '.logo .logo_img',
        delay: (el, i) => 1000 * i,
        scale: [50, 1],
        opacity: [0, 1],
        duration: 1500,
        easing: "easeOutExpo",
      })
  }
}
