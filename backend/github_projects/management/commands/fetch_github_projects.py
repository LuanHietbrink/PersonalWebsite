import requests
from django.core.management.base import BaseCommand
from github_projects.models import Project

class Command(BaseCommand):
    help = 'Fetch GitHub projects'

    def handle(self, *args, **kwargs):
        username = 'LuanHietbrink'
        url = f'https://api.github.com/users/{username}/repos'
        response = requests.get(url)
        projects = response.json()

        for project in projects:
            Project.objects.update_or_create(
                name=project['name'],
                defaults={
                    'html_url': project['html_url'],
                    'description': project.get('description', ''),
                    'language': project.get('language', ''),
                    'stargazers_count': project['stargazers_count'],
                }
            )
