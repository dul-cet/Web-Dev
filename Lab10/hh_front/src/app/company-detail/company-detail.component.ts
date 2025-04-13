import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api.service';
import { Vacancy } from '../models/vacancy';

@Component({
  selector: 'app-company-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './company-detail.component.html'
})
export class CompanyDetailComponent implements OnInit {
  vacancies: Vacancy[] = [];
  companyId!: number;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.companyId = Number(this.route.snapshot.paramMap.get('id'));
    this.apiService.getVacanciesByCompany(this.companyId).subscribe((data) => {
      this.vacancies = data;
    });
  }
}
