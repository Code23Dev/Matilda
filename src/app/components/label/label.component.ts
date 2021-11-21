import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {

  constructor() { }
  @Input() public forForLabel = '';
  @Input() public classForLabel = '';
  @Input() public textForLabel = '';
  ngOnInit(): void {
  }

}
