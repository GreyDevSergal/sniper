import http, { IncomingMessage, ServerResponse } from 'http';
import dotenv from 'dotenv';
import Kernel from '@sniper/Kernel';

dotenv.config();

http.createServer(function (req: IncomingMessage, res: ServerResponse)
{
    
    const kernel = new Kernel(req, res, process.env);
    
    kernel.exit();

})
.listen(process.env.PORT, () =>
{

    console.log(`Server started on port ${process.env.PORT}`);

});
