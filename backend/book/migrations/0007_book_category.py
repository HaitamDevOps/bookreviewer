# Generated by Django 5.0.6 on 2024-11-06 13:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('book', '0006_book_coverurl'),
    ]

    operations = [
        migrations.AddField(
            model_name='book',
            name='category',
            field=models.CharField(max_length=20, null=True),
        ),
    ]