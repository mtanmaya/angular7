import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-cache',
  templateUrl: './cache.component.html',
  styleUrls: ['./cache.component.scss']
})
export class CacheComponent implements OnInit {

  caches: Object;

  constructor(private data: RestService) { }

  ngOnInit() {
    this.data.getCaches().subscribe(data => {
      this.caches = data;
    });
  }
}
