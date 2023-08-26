import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
name = 'kaveri';
place='BANGALORE';
price=20;
date = new Date();
selectedFile(data:any){
  console.log('comes');
  console.log(data.target.value);
}
selectedValue(event:any){
  console.log(event.target);
}
}
