import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DocumentViewComponent } from './component/document-view/document-view.component';
import { EditorComponent } from './component/editor/editor.component';
import { EditorCellComponent } from './component/editor-cell/editor-cell.component';


@NgModule({
  declarations: [
    AppComponent,
    DocumentViewComponent,
    EditorComponent,
    EditorCellComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
