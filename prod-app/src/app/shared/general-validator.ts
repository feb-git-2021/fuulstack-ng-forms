import {FormGroup} from '@angular/forms'
import { Container } from '@angular/compiler/src/i18n/i18n_ast'


export class GeneralValidator{
    constructor (private _validationMsgs:{[key:string]:{[key:string]:string}}){}
    processMsgs(container:FormGroup):{[key:string]:string}{
        const messages ={}
        for(const controlKey in container.controls){
            if(container.controls.hasOwnProperty(controlKey)){
                const c =container.controls[controlKey]
                if(c instanceof FormGroup){
                    const childMessages = this.processMsgs(c)
                    Object.assign(messages,childMessages)
                }else{
                    if(this._validationMsgs[controlKey]){
                        messages[controlKey]=''
                        if((c.dirty || c.touched) && c.errors){
                            Object.keys(c.errors).map(messageKey=>{
                                if(this._validationMsgs[controlKey][messageKey]){
                                    messages[controlKey] += this._validationMsgs[controlKey][messageKey] + ' '
                                }
                            })
                        }
                    }
                }
            }
            
        }
        return messages
    }

    getCountOfErrors(container:FormGroup):number{
        let errorCount=0
        for(const controlKey in container.controls ){
            if(container.controls.hasOwnProperty(controlKey)){
                if(container.controls[controlKey].errors){
                    errorCount += Object.keys(container.controls[controlKey].errors).length
                }
            }
        }
        return errorCount
    }
}