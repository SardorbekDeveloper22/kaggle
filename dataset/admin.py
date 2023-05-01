from django.contrib import admin
from .models import DataSet,Category

# Register your models here.
admin.site.register(DataSet)
# admin.site.register(Code)
admin.site.register(Category)