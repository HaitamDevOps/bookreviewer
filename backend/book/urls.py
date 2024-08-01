from django.urls import path
from .views import BookListView, BookDetailView, CommentListCreate, CommentDelete

urlpatterns = [
    path('book/', BookListView.as_view(), name='book-list'),
    path('book/<int:pk>', BookDetailView.as_view(), name='book-detail'),
    path('comments/', CommentListCreate.as_view(), name='comment-list-create'),
    path('comments/delete/', CommentDelete.as_view(), name='comment-delete'),
]
