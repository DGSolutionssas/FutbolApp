import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, Platform } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';

/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  constructor(public navCtrl: NavController, platform: Platform, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      splashScreen.hide();
    });

    this.navCtrl.push(HomePage);
  }

}
