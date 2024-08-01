# Create your views here.

from django.shortcuts import get_object_or_404
from rest_framework import generics, views, response, status
from .models import Book, Comment
from .serializers import BookSerializer, CommentSerializer

class BookListView(generics.ListCreateAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer

class BookDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer

class CommentListCreate(views.APIView):
    def get(self, request):
        comment_id = request.query_params.get('id', None)
        book = request.query_params.get('book', None)

        if comment_id is not None:
            comment = get_object_or_404(Comment, id=comment_id)
            serializer = CommentSerializer(comment)
            return response.Response(serializer.data)
        elif book is not None:
            comments = Comment.objects.filter(book=book)
            serializer = CommentSerializer(comments, many=True)
            return response.Response(serializer.data)
        else:
            comments = Comment.objects.all()
            serializer = CommentSerializer(comments, many=True)
            return response.Response(serializer.data)
        
    def post(self, request):
        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return response.Response(serializer.data, status=status.HTTP_201_CREATED)
        return response.Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def patch(self, request):
        comment_id = request.query_params.get('id', None)
        if comment_id is None:
            return response.Response({'error': 'Comment ID not provided'}, status=status.HTTP_400_BAD_REQUEST)

        comment = get_object_or_404(Comment, id=comment_id)
        serializer = CommentSerializer(comment, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return response.Response(serializer.data, status=status.HTTP_200_OK)
        return response.Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class CommentDelete(views.APIView):
    def delete(self, request):
        comment_id = request.query_params.get('id', None)
        if comment_id is not None:
            comment = get_object_or_404(Comment, id=comment_id)
            comment.delete()
            return response.Response(status=status.HTTP_204_NO_CONTENT)
        return response.Response({'error': 'Comment ID not provided'}, status=status.HTTP_400_BAD_REQUEST)

