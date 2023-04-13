const hostAgentCall = require('../lib/hostAgentCall')

class HOST {
    constructor(args){
        // super();
        this.io = args.io;
        this.type = args.type;
        this.deviceId = args.deviceId;
        this.id = args.id;

        this.commands = __settings.hostAgentCommands || []
        if(this.commands.length > 0){
            this.init()
        }else{
            __logger.warn('NO COMMANDS CONFIGURED FOR HOSTAGENT')
        }
    }

    init(){
        if(this.commands.length > 0){
            setInterval(async ()=>{
                let result = await hostAgentCall.refresh(this.commands)
            },10000)
        }
    }
}

module.exports = HOST