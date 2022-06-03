import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Input } from 'src/app/model/Input';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  input: Input = { angularInput: '' };

  constructor(private router: Router, private appService: AppService) {}

  ngOnInit(): void {}

  nextPage() {
    this.appService.saveInput(this.input).subscribe({
      next: () => {
        this.router.navigate(['nextPage']);
      },
    });
  }
}
