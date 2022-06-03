import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css'],
})
export class OutputComponent implements OnInit {
  output: string = '';

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService.getInput().subscribe({
      next: (response: any) => {
        
        this.output = response.angularInput;
      },
    });
  }
}
