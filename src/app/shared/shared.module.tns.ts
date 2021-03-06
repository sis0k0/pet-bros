import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

import { RouterModule } from '../common';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { FirebaseModule } from '../firebase';

import { PetFinderService, API_KEY_TOKEN } from 'petfinder-angular-service';

@NgModule({
  declarations: [],
  exports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    RouterModule,
    FirebaseModule
  ],
  providers: [
    { provide: API_KEY_TOKEN, useValue: '3b3fe2619dfd3c4e94c2d7efd24592e1' },
    PetFinderService
  ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class SharedModule { }
