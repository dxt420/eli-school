import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap, switchMap } from 'rxjs/operators';
import { BehaviorSubject, from, Observable, Subject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Storage } from '@ionic/storage';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/models/user.model';
import { AuthLoginData } from 'src/models/auth.model';

const TOKEN_KEY = 'my-token';

@Injectable({
	providedIn: 'root'
})
export class AuthenticationService {
	// Init with null to filter out the first value in a guard!
	isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
	token = '';
  // private baseUrl = 'https://www.elitelehealth.com/api/api-user-login/'

  private baseUrl = 'https://www.elitelehealth.com/api/api-user-login/'
  private nextUrl = '';

	constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private router: Router,
    private route: ActivatedRoute,
    ) {
		this.loadToken();
	}

	async loadToken() {
		const token = await this.cookieService.get("jwttoken");
    console.log(this.cookieService.get("jwttoken"));
    console.log(this.getUsername());
		if (token && this.getUsername()) {
			console.log('set token: ', token);
			this.token = token;
			this.isAuthenticated.next(true);
		} else {
			this.isAuthenticated.next(false);
		}
	}


  // getToken(){
  //   return this.cookieService.get("jwttoken")
  // }

	// login(credentials: { email; password }): Observable<any> {
	// 	return this.http.post(`https://reqres.in/api/login`, credentials).pipe(
	// 		map((data: any) => data.token),
	// 		switchMap((token) => {
	// 			return from(Storage.set({ key: TOKEN_KEY, value: token }));
	// 		}),
	// 		tap((_) => {
	// 			this.isAuthenticated.next(true);
	// 		})
	// 	);
	// }

	// logout(): Promise<void> {
	// 	this.isAuthenticated.next(false);
	// 	return Storage.remove({ key: TOKEN_KEY });
	// }


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
    this.isAuthenticated.next(false);
    this.router.navigate(['/sign-in'])
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
    console.log(user);
    
    this.cookieService.set('username', user.username)
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
     this.isAuthenticated.next(true);
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
}
