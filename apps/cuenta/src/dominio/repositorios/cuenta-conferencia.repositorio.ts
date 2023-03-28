import { Observable } from "rxjs";

export interface ICuentaRepository<T> {	

    registar(data: T): Observable<T>;
    // findOneBy(id: string): Observable<T>
    
   // actualizar(id :string ,data: T): Observable<T>;
    // eliminar(id: string): Observable<T>;
    // findAll(): Observable<T[]>;
   
    
}