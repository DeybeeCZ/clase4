import {Component} from '@angular/core'

@Component({
    selector:'app-action',
    templateUrl:'./action.component.html',
    styleUrls:['./action.component.css']
})
export class ActionComponent{
    textoEvento:String = ''
    hacerClick(){
        alert('hizo click');
    }
    entraRaton(){
        this.textoEvento="esta entrando el raton";
    }
    saleRaton(){
        this.textoEvento="";
    }
}