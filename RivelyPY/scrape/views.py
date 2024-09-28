import requests
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .utils import generate_insights

import os
from pathlib import Path
import environ

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

env = environ.Env(
    DEBUG=(bool, False)
)

env_file = os.path.join(BASE_DIR, 'keys.env')
if os.path.exists(env_file):
    environ.Env.read_env(env_file)

RAPID_KEY = env("RAPID")

# Create your views here.
@api_view(['GET', 'POST'])
def scrape(request):
    companies = request.data['company']
    # get recent posts from the requested company
    url = "https://linkedin-api8.p.rapidapi.com/get-company-posts"
    response_data = []
    headers = {
        "x-rapidapi-key": RAPID_KEY,
        "x-rapidapi-host": "linkedin-api8.p.rapidapi.com"
    }

    for company in companies:
        querystring = {"username": company, "start": "0"}
        response = requests.get(url, headers=headers, params=querystring)
        data = response.json().get('data')
        post_texts = []
        for d in data:
            post_texts.append(d.get('text'))
        response_data.append({
            'company': company,
            'insights': generate_insights({
                'company': company,
                'data': post_texts
            })
        })
    return Response(response_data, status=status.HTTP_200_OK)