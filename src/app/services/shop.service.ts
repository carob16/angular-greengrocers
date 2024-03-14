import { Injectable, inject } from '@angular/core';
import { Item } from '../models/item';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  http = inject(HttpClient);
  


  get storeItems(): Promise<Item[]>{ 
  
      // @ts-ignore
      return firstValueFrom(this.http.get(`${environment.apiUrl}groceries`)); 
    }

    get fruits(): Promise<Item[]>{ 
    
      // @ts-ignore
      return firstValueFrom(this.http.get(`${environment.apiUrl}groceries?type=fruit`)); }

      get vegetables(): Promise<Item[]>{ 
  
        // @ts-ignore
        return firstValueFrom(this.http.get(`${environment.apiUrl}groceries?type=vegetable`)); }
      
  
  
  
}
