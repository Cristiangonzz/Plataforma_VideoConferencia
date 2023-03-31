import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";

import { Observable, catchError, from, map } from "rxjs";

import { PersonaDocument, PersonaSchema } from '../schema/persona.shema';
import { IUsuarioRepository } from "apps/usuario/src/dominio/repositories/usuario-repository-base.repositoy";
import { Model, Types } from "mongoose";

@Injectable()
export class PersonaRepository implements IUsuarioRepository<PersonaSchema>{
    
    constructor(
        @InjectModel(PersonaSchema.name) private readonly personaModel: Model<PersonaDocument>
        ) { }
    
    /**
     * This function takes a PersonaSchema object as a parameter, and returns an Observable of type
     * PersonaSchema.
     * @param {PersonaSchema} persona - PersonaSchema
     * @returns An Observable of type PersonaSchema.
     */
    registar(persona: PersonaSchema): Observable<PersonaSchema> {
        return from(this.personaModel.create(persona));
    }
    
    
    /**
     * It returns an Observable of type PersonaSchema, which is a promise that resolves to a
     * PersonaSchema object.
     * @param {string} id - string - The id of the document to find.
     * @returns A promise of a PersonaSchema object.
     */
    findOneBy(id: string): Observable<PersonaSchema> {
        return from(Promise.resolve(this.personaModel.findOne({mail: id})))
            .pipe(
                catchError((err:Error) => {
                    throw new Error(err.message);
                }
            ));
    }

     /**
      * This function takes an id and a person object and returns an observable of the updated person
      * object.
      * @param {string} id - The id of the document to update.
      * @param {PersonaSchema} persona - PersonaSchema
      * @returns The updated document.
      */
     actualizar(id:string ,persona: PersonaSchema): Observable<PersonaSchema> {
         return from(this.personaModel.findByIdAndUpdate(id, persona, {new: true}))
             .pipe(
                  catchError((err : Error) => {
                  throw new Error('No se encontro la persona');
                  })
     );
     }

    /**
     * It deletes a document from the database and returns a boolean value.
     * @param {string} id - string
     * @returns The return is a boolean value.
     */
    eliminar(id: string): Observable<boolean> {
        const _id = new Types.ObjectId(id);
        return from(this.personaModel.findByIdAndDelete(_id)).pipe(
        catchError((error) => {
            throw error;
        }),
        map((usuario) => {
            if (!usuario) throw new NotFoundException('Persona no encontrada');
            return true;
      }),
    );
  }


}

// findAll(): Observable<PersonaSchema[]> {
    //     return from(this.personaModel.find()) //Como estoy usando lo inyectado y lo tipeo con PersonaDocument entonces siempre me va a devolver un array de PersonaDocument
    //         .pipe(
    //             map((persona: PersonaDocument[] ) =>  {
    //                 return persona;
    //             } ));
    // }