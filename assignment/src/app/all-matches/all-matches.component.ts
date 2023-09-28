import { Component, OnInit } from '@angular/core';
import { AppDataService } from '../app-data.service';




@Component({
  selector: 'app-all-matches',
  templateUrl: './all-matches.component.html',
  styleUrls: ['./all-matches.component.css']
})
export class AllMatchesComponent implements OnInit {
  
  matches: any[] = [];
  matchService: any;

  constructor(private appData: AppDataService) { }

  ngOnInit(): void {
    this.appData.getMatches();  
    this.appData.matches$.subscribe(matches => {
      this.matches = matches;  
    });
  }
  addToSaved(match: any): void {
    this.appData.addMatch(match);
  }
    
    
  }

  
  


