import { Component, OnInit } from '@angular/core';
import { AppDataService } from '../app-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-saved-matches',
  templateUrl: './saved-matches.component.html',
  styleUrls: ['./saved-matches.component.css']
})
export class SavedMatchesComponent implements OnInit {
  matches: any[] = [];
  
   private subscription: Subscription | undefined;
  constructor(private appData: AppDataService) { }

  ngOnInit(): void {
    this.subscription = this.appData.savedMatches$.subscribe(savedMatches => {
      this.matches = savedMatches;
    });
  }

  ngOnDestroy(): void {
    
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
   
  }

