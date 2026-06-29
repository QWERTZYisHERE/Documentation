import requests
from bs4 import BeautifulSoup
import time
import json

BASE_URL = "https://baseldeutsch-woerterbuch.floatleft.ch"
headers = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36"
}

# Step 1: Get all word URLs from sitemap
r = requests.get(f"{BASE_URL}/sitemap.xml", headers=headers)
soup = BeautifulSoup(r.text, "xml")
all_urls = [loc.text for loc in soup.find_all("loc")]

word_urls = [
    u for u in all_urls
    if "/tag/" not in u
    and "/category/" not in u
    and u not in (BASE_URL, BASE_URL + "/")
]

print(f"Scraping {len(word_urls)} words...")

# Step 2: Scrape each word page
results = []
for i, url in enumerate(word_urls):
    r = requests.get(url, headers=headers)
    if r.status_code != 200:
        print(f"  Skipping {url} (status {r.status_code})")
        continue

    soup = BeautifulSoup(r.text, "html.parser")
    desc = soup.find("meta", property="og:description")
    title = soup.find("meta", property="og:title")

    if desc and title:
        german = title["content"].replace(" – Baseldeutsch Wörterbuch", "").strip()
        translations = [t.strip() for t in desc["content"].split(",")]
        results.append({"german": german, "baseldeutsch": translations})

    if i % 50 == 0:
        print(f"  {i}/{len(word_urls)} done...")

    time.sleep(0.5)  # polite delay

# Step 3: Save to JSON
with open("baseldeutsch.json", "w", encoding="utf-8") as f:
    json.dump(results, f, ensure_ascii=False, indent=2)

print(f"\nDone! Saved {len(results)} entries to baseldeutsch.json")