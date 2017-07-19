import {Component,OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,    
    OnDestroy } from '@angular/core'


@Component({
    selector:'app-menu',
    templateUrl:'./menu.component.html'
})
export class MenuComponent  implements OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,    
    OnDestroy{
 
 title:string='Boticas y Salud';
 nombreBoton:string = 'Mostrar';
 items:Array<any>=[
     {label:'Inicio',link:"http://google.com",visible:true},
     {label:'Historia',link:'#',visible:true},
     {label:'Mision',link:'#',visible:true},
     {label:'Vision',link:'#',visible:true}
     ]

mostrarItem(){
    if(this.items[1].visible===true){
        this.items[1].visible=false;
        this.nombreBoton='Mostrar';
    }else{
        this.items[1].visible=true;
        this.nombreBoton='Ocultar';
    }
    
} 
ngOnChanges(){
     console.log('se ejecuta el onchanges');
 }
 ngOnInit(){
     console.log('se esta cargando el menu');
 }   
ngDoCheck(){
    console.log('DO-CHECK');
}  
ngAfterContentInit(){
    console.log('AfterContentInit');
}
ngAfterViewInit(){
    console.log('ngAfterViewInit');
}
ngAfterViewChecked(){
    console.log('ngAfterViewChecked');
}
ngAfterContentChecked(){
    console.log('AfterContentChecked');
}
 ngOnDestroy(){
     console.log('DESTRUYENDO EL COMPONENTE');
 }     
}