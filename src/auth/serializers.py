from rest_framework import serializers
from django.contrib.auth.models import User
class UserModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = User # 使用するモデル
        fields = '__all__' # 処理対象にするフィールド（今回は全項目）

class SignInSerializer(serializers.Serializer):
    name = serializers.CharField()
    password = serializers.CharField()

class SignUpSerializer(serializers.Serializer):
    name = serializers.CharField()
    password = serializers.CharField()
    email = serializers.CharField()