import {Injectable} from "@angular/core";
import {Http, URLSearchParams} from "@angular/http";

@Injectable()
export class WikipediaService {
    private _wikiUrl = 'https://en.wikipedia.org/w/api.php';


    constructor(private http: Http) {

    }

    search(term: string) {
        let params = new URLSearchParams();
        params.set('search', term);
        params.set('action', 'opensearch');
        params.set('limit', '50');
        params.set('format', 'json');
        params.set('origin', '*');

        return this.http.get(this._wikiUrl, {search: params})
            .map(resp => resp.json()[1]);
    }

}