import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-error-validation',
  templateUrl: './error-validation.component.html',
  styleUrls: ['./error-validation.component.scss']
})
export class ErrorValidationComponent implements OnInit {
   @Input() validationName=''
  constructor() { }

  ngOnInit(): void {
  }

}
