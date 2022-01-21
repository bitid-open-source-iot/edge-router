import { Subject, BehaviorSubject } from 'rxjs';

export class Socket {

    public data: Subject<SOCKET_MESSAGE> = new Subject<SOCKET_MESSAGE>();
    public status: BehaviorSubject<'error' | 'connected' | 'connecting' | 'disconnected' | null> = new BehaviorSubject<'error' | 'connected' | 'connecting' | 'disconnected' | null>(null);

    private url?: string;
    private route?: string;
    private socket?: WebSocket;

    constructor(url: string, route?: string) {
        this.url = url;
        this.route = route;
        this.status.next('connecting');
        this.socket = new WebSocket([this.url, '?route=', this.route].join(''));
        this.socket.onopen = (event) => this.status.next('connected');
        this.socket.onclose = (event) => this.status.next('disconnected');
        this.socket.onerror = (event) => this.status.next('error');
        this.socket.onmessage = (event) => this.data.next(JSON.parse(event.data));
    }

    public reconnect() {
        delete this.socket;
        this.status.next('connecting');
        this.socket = new WebSocket([this.url, '?route=', this.route].join(''));
        this.socket.onopen = (event) => this.status.next('connected');
        this.socket.onclose = (event) => this.status.next('disconnected');
        this.socket.onerror = (event) => this.status.next('error');
        this.socket.onmessage = (event) => this.data.next(JSON.parse(event.data));
    }

}

interface SOCKET_MESSAGE {
    result?: any;
    process?: string;
}