import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute, Router, CanLoad } from '@angular/router';
import { AuthLoginData } from 'src/models/auth.model';
import { User } from 'src/models/user.model';
import { NavController, Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanLoad {
  private baseUrl = 'https://www.elitelehealth.com/api/api-user-login/'
  private nextUrl = '';
  didLogin = false;
  authState = new BehaviorSubject(false);

  


  constructor(
    private cookieService: CookieService,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private platform: Platform,
    private storage: Storage,
    private navCtrl: NavController, 
    ) {
        // this.platform.ready().then(() => {
        //   this.ifLoggedIn();
        // });
    }

    canLoad() {
    // return this.apiService.didLogin;
    // const isAuthenticated = !!(+localStorage.getItem('token'));
    // const isAuthenticated = !!(+this.getToken());
    console.log(this.getToken());
    // console.log('is authentcated',isAuthenticated);
    
    // console.log('Did Login', isAuthenticated);
      if(this.getToken()){
        console.log("token is there");
        // this.router.navigateByUrl('/');
        return true;
      }else{
        const  navigation = this.router.getCurrentNavigation();
        console.log('nav', navigation);

        let url = '/';
        if(navigation){
          url = navigation.extractedUrl.toString();
        }
        // // this.router.navigateByUrl('/', {queryParams: {returnto: url}});
        // this.router.navigateByUrl('/');
        // this.navCtrl.navigateRoot('sign-in');
        console.log("token is not there");
        // this.router.navigateByUrl('/sign-in');
        // this.navCtrl.navigateRoot('sign-in');
        // this.router.navigateByUrl('/');
        return false;
      }
    }


    ifLoggedIn() {
      // this.storage.get('USER_INFO').then((response) => {
      //   if (this.didLogin) {
      //     this.authState.next(true);
      //   }
      // });

   
        if (this.getToken()) {
          this.authState.next(true);
        }
   
    }

    createHeaders(token?:string){
      let data = {
           "Content-Type": 'application/json',
          //  "Content-Type": 'application/x-www-form-urlencoded',
          
      }
      if (token){
        data['Authorization'] = `JWT ${token}`
      }
       let httpOptions = {
            headers: new HttpHeaders(data)
        }
       return httpOptions
    }
  
    checkToken(){
      return this.cookieService.check("jwttoken")
    }
    getToken(){
      return this.cookieService.get("jwttoken")
    }
    performLogout(msg?:string){
      this.cookieService.delete('jwttoken', '/')
      this.router.navigate(['/login'])
      // this.deleteUsername()
    }
  
    getNextUrl(){
      this.route.queryParams.subscribe(params=>{
          if (params['next']){
              this.nextUrl = params['next']
              switch (this.nextUrl) {
                case "/account/delete":
                  this.nextUrl = null
                  break;
                
                default:
                  // code...
                  break;
              }
          }
      })
      return this.nextUrl
    }
  
    setUsername(user:User){
      this.cookieService.set('username', user.displayName)
    }
  
    deleteUsername(){
      // fixed off video
      this.cookieService.delete('username')
    }
    getUsername():string{
      return this.cookieService.get('username') || null
    }
  
    performLogin(token, expires?:Date, msg?:string){
      let expiryDate = null 
      if (expires){
         expiryDate = expires
      }
       this.cookieService.set('jwttoken', token, expiryDate, "/");
       // this.cookieService.set('user', token, expiryDate, "/"); // set(keyName, value, expires, path)
       const nextUrl = this.getNextUrl()
       if (nextUrl){
         this.router.navigate([nextUrl])
       } else {
         this.router.navigate(['/'])
       }
    }
  
    login(data:AuthLoginData): Observable<any>{
        let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImNmZSIsImV4cCI6MTUxNzQzMDkzNSwiZW1haWwiOiJoZWxsb0B0ZWFtY2ZlLmNvbSIsIm9yaWdfaWF0IjoxNTE3NDMwNjM1fQ.pB6-lE55DBBu0pGv_r85oFaI3OODc69MlAIfno7SM_w'
        let httpOptions = this.createHeaders()
        // let apiLoginEndpoint = `${this.baseUrl}auth/` 
        let apiLoginEndpoint = `${this.baseUrl}` 
        return this.http.post(apiLoginEndpoint, data, httpOptions) // , httpOptions)
    }
    register(data:any): Observable<any>{
        let httpOptions = this.createHeaders()
        let apiRegisterEndpoint = `${this.baseUrl}auth/register` 
        return this.http.post(apiRegisterEndpoint, data, httpOptions)
    }
  
}
