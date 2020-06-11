import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-marvelous',
  templateUrl: './marvelous.component.html',
  styleUrls: ['./marvelous.component.css']
})
export class MarvelousComponent implements OnInit {

  @Input() agent:number//1:M;2:P
  public uiData:any;

  constructor(private http:HttpClient) {
  }
  
  ngOnInit(): void {
    let configPath = `/assets/config/marvelous.json`;
    this.http.get(configPath).subscribe(
      (data:any)=>{
        this.uiData = data.data;
      }
    );

  }

}
