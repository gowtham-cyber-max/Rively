from openai import OpenAI

import json

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

client = OpenAI(api_key=env('OPENAI'))

def generate_insights(data):
    prompt = f"""
    Act as an expert in Competitive Intelligence. Your will be given data about competitors of a company obtained 
    from credible sources. Your task is to analyse the data and extract useful insights about the competitors and return
    in json format with the below values: insight heading, insight subtext, time, source url, and a tag from (Pricing, 
    Product Offering, Market Entry, Hiring, Layoffs, Management changes, Fundraising, M&A, Content Marketing, Vendors, 
    Tech stack, Specs, Event Participation, Partnerships, Clients, Media Mentions, Corporate Filings). Tone of the 
    output should be formal, straight-to-the-point. Include useful and relevant numbers and terms from the data into the
    output wherever possible to make it accurate.
    """

    response = client.chat.completions.create(model="gpt-3.5-turbo",
    messages=[
        {"role": "system", "content": "Use the following Data: " + json.dumps(data)},
        {"role": "user", "content": prompt}
    ],
    max_tokens=1500)

    content = response.choices[0].message.content
    print(content)
    try:
        content_dict = json.loads(content)
    except json.JSONDecodeError as e:
        print(f"JSONDecodeError: {e}")
        return content
    return content_dict
