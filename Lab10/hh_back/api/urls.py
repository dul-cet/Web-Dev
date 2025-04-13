from django.urls import path
from . import views

urlpatterns = [
    path('companies/', views.company_list),
    path('companies/<int:id>/', views.company_detail),
    path('companies/<int:id>/vacancies/', views.company_vacancies),

    path('vacancies/', views.VacancyList.as_view()),
    path('vacancies/<int:id>/', views.VacancyDetail.as_view()),
    path('vacancies/top_ten/', views.top_ten_vacancies),
]
