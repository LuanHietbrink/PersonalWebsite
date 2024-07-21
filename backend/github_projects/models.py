from django.db import models

class Project(models.Model):
    name = models.CharField(max_length=100)
    html_url = models.URLField()
    description = models.TextField(blank=True, null=True)
    language = models.CharField(max_length=50, blank=True, null=True)
    stargazers_count = models.IntegerField(default=0)
