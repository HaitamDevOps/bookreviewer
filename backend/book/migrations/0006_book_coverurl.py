# Generated by Django 5.0.6 on 2024-11-06 13:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('book', '0005_alter_book_overview'),
    ]

    operations = [
        migrations.AddField(
            model_name='book',
            name='coverUrl',
            field=models.CharField(max_length=255, null=True),
        ),
    ]
