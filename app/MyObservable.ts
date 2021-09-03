import { EventData, Frame, Observable } from "@nativescript/core"

var activeTjek : number

export class MyObservable extends Observable{

    constructor(){
        super()
    }

private _tal1 : number;
public get tal1() : number {
    return this._tal1;
    
}
public set tal1(v : number) {
    this._tal1 = v;
    this.notifyPropertyChange("tal1", v)
}


private _tal2 : number;
public get tal2() : number {
    return this._tal2;
}
public set tal2(v : number) {
    this._tal2 = v;
    this.notifyPropertyChange("tal2", v)
}


private _res : number;
public get res() : number {
    return this._res;
}
public set res(v : number) {
    this._res = v;
    this.notifyPropertyChange("res", v)
}


///////////////////////////////////////


onGoSecond(args: EventData){
    console.log(args.object.get("id"))

     var name: string 

    // if(args.object.get("id") == "btn1")
    // name = "tal1"
    // else
    // name = "tal2"

    switch (args.object.get("value")) {
        case "1": { //Tjekker Value og flytter dig til Hent Tal 1 page
            name = "indsæt 1. tal"
            activeTjek = args.object.get("value")
            break;
        }

        case "2" : { // Tjekker Value og flytter dig til hent tal 2 page
            name = "indsæt 2. tal"
            activeTjek = args.object.get("value")
            break;
        }           
    
        default:
            break;
    }

    var navigationOption = {
        moduleName : "setNumber/setNumber-page",
        context: {
            name: name, //første Name var Data Test
            obs: this
        }
    }
    Frame.topmost().navigate(navigationOption)
}

onAdd(){
    this.res = this.tal1 + this.tal2
}

onMinus(){
    this.res = this.tal1 - this.tal2
}

onTimes(){
    this.res = this.tal1 * this.tal2
}

onDivide(){
    this.res = this.tal1 / this.tal2
}

onSetNumber(args: EventData){
    var colector: number = this.get("txtFrom")
    switch (activeTjek + "") {
        case "1": {
            this.tal1 =+ colector
            break;
        }
        
        case "2": {
            this.tal2 =+ colector
            break;
        }
        
        default: {
            break;
        }
    }
        
    this.set("txtFrom", "")

    Frame.goBack()
}
}