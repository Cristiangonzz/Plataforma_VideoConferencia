import { Observable } from "rxjs";

export interface IUsuarioRepository<T> {	

    registar(persona: T): Observable<T>;
    findOneBy(id: string): Observable<T>
    actualizar(id :string ,persona: T): Observable<T>;
    eliminar(id: string): Observable<boolean>;
    // findAll(): Observable<T[]>;
    
}