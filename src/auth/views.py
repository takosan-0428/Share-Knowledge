from rest_framework.views import APIView
from rest_framework.response import Response
import json
from django.http.response import JsonResponse
from django.contrib.auth import authenticate, login, logout
from .serializers import SignInSerializer
from .serializers import SignUpSerializer
from django.contrib.auth.models import User

# Create your views here.
class SignInAPIView(APIView):
    def post(self, request):
        # postで送られてきたデータを変数に格納
        data=request.data
        # バリデーションの適用
        serializer = SignInSerializer(data=request.data)
        if serializer.is_valid():
            # アカウント登録されたユーザであるかを判定
            user = authenticate(request,username = data['name'], password = data['password'])
            if user is not None:
                # ログイン処理
                login(request, user)
                result = "success"
            else:
                result = "faild"
            return JsonResponse(result,safe=False)
        else:
            return Response(serializer.errors, status=400)

class SignUpAPIView(APIView):
    def post(self, request):
        # postで送られてきたデータを変数に格納
        data=request.data
        # バリデーションの適用
        serializer = SignUpSerializer(data=request.data)
        if serializer.is_valid():
            # アカウント登録
            user = User.objects.create_user(data['name'], data['email'], data['password'])
            if user is not None:
                result = "success"
            else:
                result = "faild"
            return JsonResponse(result,safe=False)
        else:
            return Response(serializer.errors, status=400)

class LogOutAPIView(APIView):
    def get(self, request):
        # ログアウト処理
        logout(request)
        result = "success"
        return JsonResponse(result,safe=False)