from django.db import models

# Create your models here.
class Insights(models.Model):
    company = models.CharField(max_length=100)
    content = models.CharField(max_length=600)

    def __str__(self):
        return self.company
    