import { Component, OnInit,Output,EventEmitter,Input} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Output() btnClikc=new EventEmitter()

    @Input() text!: string;
  @Input() color!: string;
  constructor() {

  }

  ngOnInit(): void {
  }

  onClick() {
  this.btnClikc.emit()
  }

}
