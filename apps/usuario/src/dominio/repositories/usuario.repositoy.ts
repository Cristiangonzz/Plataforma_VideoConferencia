import { Observable } from "rxjs";

export interface IUsuarioRepository<T> {	

    registar(usuario: T): Observable<T>;
    actualizar(usuario: T): Observable<T>;
    findAll(): Observable<T[]>;
    findOneBy(id: string): Observable<T>
    eliminar(usuario: T): Observable<T>;
}