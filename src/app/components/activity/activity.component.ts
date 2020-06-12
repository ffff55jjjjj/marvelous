import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';

declare var layui;
@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  uiData: any;
  configPath = `/assets/config/activity.json`;
  constructor(
    private http: HttpClient
    ) { }

  ngOnInit(): void {
    layui.use('element', function(){
      var element = layui.element;
    });
    this.getActConfigData((data)=>{
      this.uiData = data;
    });
  }

  getActConfigData(cb){
    this.http.get(this.configPath).subscribe(
      (data:any)=>{
        cb(data.data);
      }
    );
  }

  iconClick(e){
    let $ele = $(e.target);
    this.iconToggle($ele);
  }

  iconToggle(element){
    let id = element.attr('id');
    if(element.hasClass('like-icon-active')){
      element.removeClass("like-icon-active");
      this.minusLikeCount(id);
    }else{
      element.addClass("like-icon-active");
      this.addLikeCount(id);
    }
  }

  addLikeCount(id: number) {
    this.uiData.map((x) => {
      x.items.map((y)=>{
        if(y.id == id){
          y.like ++;
        }
      });
    });
  }

  minusLikeCount(id:number){
    this.uiData.map((x) => {
      x.items.map((y)=>{
        if(y.id == id){
          y.like --;
        }
      });
    });
  }
}
