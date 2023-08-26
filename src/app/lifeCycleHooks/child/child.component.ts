import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnChanges,OnDestroy{

@Input() data:string ='';
ngOnChanges(): void { // wokrs when input property changes
  console.log('on changes');
}

ngOnInit(): void {
 console.log('on init');
}
ngOnDestroy(): void {
  console.log('destroy');
}

}
