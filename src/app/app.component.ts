import { Component, OnInit, Inject } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';

import { TranslateService } from '@ngx-translate/core';
import { APP_CONFIG, AppConfig } from './app.config';
import { MyEvent } from 'src/services/myevent.services';
import { Constants } from 'src/models/contants.models';
import { ModalController } from '@ionic/angular';
import { VtPopupPage } from './vt-popup/vt-popup.page';
import { AlertController } from '@ionic/angular';
import { Helper } from 'src/models/helper.models';
import { Router } from '@angular/router';
import { ApiDjangoService } from 'src/services/api-django.service';
import { AuthGuardService } from 'src/services/auth-guard.service';

import { Storage } from '@ionic/storage';
// import { IonicStorageModule } from '@ionic/storage-angular';

// import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  activePage = 1;
  rtlSide = "left";
  constructor(
    @Inject(APP_CONFIG) public config: AppConfig,
    private platform: Platform, 
    private navCtrl: NavController, 
    // public apiService: ApiDjangoService, 
    // private  authService:  AuthGuardService,
    public router: Router,
    private route: Router, 
    private splashScreen: SplashScreen, 
    private statusBar: StatusBar, 
    private modalController: ModalController,
    private translate: TranslateService, 
    private myEvent: MyEvent, 
    private storage: Storage,
    public alertController: AlertController) {
    this.initializeApp();
    this.myEvent.getLanguageObservable().subscribe(value => {
      this.navCtrl.navigateRoot(['./']);
      this.globalize(value);
    });
  }

  initializeApp() {
    if (this.config.demoMode && this.platform.is('cordova') && !window.localStorage.getItem(Constants.KEY_IS_DEMO_MODE)) {
      window.localStorage.setItem(Constants.KEY_IS_DEMO_MODE, "true");
      this.language();
      setTimeout(() => this.presentModal(), 30000);
    } else {
      this.navCtrl.navigateRoot(['./']);
    }
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.show();
      this.statusBar.overlaysWebView(false);
      this.statusBar.backgroundColorByHexString('#000000');
      let defaultLang = window.localStorage.getItem(Constants.KEY_DEFAULT_LANGUAGE);
      this.globalize(defaultLang);
      setTimeout(() => this.splashScreen.hide(), 3000);
      this.darkModeSetting();
      this.route.events.subscribe(value => {
      });
      
      // this.authService.authState.subscribe(state => {
      //   if (state) {
      //     console.log('True State');
      //     console.log(state);
      //     this.router.navigate(['tabs']);
      //     // this.router.navigateByUrl("/");
      //     this.navCtrl.navigateRoot('tabs');
      //     // this.navCtrl.navigateRoot(['./tabs/home']);
          
      //   } else {
      //     console.log('False State');
      //     console.log(state);
      //     // this.router.navigate(['sign-in']);
      //     // this.router.navigateByUrl("/sign-in");
      //     this.navCtrl.navigateRoot('sign-in');
      //   }
      // });
    });
  }

  async ngOnInit() {
    // If using a custom driver:
    // await this.storage.defineDriver(MyCustomDriver)
    await this.storage.create();
  }

  accessAuthorizedWithUrl() {
    this.router.navigateByUrl("/sign-in")
  }


  globalize(languagePriority) {
    this.translate.setDefaultLang("en");
    let defaultLangCode = this.config.availableLanguages[0].code;
    this.translate.use(languagePriority && languagePriority.length ? languagePriority : defaultLangCode);
    this.setDirectionAccordingly(languagePriority && languagePriority.length ? languagePriority : defaultLangCode);
  }

  setDirectionAccordingly(lang: string) {
    switch (lang) {
      case 'iw':
      case 'ar':
        this.rtlSide = "rtl";
        break;
      default:
        this.rtlSide = "ltr";
        break;
    }
  }


  async presentModal() {
    const modal = await this.modalController.create({
      component: VtPopupPage,
    });
    return await modal.present();
  }

  language(): void {
    this.navCtrl.navigateRoot(['./change-language']);
  }

  darkModeSetting() {
    document.body.setAttribute('class', (Helper.getThemeMode(this.config.defaultThemeMode) == Constants.THEME_MODE_DARK ? 'dark-theme' : 'light-theme'));
  }
}
