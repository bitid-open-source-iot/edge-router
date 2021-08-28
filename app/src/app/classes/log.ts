export class Log {

    public date: Date = new Date();;
    public type: string = '';
    public message: string = '';

    constructor(args?: LOG) {
        if (typeof (args) != 'undefined' && args != null) {
            if (typeof (args.type) != 'undefined' && args.type != null) {
                this.type = args.type;
            };
            if (typeof (args.date) != 'undefined' && args.date != null) {
                this.date = new Date(args.date);
            };
            if (typeof (args.message) != 'undefined' && args.message != null) {
                this.message = args.message;
            };
        }
    }

}

interface LOG {
    date: Date;
    type: string;
    message: string;
}
