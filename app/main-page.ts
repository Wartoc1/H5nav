import { EventData, NavigatedData,Label, Observable, Page } from '@nativescript/core'
import { MyObservable } from './MyObservable'

var FirstNum: Label
var SecNum: Label
var res: Label

var obs: MyObservable


export function navigatingTo(args: NavigatedData) {

  if(!args.isBackNavigation){
  const page = <Page>args.object
 
  obs = new MyObservable()
  
  page.bindingContext = obs
}
else{
  obs.set("tal1", obs.tal1) 
  obs.set("tal2", obs.tal2) 
  console.log(obs.tal1);
  
}

}
