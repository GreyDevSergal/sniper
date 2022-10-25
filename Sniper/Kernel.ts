import { IncomingMessage, ServerResponse } from "http";
import { ProcessEnv } from "./Types/General";

import * as config from "@config/config";

export default class Kernel
{
    res: ServerResponse;
    req: IncomingMessage;
    env: ProcessEnv;
    config: any;

    constructor(req: IncomingMessage, res: ServerResponse, env: ProcessEnv)
    {

        this.res = res;
        this.req = req;
        this.env = env;
        this.config = config;
        console.log(JSON.stringify(config));
        

    }

    public exit(): void
    {

        this.res.end();
        
    }

}