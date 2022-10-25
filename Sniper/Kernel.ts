import { IncomingMessage, ServerResponse } from 'http';
import {ProcessEnv} from '@types/process';

export namespace Sniper
{

    export class Kernel
    {

        public constructor(req: IncomingMessage, res: ServerResponse, env: any)
        {

            res.write('kernel starting, running at ' + env.PORT);
            res.end();

        }

    }

}