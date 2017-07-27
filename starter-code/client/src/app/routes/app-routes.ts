import { Routes } from '@angular/router';

import { EntryListComponent } from '../components/entry-list/entry-list.component';
import { SingEntryComponent } from '../components/sing-entry/sing-entry.component';


export const routes: Routes = [
  {path: "", component: EntryListComponent},
  {path: "entry/:id", component: SingEntryComponent}
];