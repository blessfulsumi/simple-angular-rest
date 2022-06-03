import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Input } from '../model/Input';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  saveInput(input: Input) {
    return this.http.post('http://localhost:9091/postInput', input);
  }

  getInput() {
    return this.http.get('http://localhost:9091/getInput');
  }
}
