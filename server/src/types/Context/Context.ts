import { Request,Response } from 'express'
import { Session, SessionData } from "express-session";
import { Connection } from 'typeorm';

import { buildDataloader } from '../../untils/Dataloader/Dataloader';

export type Context = {
    req : Request & {session : Session & Partial<SessionData> & { userId?: number} & {role?: string}}
    res : Response
    connection : Connection
    dataLoaders : ReturnType<typeof buildDataloader> 
}