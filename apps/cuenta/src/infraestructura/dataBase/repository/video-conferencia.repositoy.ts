import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";

import { Model } from "mongoose";
import { Observable, catchError, from, map } from "rxjs";
import { ICuentaRepository } from '../../../dominio/repositorios/plataforma.repositorio';
import { videoConferenciaSchema, videoConferenciaDocument } from '../schema/video-conferencia.schema';

@Injectable()
export class VideoConferenciaRepository implements ICuentaRepository<videoConferenciaSchema>{
    
    constructor(
        @InjectModel(videoConferenciaSchema.name) private readonly videoConferenciaModel: Model<videoConferenciaDocument>
        ) { }
    
    registar(dato: videoConferenciaSchema): Observable<videoConferenciaSchema> {
        return from(this.videoConferenciaModel.create(dato));
    }
    
    findAll(): Observable<videoConferenciaSchema[]> {
        return from(this.videoConferenciaModel.find()) 
            .pipe(
                map((dato: videoConferenciaDocument[] ) =>  {
                    return dato;
                } ));
    }

    findOneBy(id: string): Observable<videoConferenciaSchema> {
        return from(this.videoConferenciaModel.findById(id))
            .pipe(
                catchError((err:Error) => {
                    throw new Error(err.message);
                }
            ));
    }

    actualizar(id:string ,dato: videoConferenciaSchema): Observable<videoConferenciaSchema> {
        return from(this.videoConferenciaModel.findByIdAndUpdate(id, dato, {new: true}))
            .pipe(
                 catchError((err : Error) => {
                 throw new Error('No se encontro la VideoConferencia');
                 })
    );

    }

    eliminar(id: string): Observable<videoConferenciaSchema> {
        return from(this.videoConferenciaModel.findByIdAndDelete(id))
        .pipe(
            catchError((err:Error) => {
                throw new Error('No se encontro la VideoConferencia');
            })
        );
    }


}