# myapp/urls.py
from django.urls import path
from .views import SignInAPIView
from .views import SignUpAPIView
from .views import LogOutAPIView

urlpatterns = [
    path('signin/', SignInAPIView.as_view(), name='sign_in'), # ログインのルーティング
    path('signup/', SignUpAPIView.as_view(), name='sign_up'), # アカウント登録のルーティング
    path('logout/', LogOutAPIView.as_view(), name='logout'), # ログアウトのルーティング
]
