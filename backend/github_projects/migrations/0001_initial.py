# Generated by Django 5.0.7 on 2024-07-21 18:34

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('html_url', models.URLField()),
                ('description', models.TextField(blank=True, null=True)),
                ('language', models.CharField(blank=True, max_length=50, null=True)),
                ('stargazers_count', models.IntegerField(default=0)),
            ],
        ),
    ]
