import { Log } from 'src/app/classes/log';
import { Socket } from 'src/app/classes/socket';
import { environment } from 'src/environments/environment';
import { MatTableDataSource } from '@angular/material/table';
import { OnInit, Component, OnDestroy } from '@angular/core';

@Component({
    selector: 'live-logs-page',
    styleUrls: ['./live-logs.page.scss'],
    templateUrl: './live-logs.page.html'
})

export class LiveLogsPage implements OnInit, OnDestroy {

    constructor() { }

    public table: MatTableDataSource<any> = new MatTableDataSource<any>();
    public columns: string[] = ['message', 'type', 'date'];
    public loading: boolean = false;
    public observers: any = {};

    ngOnInit(): void {
        const socket = new Socket(environment.socket, 'logs');

        this.observers.data = socket.data.subscribe((event: any) => {
            if (this.table.data.length >= 1000) {
                this.table.data.pop();
            };
            this.table.data.unshift(event.result);
            this.table.data = this.table.data.map(o => new Log(o));
        });

        this.observers.status = socket.status.subscribe((status: any) => {
            if (status == 'disconnected') {
                setTimeout(() => socket.reconnect(), 5000);
            };
        });
    }

    ngOnDestroy(): void {
        this.observers.data?.unsubscribe();
        this.observers.status?.unsubscribe();
    }

}
