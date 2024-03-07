import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {CurrentUserInterface} from "../types/currentUser.interface";
import {environment} from "../../../environments/environment";

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  currentUser$ = new BehaviorSubject<CurrentUserInterface | null | undefined>(undefined);

  getCurrentUser(): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/user';
    return this.http.get<CurrentUserInterface>(url);
  }

  setCurrentUser(currentUser: CurrentUserInterface | null): void {
    this.currentUser$.next(currentUser);
  }
}
