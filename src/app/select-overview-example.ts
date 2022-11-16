import {Component} from '@angular/core';

interface SearchScope {
  field: string,
  name: string
}

@Component({
  selector: 'select-overview-example',
  templateUrl: 'select-overview-example.html',
})
export class SelectOverviewExample {
  terms = '';
  scope: SearchScope;
  scopes: Array<SearchScope> = [
    {field: 'firstName', name: 'First name'},
    {field: 'lastName', name: 'Last name'},
    {field: 'matter', name: 'Matter'},
    {field: 'form', name: 'Form'}
  ];
}
