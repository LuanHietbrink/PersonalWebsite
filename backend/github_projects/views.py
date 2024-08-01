from rest_framework import viewsets
from .models import Project
from .serializers import ProjectSerializer
from bs4 import BeautifulSoup
import requests

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


def scrape_athlete_results(athletecountry, athletename=None, athletesurname=None, athletenumber=None):
    url = f"https://worldathletics.org/athletes/{athletecountry}/{athletename}-{athletesurname}-{athletenumber}"
    response = requests.get(url)
    soup = BeautifulSoup(response.text,)

    return None