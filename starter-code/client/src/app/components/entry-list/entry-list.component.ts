import { Component, OnInit } from '@angular/core';
import { RetrieveEntriesService } from '../../services/retrieve-entries.service';


@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {

entries;

  constructor(private entry: RetrieveEntriesService ) { }

  ngOnInit() {
    this.entry.retrieveEntries()
                .subscribe((entries) =>{
                  this.entries = entries;
                });
  }

}
