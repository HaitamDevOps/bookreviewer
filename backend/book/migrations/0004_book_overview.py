# Generated by Django 5.0.6 on 2024-08-01 14:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('book', '0003_alter_book_language_comment'),
    ]

    operations = [
        migrations.AddField(
            model_name='book',
            name='overview',
            field=models.TimeField(null=True),
        ),
    ]
