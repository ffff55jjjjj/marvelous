import { Component, OnInit } from '@angular/core';

declare var layui;
@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    layui.use('element', function(){
      var element = layui.element;
    });
  }

}
