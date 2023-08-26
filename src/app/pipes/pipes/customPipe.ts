import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name:'mul'})
export class CustomPipe implements PipeTransform{
    transform(num:number){
        return num*num;
    }
}
