import {Component, OnInit, ViewChild} from '@angular/core';
import { DraggableDirective } from 'ngx-metro';

@Component({
  selector: 'app-draggable',
  templateUrl: './draggable.component.html',
  styleUrls: ['./draggable.component.less']
})
export class DraggableComponent implements OnInit {

  @ViewChild(DraggableDirective, { static: true }) draggable: DraggableDirective;

  constructor() { }

  ngOnInit(): void {
  }

}
