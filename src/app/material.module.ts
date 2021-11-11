import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatRadioModule } from "@angular/material/radio";
import { MatOptionModule } from "@angular/material/core";
import { MatSelectModule } from "@angular/material/select";


@NgModule({
    exports: [ 
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatRadioModule,
        MatOptionModule,
        MatSelectModule
    ]
})

export class MaterailModule {}