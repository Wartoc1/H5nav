import { EventData, Page } from "@nativescript/core";
import { MyObservable } from "~/MyObservable";

var butt: string //button
var obs: MyObservable

export function navigatingTo(args: EventData){
    const page = <Page>args.object
    obs = page.navigationContext.obs
    page.bindingContext = obs
    
    butt = page.navigationContext.data



    obs.set("tete", butt) //tete skriv tal1
}