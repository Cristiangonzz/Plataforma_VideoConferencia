import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";

import { Model } from "mongoose";
import { Observable, catchError, from, map } from "rxjs";

import { ICuentaRepository } from '../../../dominio/repositorios/cuenta-conferencia.repositorio';
import { AudioConferenciaDocument, AudioConferenciaSchema } from "../schema/audio-conferencia.schema";

@Injectable()
export class AudioConferenciaRepository implements ICuentaRepository<AudioConferenciaSchema>{
    
    constructor(
        @InjectModel(AudioConferenciaSchema.name) private readonly audioConferenciaModel: Model<AudioConferenciaDocument>
        ) { }
    
    registar(dato: AudioConferenciaSchema): Observable<AudioConferenciaSchema> {
        return from(this.audioConferenciaModel.create(dato));
    }
    
    // findAll(): Observable<AudioConferenciaSchema[]> {
    //     return from(this.audioConferenciaModel.find()) 
    //         .pipe(
    //             map((dato: AudioConferenciaDocument[] ) =>  {
    //                 return dato;
    //             } ));
    // }

    // findOneBy(id: string): Observable<AudioConferenciaSchema> {
    //     return from(this.audioConferenciaModel.findById(id))
    //         .pipe(
    //             catchError((err:Error) => {
    //                 throw new Error(err.message);
    //             }
    //         ));
    // }

    // actualizar(id:string ,dato: AudioConferenciaSchema): Observable<AudioConferenciaSchema> {
    //     return from(this.audioConferenciaModel.findByIdAndUpdate(id, dato, {new: true}))
    //         .pipe(
    //              catchError((err : Error) => {
    //              throw new Error('No se encontro la AudioConferencia');
    //              })
    // );

    // }

    // eliminar(id: string): Observable<AudioConferenciaSchema> {
    //     return from(this.audioConferenciaModel.findByIdAndDelete(id))
    //     .pipe(
    //         catchError((err:Error) => {
    //             throw new Error('No se encontro la AudioConferencia');
    //         })
    //     );
    // }


}