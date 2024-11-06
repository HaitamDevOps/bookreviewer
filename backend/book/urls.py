from django.urls import path
from .views import BookListView, BookDetailView, HandleCommentsView, CommentDelete

urlpatterns = [
    path('book/', BookListView.as_view(), name='book-list'),
    path('book/<int:pk>', BookDetailView.as_view(), name='book-detail'),
    path('comments/', HandleCommentsView.as_view(), name='comments-handler'),
    path('comments/delete/', CommentDelete.as_view(), name='comment-delete'),
]
