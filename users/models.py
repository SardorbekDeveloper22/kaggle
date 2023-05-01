from django.db import models
from django.contrib.auth.models import User
from dataset.models import DataSet
# Create your models here.

class Profile(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE)
    photo = models.ImageField(upload_to='media/users/images')
    date_of_birth = models.DateField()
    datasets = models.ManyToManyField(DataSet, related_name='profiles', blank=True)

    def __str__(self):
        return f"{self.user.username}"