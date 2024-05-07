import factory
from .models import PostTable

class PostTableFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = PostTable

    post_name = 'Sample Post'
