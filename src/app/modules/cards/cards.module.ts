import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatExpansionModule} from '@angular/material/expansion';

import { CardsComponent } from './cards.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [CardsComponent],
    imports: [ CommonModule,MatTabsModule,MatExpansionModule, FormsModule,ReactiveFormsModule,
        MatGridListModule,MatFormFieldModule,MatToolbarModule,MatInputModule,MatCheckboxModule, RouterModule.forChild([
        {path: '', component: CardsComponent}
    ]) ],
    exports: [],
    providers: [],
})
export class CardsModule {}