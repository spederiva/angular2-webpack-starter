import {Component, OnInit} from '@angular/core';
import {WikipediaService} from "./wikipedia.service";
import {Observable, Subject} from "rxjs";
import '../../../core/rxjs-operators';

@Component({
    selector: 'wikipedia-autocomplete',

    template: `
        <h1>Wikipedia Demo</h1>
        
        <input #keywords (keyup)="search(keywords.value)"  placeholder="Enter the term"/>
        
        <ul>
            <li *ngFor="let term of terms|async">
                {{term}}
            </li>
        </ul>
    `
})
export class WikipediaAutocompleteComponent implements OnInit {
    private terms: Observable<string[]>;

    private searchStream = new Subject<string>();

    constructor(private wikipediaSrv: WikipediaService) {

    }

    ngOnInit(): void {
        this.terms = this.searchStream
            .debounceTime(500)
            .distinctUntilChanged()
            .switchMap((term: string) => this.wikipediaSrv.search(term));

    }

    search(term: string) {
        this.searchStream.next(term);
    }


}