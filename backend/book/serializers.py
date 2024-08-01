from rest_framework import serializers
from .models import Book, Comment
# Declaring Book model serializer here


class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ('__all__')

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ('__all__')