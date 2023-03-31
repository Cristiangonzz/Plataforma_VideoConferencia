import { Observable } from "rxjs";

export interface ICuentaRepository<T> {	

    registar(data: T): Observable<T>; 
}