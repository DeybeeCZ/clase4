import {Component} from '@angular/core'

@Component({
    selector:'app-info',
    templateUrl:'./info.component.html',
    styleUrls:['./info.component.css']
})
export class InfoComponent{
    imgurl:String='http://mall-prod.spincorp.cl/uploads/stores/631f517a549fdc52d9f7fbc1526f5db5.png'
    mensaje:string=`El contenido mostrado en esta pagina es solo para el usi de los colaboradores de
    Boticas y Salud.`
    mensajef5:string='Actualice con f5 si se presenta algún inconveniente.'
}