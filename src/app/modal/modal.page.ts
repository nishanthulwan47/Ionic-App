import { Component, OnInit, Input } from '@angular/core';
import { stringify } from 'querystring';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'modal-page',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})

export class ModalPage implements OnInit {

  // Data passed in by componentProps
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() middleInitial: string;

  ngOnInit() {
    console.log(this.firstName);
    console.log(this.middleInitial);
    console.log(this.lastName);
  }

}
