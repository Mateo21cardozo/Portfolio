import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { CommonModule } from '@angular/common';
import { ProjectService } from './portfolio.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [HeaderComponent, CommonModule, HttpClientModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  public projects: any[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projectService.getProjects().subscribe(
      (response) => {
        this.projects = response;
        console.log(this.projects);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
