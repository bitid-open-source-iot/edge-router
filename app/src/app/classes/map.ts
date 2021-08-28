import { ObjectId } from './id';

export class Map {

    public mapId: string = ObjectId();
    public source: SOURCE_DESTINATION = {
        mask: 0,
        inputId: '',
        deviceId: ''
    };
    public destination: SOURCE_DESTINATION = {
        mask: 0,
        inputId: '',
        deviceId: ''
    };

    constructor(args?: MAP) {
        if (typeof (args) != 'undefined' && args != null) {
            if (typeof (args.mapId) != 'undefined' && args.mapId != null) {
                this.mapId = args.mapId;
            };
            if (typeof (args.source) != 'undefined' && args.source != null) {
                if (typeof (args.source.mask) != 'undefined' && args.source.mask != null) {
                    this.source.mask = args.source.mask;
                }
                if (typeof (args.source.inputId) != 'undefined' && args.source.inputId != null) {
                    this.source.inputId = args.source.inputId;
                }
                if (typeof (args.source.deviceId) != 'undefined' && args.source.deviceId != null) {
                    this.source.deviceId = args.source.deviceId;
                }
            }
            if (typeof (args.destination) != 'undefined' && args.destination != null) {
                if (typeof (args.destination.mask) != 'undefined' && args.destination.mask != null) {
                    this.destination.mask = args.destination.mask;
                }
                if (typeof (args.destination.inputId) != 'undefined' && args.destination.inputId != null) {
                    this.destination.inputId = args.destination.inputId;
                }
                if (typeof (args.destination.deviceId) != 'undefined' && args.destination.deviceId != null) {
                    this.destination.deviceId = args.destination.deviceId;
                }
            }
        }
    }

}

interface MAP {
    mapId: string;
    source: SOURCE_DESTINATION;
    destination: SOURCE_DESTINATION;
}

interface SOURCE_DESTINATION {
    mask: number;
    inputId: string;
    deviceId: string;
}