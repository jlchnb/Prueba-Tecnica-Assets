from django.db import models

class Cliente(models.Model):
    nombre = models.CharField(max_length=100)

    def __str__(self):
        return self.nombre

class Gestor(models.Model):
    nombre = models.CharField(max_length=100)

    def __str__(self):
        return self.nombre

# Tanto 'Cliente' como 'Gestor' son modelos simples
# con un solo campo str para guardar informacion importante.

class Pago(models.Model):
    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)
    gestor = models.ForeignKey(Gestor, on_delete=models.CASCADE)
    rut = models.CharField(max_length=20)
    monto = models.DecimalField(max_digits=10, decimal_places=2)
    fecha_pago = models.DateField()
    abonos = models.IntegerField()

# Se usa ForeignKey para la relacion 

    def __str__(self):
        return f"Pago de {self.cliente.nombre} por {self.monto} con fecha {self.fecha_pago}"
