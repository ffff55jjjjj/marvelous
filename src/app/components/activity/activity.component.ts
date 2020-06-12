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

  showContent(e){
    if(this.isIE()){
      e.target.parentNode.childNodes.forEach(element => {
        if(element.tagName==='DIV'){
          let $ele = $(element);
          if($ele.hasClass('layui-show')){
            console.log(1);
            $ele.removeClass('layui-show');
          }else{
            console.log(2);
            $ele.addClass('layui-show');
          }
        }
      });
    }
  }

  
  isIE() { 
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串  
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器  
    var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器  
    var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;//判断是否是IE11
    console.log(isIE,isEdge,isIE11);
    return isIE || isEdge || isIE11
  }
}
