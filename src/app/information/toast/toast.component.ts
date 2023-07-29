import { Component} from '@angular/core';
import { ToastService } from 'ngx-metro';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.less']
})
export class ToastComponent {
  constructor(public toastService: ToastService) { }

  toast() {
    this.toastService.create('This is a toast');
  }

  toastWait() {
    this.toastService.create('This is a toast').subscribe(() => alert('closed'));
  }

  toastCustom() {
    this.toastService.create('This is a toast', { additional: { distance: 0, showTop: true }, cls: 'alert', timeout: 20000 });
  }
}
