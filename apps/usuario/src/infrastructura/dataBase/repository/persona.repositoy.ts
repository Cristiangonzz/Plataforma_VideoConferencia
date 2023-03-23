import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";

import { Observable, catchError, from, map } from "rxjs";

import { PersonaDocument, PersonaSchema } from '../schema/persona.shema';
import { IUsuarioRepository } from "apps/usuario/src/dominio/repositories/usuario-repository-base.repositoy";
import { Model } from "mongoose";

@Injectable()
export class PersonaRepository implements IUsuarioRepository<PersonaSchema>{
    
    constructor(
        @InjectModel(PersonaSchema.name) private readonly personaRepository: Model<PersonaDocument>
        ) { }
    
    registar(persona: PersonaSchema): Observable<PersonaSchema> {
        return from(this.personaRepository.create(persona));
    }
    
    findAll(): Observable<PersonaSchema[]> {
        return from(this.personaRepository.find()) //Como estoy usando lo inyectado y lo tipeo con PersonaDocument entonces siempre me va a devolver un array de PersonaDocument
            .pipe(
                map((persona: PersonaDocument[] ) =>  {
                    return persona;
                } ));
    }

    findOneBy(id: string): Observable<PersonaSchema> {
        return from(this.personaRepository.findById(id))
            .pipe(
                catchError((err:Error) => {
                    throw new Error(err.message);
                }
            ));
    }

    actualizar(id:string ,persona: PersonaSchema): Observable<PersonaSchema> {
        return from(this.personaRepository.findByIdAndUpdate(id, persona, {new: true}))
            .pipe(
                 catchError((err : Error) => {
                 throw new Error('No se encontro la persona');
                 })
    );
    }

    eliminar(id: string): Observable<PersonaSchema> {
        return from(this.personaRepository.findByIdAndDelete(id))
        .pipe(
            catchError((err:Error) => {
                throw new Error('No se encontro la persona');
            })
        );
    }


}