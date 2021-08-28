import { Subject, BehaviorSubject } from 'rxjs';

export class Socket {

    public data: Subject<SOCKET_MESSAGE> = new Subject<SOCKET_MESSAGE>();
    public status: BehaviorSubject<string> = new BehaviorSubject<string>('disconnected');

    private url: string = '';
    private socket?: WebSocket;

    constructor(url: string) {
        this.url = url;
        this.status.next('connecting');
        this.socket = new WebSocket(this.url);
        this.socket.onopen = (event) => this.status.next('connected');
        this.socket.onclose = (event) => this.status.next('disconnected');
        this.socket.onerror = (event) => this.status.next('socket-error');
        this.socket.onmessage = (event) => this.data.next(JSON.parse(event.data));
    }

    public reconnect() {
        this.status.next('connecting');
        this.socket = new WebSocket(this.url);
        this.socket.onopen = (event) => this.status.next('connected');
        this.socket.onclose = (event) => this.status.next('disconnected');
        this.socket.onerror = (event) => this.status.next('socket-error');
        this.socket.onmessage = (event) => this.data.next(JSON.parse(event.data));
    }

}


interface SOCKET_MESSAGE {
    result?: any;
    process?: string;
}