from django.test import TestCase
from .factories import PostTableFactory
from .models import PostTable

class PostTableTestCase(TestCase):
    def test_post_creation(self):
        post = PostTableFactory()
        self.assertIsNotNone(post)

