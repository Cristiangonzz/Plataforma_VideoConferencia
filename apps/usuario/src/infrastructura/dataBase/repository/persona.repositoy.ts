import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";

import { Observable, catchError, filter, from, map } from "rxjs";

import { PersonaDocument, PersonaSchema } from '../schema/persona.shema';
import { IUsuarioRepository } from "apps/usuario/src/dominio/repositories/usuario.repositoy";
import { Model } from "mongoose";
import { PersonaModel } from '../../../dominio/model/persona';

@Injectable()
export class PersonaRepository implements IUsuarioRepository<PersonaSchema>{
    
    constructor(
        @InjectModel(PersonaSchema.name) private readonly personaRepository: Model<PersonaDocument>
        ) { }
    
    registar(persona: PersonaSchema): Observable<PersonaSchema> {
        return from(this.personaRepository.create(persona));
    }

    actualizar(persona: PersonaSchema): Observable<PersonaSchema> {
        throw new Error("Method not implemented.");
    }

    eliminar(persona: PersonaSchema): Observable<PersonaSchema> {
        throw new Error("Method not implemented.");
    }

    findAll(): Observable<PersonaSchema[]> {
        return from(this.personaRepository.find()) //Como estoy usando lo inyectado y lo tipeo con PersonaDocument entonces siempre me va a devolver un array de PersonaDocument
            .pipe(
                map((persona:PersonaDocument[]) =>  {
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

}