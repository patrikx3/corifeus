import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class IpInfoService {

    constructor(private http: HttpClient) {
    }

    public get get() {
        const response = this.http.get('https://ipinfo.io/json').toPromise();
        return response;
    }

}
