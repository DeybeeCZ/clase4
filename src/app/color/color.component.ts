import {Component} from '@angular/core'

@Component({
    selector:'app-color',
    templateUrl:'./color.component.html',
    styleUrls:['./color.component.css']
})
export class ColorComponent{
    selectedColor:any;
    claseColor:boolean=false;
    greenClass(){
        this.claseColor=true
    }
    myClass(){
        return {'background-color':this.selectedColor}
    }
}