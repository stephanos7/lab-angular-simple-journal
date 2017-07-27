import { Component, OnInit } from '@angular/core';
import { RetrieveEntriesService } from '../../services/retrieve-entries.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-sing-entry',
  templateUrl: './sing-entry.component.html',
  styleUrls: ['./sing-entry.component.css']
})
export class SingEntryComponent implements OnInit {

entry;

  constructor(
    private router  : Router,
    private route   : ActivatedRoute,
    private entries : RetrieveEntriesService
  ){}

  ngOnInit() {
    this.route.params.subscribe( params =>{
      this.getSingleEntry(params['id']);
    })
  }

  getSingleEntry(id){
    this.entries.retrieveEntry(id)
      .subscribe(entry => {
        this.entry = entry;
        console.log(this.entry)
      })
  }

}
