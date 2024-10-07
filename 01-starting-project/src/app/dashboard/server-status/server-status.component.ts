import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit{
  currentStatus = 'online';

  constructor() {
    
  }

  ngOnInit(){
    setInterval(() => {
      const rnd = Math.random();
      this.currentStatus = rnd < 0.5 ? 'online' : 'offline';
    }, 5000);
  }
}
