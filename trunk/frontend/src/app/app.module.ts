import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { DemoTypescriptComponent } from './demo-typescript/demo-typescript.component';

// DataShare
import { DemoDatashareComponent } from './demo-datashare/demo-datashare.component';
import { DemoDataShareInputComponent } from './demo-datashare-input/demo-datashare-input.component';
import { DemoDataShareOutputComponent } from './demo-datashare-output/demo-datashare-output.component';
import { DemoDataShareViewchildComponent } from './demo-datashare-viewchild/demo-datashare-viewchild.component';

// Pipe
import { CapitalizePipe } from './capitalize/capitalize.pipe';
import { DemoPipeComponent } from './demo-pipe/demo-pipe.component';

// Routing
import { AppRoutingModule } from './app-routing.module';
import { DemoRoutingParametersComponent } from './demo-routing-parameters/demo-routing-parameters.component';

// Directive
import { DemoDirectiveBuildinComponent } from './demo-directive-buildin/demo-directive-buildin.component';
import { UnlessDirective } from './directive/unless.directive';
import { DemoDirectiveStructuralComponent } from './demo-directive-structural/demo-directive-structural.component';
import { HighlightDirective } from './directive/highlight.directive';
import { DemoDirectiveAttributeComponent } from './demo-directive-attribute/demo-directive-attribute.component';
import { DemoFormTemplateComponent } from './demo-form-template/demo-form-template.component';
import { DemoDatabindComponent } from './demo-databind/demo-databind.component';

// Form
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
//import { DemoFormModelComponent } from './demo-form-model/demo-form-model.component';

// Service
import { DatashareService } from './service/datashare.service';
import { DemoDatashareServiceComponent } from './demo-datashare-service/demo-datashare-service.component';
import { DemoDatashareSiblingComponent } from './demo-datashare-sibling/demo-datashare-sibling.component';
import { DemoRxjsComponent } from './demo-rxjs/demo-rxjs.component';

// HttpClient
import { DemoHttpclientComponent } from './demo-httpclient/demo-httpclient.component';
import { HttpClientModule } from '@angular/common/http';
import { DemoHtmlcssComponent } from './demo-htmlcss/demo-htmlcss.component';

// Test
import { TestJasmineMockSpyComponent } from './test-jasmine-mock-spy/test-jasmine-mock-spy.component';
import { TestAuthService } from './service/test-auth.service';
import { TestAngularbedComponent } from './test-angularbed/test-angularbed.component';
import { TestAsyncComponent } from './test-async/test-async.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { TestFormModelComponent } from './test-form-model/test-form-model.component';


// CourseWork
import { CwFinancialToolComponent } from './cw-financial-tool/cw-financial-tool.component';
import { CwTodolistComponent } from './cw-todolist/cw-todolist.component';
import { DemoCsvComponent } from './demo-csv/demo-csv.component';
import { AsearchComponent } from './asearch/asearch.component';
import { AregisterComponent } from './aregister/aregister.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatSelectModule, MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule} from '@angular/material';
import 'hammerjs';


//csv 
import { PapaParseModule } from 'ngx-papaparse';
import { AsdataTableComponent } from './asdata-table/asdata-table.component';
import { AregisterUpdateComponent } from './aregister-update/aregister-update.component';

@NgModule({
  // a list of the component in this module
  declarations: [

    AppComponent,

    // Basic
    DemoTypescriptComponent,
    DemoDatabindComponent,

    // DataShare
    DemoDataShareInputComponent,
    DemoDataShareOutputComponent,
    DemoDataShareViewchildComponent,
    DemoDatashareComponent,

    // Pipe
    CapitalizePipe,
    DemoPipeComponent,
    // Directive
    DemoDirectiveBuildinComponent,
    UnlessDirective,
    DemoDirectiveStructuralComponent,
    HighlightDirective,
    DemoDirectiveAttributeComponent,
    DemoRoutingParametersComponent,
    DemoFormTemplateComponent,
   // DemoFormModelComponent,

    // DataShare Service
    DemoDatashareServiceComponent,
    DemoDatashareSiblingComponent,
    DemoRxjsComponent,

    // HttpClient
    DemoHttpclientComponent,
    DemoHtmlcssComponent,

    // Test
    TestJasmineMockSpyComponent,
    TestAngularbedComponent,
    TestAsyncComponent,
    TestComponentComponent,
    TestFormModelComponent,

    // Coursework
    CwFinancialToolComponent,
    CwTodolistComponent,
    DemoCsvComponent,
  AsearchComponent,
  AregisterComponent,
  AsdataTableComponent,
  AregisterUpdateComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  // exported and use in another module
  exports: [],

  // imported from other modules
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PapaParseModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule
    
    
  ],

  // define service for injector
  providers: [DatashareService, TestAuthService],

  // root component to load into browser
  bootstrap: [AppComponent]
})
export class AppModule { }
