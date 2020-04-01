import { LoggerService } from './logger.service';
import {DataService} from './data.service'
import { ProductDetailComponent } from '../products/product-detail.component';
import { ProductService } from '../products/product.service';
import { HttpClient } from '@angular/common/http';

export function dataServiceFactory(logger:LoggerService){
    let dataService : DataService=new DataService(logger)

    logger.log(`Creating instance of DataService with factory function`)
    return dataService
}