from django.db import models

class CheatsheetPage(models.Model):
    title = models.CharField(max_length=200)
    year = models.IntegerField()