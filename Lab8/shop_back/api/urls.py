from django.urls import path
from .views import product_list, product_detail, category_list, category_detail, products_by_category

urlpatterns = [
    path('products/', product_list, name='product-list'),
    path('products/<int:id>/', product_detail, name='product-detail'),
    path('categories/', category_list, name='category-list'),
    path('categories/<int:id>/', category_detail, name='category-detail'),
    path('categories/<int:id>/products/', products_by_category, name='products-by-category'),
]