from django.urls import path
from .views import HomePage,DatasetDetailPage,CreateDataset,UpdateDataset,DeleteView

urlpatterns = [
    path('',HomePage.as_view(),name='home'),
    path('dataset/<int:pk>/', DatasetDetailPage.as_view(), name="detail"),
    path('dataset/create', CreateDataset.as_view(), name="createdataset"),
    path('dataset/<int:pk>/update', UpdateDataset.as_view(), name="updatedataset"),
    path('dataset/<int:pk>/delete', DeleteView.as_view(), name="deletedataset"),
]