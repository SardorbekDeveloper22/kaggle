# Generated by Django 4.2 on 2023-04-29 11:29

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("dataset", "0003_dataset_photo_alter_code_code_alter_dataset_file_and_more"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="codecomments",
            name="code",
        ),
        migrations.RemoveField(
            model_name="codecomments",
            name="user",
        ),
        migrations.AlterField(
            model_name="dataset",
            name="tags",
            field=models.CharField(max_length=200),
        ),
        migrations.DeleteModel(
            name="Code",
        ),
        migrations.DeleteModel(
            name="CodeComments",
        ),
    ]
