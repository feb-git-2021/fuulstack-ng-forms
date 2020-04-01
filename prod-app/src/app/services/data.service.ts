import {Injectable} from '@angular/core'

import { LoggerService } from './logger.service';

@Injectable({
    providedIn:'root'
})

export class DataService{
    constructor(private _logger:LoggerService){}

}