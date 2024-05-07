from django.db import models
from django.contrib.auth.models import User, Group

class PostTable(models.Model):
    post_name = models.CharField(max_length=20)

class AuthUserPostTable(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey(PostTable, on_delete=models.CASCADE, unique=True)

class AuthGroupPostTable(models.Model):
    auth_group = models.ForeignKey(Group, on_delete=models.CASCADE)
    post = models.ForeignKey(PostTable, on_delete=models.CASCADE, unique=True)

class MajorTable(models.Model):
    major_name = models.CharField(max_length=20)

class PostMajorTable(models.Model):
    post = models.ForeignKey(PostTable, on_delete=models.CASCADE)
    major = models.ForeignKey(MajorTable, on_delete=models.CASCADE, unique=True)
    major_number = models.IntegerField()

class SubTable(models.Model):
    sub_name = models.CharField(max_length=20)

class PostSubTable(models.Model):
    post = models.ForeignKey(PostTable, on_delete=models.CASCADE)
    sub = models.ForeignKey(SubTable, on_delete=models.CASCADE, unique=True)
    sub_number = models.IntegerField()

class SentenceTable(models.Model):
    sentence = models.TextField()

class PostSentenceTable(models.Model):
    post = models.ForeignKey(PostTable, on_delete=models.CASCADE)
    sentence = models.ForeignKey(SentenceTable, on_delete=models.CASCADE, unique=True)
    sentence_number = models.IntegerField()

class ImageTable(models.Model):
    image = models.ImageField(upload_to='images/')

class PostImageTable(models.Model):
    post = models.ForeignKey(PostTable, on_delete=models.CASCADE)
    image = models.ForeignKey(ImageTable, on_delete=models.CASCADE, unique=True)
    image_number = models.IntegerField()

class ChartTable(models.Model):
    pass  # Add fields as needed

class ChartCellTable(models.Model):
    chart = models.ForeignKey(ChartTable, on_delete=models.CASCADE)
    cell = models.TextField()
    cell_number = models.IntegerField()

class PostChartTable(models.Model):
    post = models.ForeignKey(PostTable, on_delete=models.CASCADE)
    chart = models.ForeignKey(ChartTable, on_delete=models.CASCADE, unique=True)
    chart_number = models.IntegerField()

class ColorTable(models.Model):
    color = models.CharField(max_length=20)

class SubColorTable(models.Model):
    sub = models.ForeignKey(SubTable, on_delete=models.CASCADE)
    color = models.ForeignKey(ColorTable, on_delete=models.CASCADE, unique=True)

class ChartCellColorTable(models.Model):
    chart_cell = models.ForeignKey(ChartCellTable, on_delete=models.CASCADE)
    color = models.ForeignKey(ColorTable, on_delete=models.CASCADE)

class LineTable(models.Model):
    line = models.CharField(max_length=20)

class SubLineTable(models.Model):
    sub = models.ForeignKey(SubTable, on_delete=models.CASCADE)
    line = models.ForeignKey(LineTable, on_delete=models.CASCADE, unique=True)

class ChartCellLineTable(models.Model):
    chart_cell = models.ForeignKey(ChartCellTable, on_delete=models.CASCADE)
    line = models.ForeignKey(LineTable, on_delete=models.CASCADE)

class MajorLineTable(models.Model):
    major = models.ForeignKey(MajorTable, on_delete=models.CASCADE)
    line = models.ForeignKey(LineTable, on_delete=models.CASCADE)
