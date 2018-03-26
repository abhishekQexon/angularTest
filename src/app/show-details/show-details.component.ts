import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../details.service';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {

  constructor(private detailService:DetailsService) { }
  details
  ngOnInit() {
    this.detailService.details.subscribe(res =>{
      this.details = res
    })
  }

}
