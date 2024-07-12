from rest_framework import generics  # type: ignore
from .models import Cliente, Gestor, Pago
from .serializers import ClienteSerializer, GestorSerializer, PagoSerializer

class ClienteListCreate(generics.ListCreateAPIView):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer

class GestorListCreate(generics.ListCreateAPIView):
    queryset = Gestor.objects.all()
    serializer_class = GestorSerializer

class PagoListCreate(generics.ListCreateAPIView):
    queryset = Pago.objects.all()
    serializer_class = PagoSerializer
