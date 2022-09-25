import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseComponent } from 'src/app/base/base.component';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent extends BaseComponent implements OnInit {
  @Input() parent!: FormGroup;

  constructor() {
    super();
  }

  ngOnInit(): void {}

  get street() {
    return this.parent.get('address.street');
  }

  get city() {
    return this.parent.get('address.city');
  }

  get state() {
    return this.parent.get('address.state');
  }

  get zip() {
    return this.parent.get('address.zip');
  }
}
