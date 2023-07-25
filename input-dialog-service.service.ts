import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { GroceriesServiceService } from './groceries-service.service';

@Injectable({
  providedIn: 'root'
})
export class InputDialogServiceService {

  constructor(public alertCtrl: AlertController, public dataService: GroceriesServiceService) { 
  }

  async showPrompt(item?: any, index?: any) {
    const prompt = await this.alertCtrl.create({
      header: item ? 'Edit Item': 'Add Item',
      message: item ? 'Edit Item' : 'Enter item...',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Name',
          value: item ? item.name : null
        },
        {
          name: 'quantity',
          type: 'number',
          placeholder: 'Quantity',
          value: item ? item.quantity : null
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: (data: any) => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: (data: any) => {
            console.log('Saved clicked', data);
            if (index !== undefined) {
            this.dataService.editItem(data, index);
            }
            else {
              this.dataService.addItem(data);
            }
          }
        }
      ]
    });
    await prompt.present();
  }
}
