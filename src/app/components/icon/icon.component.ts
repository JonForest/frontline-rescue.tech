import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  private _iconType: string;
  private _iconWidth: number;
  private _iconHeight: number;
  private _iconFill: string;

  @Input()
  set iconType (value) {
    this._iconType = value;
  }

  get iconType () {
    return this._iconType;
  }

  @Input()
  set iconWidth (value) {
    if (!value) {
      this._iconWidth = 24; // default icon width
    }
    this._iconWidth = value;
  }

  get iconWidth () {
    return this._iconWidth;
  }

  @Input()
  set iconHeight (value) {
    if (!value) {
      this._iconHeight = 24; // default icon height
    }
    this._iconHeight = value;
  }

  get iconHeight () {
    return this._iconHeight;
  }

  @Input()
  set iconFill (value: string) {
    if (!value) {
      this._iconFill = '#45494C'; // default icon fill
    }
    this._iconFill = value;
  }

  get iconFill () {
    return this._iconFill;
  }

  get iconUrl () {
    return 'assets/icons/icons.svg#icon-' + this.iconType;
  }

  get iconClassName () {
    return 'icon-' + this.iconType;
  }

  ngOnInit () {
  }

}
