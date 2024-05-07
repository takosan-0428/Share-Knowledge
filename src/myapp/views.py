from rest_framework.views import APIView
from rest_framework.response import Response

class HelloWorldAPIView(APIView):
    def get(self, request):
        data = {"message": "野口聡"}
        return Response(data)

