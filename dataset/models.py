from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User

from django.urls import reverse


class Category(models.Model):
    name = models.CharField(max_length=120)
    description = models.TextField(blank=True, null=True)
    def __str__(self):
        return self.name


class DataSet(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    photo = models.ImageField(upload_to='dataset/images/')
    description = models.TextField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    file = models.FileField(upload_to='dataset/files')
    created_date = models.DateTimeField(default=timezone.now)
    updated_date = models.DateTimeField(auto_now=True)
    tags = models.CharField(max_length=200)

    def __str__(self):
        return self.title
    def get_absolute_url(self):
        return reverse('detail',args=[str(self.pk)])


# class Code(models.Model):
#     user = models.ForeignKey(User, on_delete=models.CASCADE)
#     dataset = models.ForeignKey(DataSet, on_delete=models.CASCADE)
#     title = models.CharField(max_length=100)
#     description = models.TextField()
#     code = models.FileField(upload_to="media/code/files")
#     def __str__(self):
#         return self.title

# class CodeComments(models.Model):
#     user = models.ForeignKey(User, on_delete=models.CASCADE)
#     code = models.ForeignKey(Code, on_delete=models.CASCADE)
#     text = models.TextField()
#     def __str__(self):
#         return self.user.username
