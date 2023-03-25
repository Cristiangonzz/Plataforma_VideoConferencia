import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";

import { Model } from "mongoose";
import { Observable, catchError, from, map } from "rxjs";
import { ICuentaRepository } from '../../../dominio/repositorios/plataforma.repositorio';
import { videoConferenciaSchema, videoConferenciaDocument } from '../schema/video-conferencia.schema';

@Injectable()
export class VideoConferenciaRepository implements ICuentaRepository<videoConferenciaSchema>{
    
    constructor(
        @InjectModel(videoConferenciaSchema.name) private readonly personaModel: Model<videoConferenciaDocument>
        ) { }
    
    registar(persona: videoConferenciaSchema): Observable<videoConferenciaSchema> {
        return from(this.personaModel.create(persona));
    }
    
    findAll(): Observable<videoConferenciaSchema[]> {
        return from(this.personaModel.find()) //Como estoy usando lo inyectado y lo tipeo con PersonaDocument entonces siempre me va a devolver un array de PersonaDocument
            .pipe(
                map((persona: videoConferenciaDocument[] ) =>  {
                    return persona;
                } ));
    }

    findOneBy(id: string): Observable<videoConferenciaSchema> {
        return from(this.personaModel.findById(id))
            .pipe(
                catchError((err:Error) => {
                    throw new Error(err.message);
                }
            ));
    }

    actualizar(id:string ,persona: videoConferenciaSchema): Observable<videoConferenciaSchema> {
        return from(this.personaModel.findByIdAndUpdate(id, persona, {new: true}))
            .pipe(
                 catchError((err : Error) => {
                 throw new Error('No se encontro la persona');
                 })
    );
    }

    eliminar(id: string): Observable<videoConferenciaSchema> {
        return from(this.personaModel.findByIdAndDelete(id))
        .pipe(
            catchError((err:Error) => {
                throw new Error('No se encontro la persona');
            })
        );
    }


}