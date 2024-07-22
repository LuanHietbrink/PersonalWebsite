from rest_framework import serializers
from .models import Project, AthletePerformances

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'

class PerformanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = AthletePerformances
        fields = '__all__'
