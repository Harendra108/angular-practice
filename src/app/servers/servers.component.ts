import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverID: number = 10;
  serverStatus: string = "offline";
  allowNewServer: boolean = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    } , 2000);

  }

  ngOnInit(): void {

  }


  getServerStatus(): string {
    return this.serverStatus;
  }

}
