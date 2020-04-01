import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable()
  

export class PlainLoggerService implements LoggerService {

  constructor() { }
  log(msg:string):void{
    console.log(`Message from Plain Logger Service :${msg}`)

  }
  error(errMsg:string):void{
    console.log(`Error Message from Plain logger service : ${errMsg}`)

  }
}
