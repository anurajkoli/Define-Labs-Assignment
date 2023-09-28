import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppDataService {

  private apiUrl = 'https://api.foursquare.com/v2/venues/search';
  private params = {
    ll: '40.7484,-73.9857',
    oauth_token: 'NPKYZ3WZ1VYMNAZ2FLX1WLECAWSMUVOQZOIDBN53F3LVZBPQ',
    v: '20180616',
  };

  private matchesSubject = new BehaviorSubject<any[]>([]);
  public matches$ = this.matchesSubject.asObservable();  

  private savedMatchesSubject = new BehaviorSubject<any[]>([]);  
  public savedMatches$ = this.savedMatchesSubject.asObservable();

  constructor(private http: HttpClient) { }

  getMatches(): void {
    this.http.get<any>(this.apiUrl, { params: this.params }).subscribe(data => {
      const matches = data.response.venues;
      this.matchesSubject.next(matches); 
    });
  }
  addMatch(match: any): void {
    const currentSavedMatches = this.savedMatchesSubject.getValue();
    this.savedMatchesSubject.next([...currentSavedMatches, match]);  // Update saved matches
  }

  getSavedMatches(): any[] {
    return this.savedMatchesSubject.getValue();  // Get saved matches
  }


  setMatches(matches: any[]): void {
    this.matchesSubject.next(matches);
  }
}
