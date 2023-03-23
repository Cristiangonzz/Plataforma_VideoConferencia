import { Observable } from "rxjs";

export interface IUsuarioRepository<T> {	

    registar(usuario: T): Observable<T>;
    actualizar(usuario: T): Observable<T>;
    eliminar(usuario: T): Observable<T>;
}