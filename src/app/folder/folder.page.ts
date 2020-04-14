import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, ActionSheetController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})

export class FolderPage implements OnInit {
  public folder: string;
  weatherData: any;
  summaryIcon: string;
  weatherResult: false;
  loading: any;
  currentWeather: any;
  // tslint:disable-next-line: max-line-length
  constructor(private activatedRoute: ActivatedRoute , public modalController: ModalController , private actionsheetController: ActionSheetController,
              private animationCtrl: AnimationController ) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    const animation = this.animationCtrl
    .create()
    .duration(1500)
    .iterations(Infinity)
    .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
    .fromTo('opacity', 1, 0.2);

    animation.play();
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: {
        firstName: 'Nishant',
        lastName: 'Hulwan',
        middleInitial: 'G'
      }
    });
    return await modal.present();
  }
  async shareSocialNw() {
    const actionSheet = await this.actionsheetController.create({
      header: 'Social sharing',
      buttons: [{
        text: 'Share via Instagram',
        role: 'Descriptive',
        icon: 'logo-instagram',
        cssClass: 'InstagramIcon',
        handler: () => {
          console.log('Instagram share');
        }
      },
      {
        text: 'Share via Twitter',
        icon: 'logo-twitter',
        cssClass: 'twitterIcon',
        handler: () => {
          console.log('Twitter share');
        }
       },
       {
        text: 'Share via WhatsApp',
        icon: 'logo-WhatsApp',
        cssClass: 'WhatsAppIcon',
        handler: () => {
          console.log('WhatsApp Share');
        }
      },
      {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel Clicked');
        }

      }]
    });
    await actionSheet.present();
  }
}
