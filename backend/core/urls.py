from django.urls import path
from . import views

urlpatterns = [
    path('api/clientes/', views.ClienteListCreate.as_view(), name='cliente-list-create'),
    path('api/gestores/', views.GestorListCreate.as_view(), name='gestor-list-create'),
    path('api/pagos/', views.PagoListCreate.as_view(), name='pago-list-create'),
]
