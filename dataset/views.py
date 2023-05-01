from typing import Any, Dict
from django.shortcuts import render, redirect
from django.urls import reverse_lazy
from django.views.generic import ListView,DetailView
from django.views.generic.edit import CreateView, UpdateView,DeleteView
from django.contrib.auth.mixins import LoginRequiredMixin, UserPassesTestMixin
from .models import *
from django.db.models import Q
# Create your views here.
class HomePage(ListView):
    model = DataSet
    template_name = 'home.html'
    context_object_name = 'datasets'

    def get_queryset(self):
        query = self.request.GET.get('q')
        if query:
            object_list = DataSet.objects.filter(
                Q(title__icontains=query) | Q(description__icontains=query)
            )
        else:
            object_list = DataSet.objects.all()
        return object_list
    # def get_context_data(self, **kwargs):
    #     context = super().get_context_data(**kwargs)
    #     context['tag']=Profile.objects.get(tags)
    #     return super().get_context_data(**kwargs)
class DatasetDetailPage(DetailView):
    model = DataSet
    template_name = 'dataset.html'
    context_object_name = 'dataset'
class CreateDataset(LoginRequiredMixin, CreateView):
    model = DataSet
    template_name = 'create_ds.html'
    fields = ('title', 'photo', 'description', 'category', 'file', 'tags')
    def form_valid(self, form):
        form.instance.user = self.request.user
        return super().form_valid(form)
class UpdateDataset(LoginRequiredMixin, UserPassesTestMixin, UpdateView):
    model = DataSet
    template_name = 'editds.html'
    fields = ('title', 'photo', 'description', 'category', 'file', 'tags')
    def test_func(self):
        obj = self.get_object()
        return obj.user == self.request.user
class DeleteView(LoginRequiredMixin, UserPassesTestMixin, DeleteView):
    model = DataSet
    template_name = 'delete_ds.html'
    success_url = reverse_lazy('home')
    def test_func(self):
        obj = self.get_object()
        return obj.user == self.request.user