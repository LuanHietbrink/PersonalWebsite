from django.db import models

class Project(models.Model):
    name = models.CharField(max_length=100)
    html_url = models.URLField()
    description = models.TextField(blank=True, null=True)
    language = models.CharField(max_length=50, blank=True, null=True)
    stargazers_count = models.IntegerField(default=0)

class AthletePerformances(models.Model):
    date = models.DateField()
    result = models.CharField(max_length=100)
    venue = models.CharField(max_length=100)
    event = models.CharField(max_length=100)
    athlete_id = models.CharField(max_length=100)
