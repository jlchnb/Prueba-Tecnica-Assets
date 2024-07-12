from rest_framework import serializers  # type: ignore
from .models import Cliente, Gestor, Pago

class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = '__all__'

class GestorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Gestor
        fields = '__all__'

class PagoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pago
        fields = '__all__'
