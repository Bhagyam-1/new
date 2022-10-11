import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DocumentComponent } from './component/document/document.component';
import { ImagesComponent } from './component/images/images.component';
import { DocumentViewComponent } from './component/document-view/document-view.component';
import { ImageService } from './service/image.service';
import { EditorComponent } from './component/editor/editor.component';
import { EditorCellComponent } from './component/editor-cell/editor-cell.component';

@NgModule({
  declarations: [
    AppComponent,
    DocumentComponent,
    ImagesComponent,
    EditorComponent,
    DocumentViewComponent,
    EditorCellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
