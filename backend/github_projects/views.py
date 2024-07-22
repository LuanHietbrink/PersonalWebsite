from rest_framework import viewsets
from .models import Project, AthletePerformances
from .serializers import ProjectSerializer, PerformanceSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import requests
from bs4 import BeautifulSoup

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


class PerformanceView(APIView):

    def get_top_performances(self, athlete_id, event):
        url = f'https://worldathletics.org/athletes/{athlete_id}'
        response = requests.get(url)
        
        if response.status_code != 200:
            return None

        soup = BeautifulSoup(response.content, 'html.parser')

        performances = []
        events_section = soup.find_all('div', class_='events-section')
        
        for section in events_section:
            event_name = section.find('h3').text.strip()
            if event_name.lower() == event.lower():
                performance_table = section.find('table')
                rows = performance_table.find_all('tr')
                for row in rows:
                    columns = row.find_all('td')
                    if len(columns) > 1:
                        performance = {
                            'date': columns[0].text.strip(),
                            'result': columns[1].text.strip(),
                            'venue': columns[2].text.strip()
                        }
                        performances.append(performance)
        
        return performances

    def get(self, request, athlete_id, event):
        performances = self.get_top_performances(athlete_id, event)
        if performances is not None:
            return Response(performances, status=status.HTTP_200_OK)
        else:
            return Response({"error": "Failed to retrieve data"}, status=status.HTTP_400_BAD_REQUEST)