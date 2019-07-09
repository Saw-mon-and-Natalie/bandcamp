from bs4 import BeautifulSoup as BSoup

with open("bc.html", "r") as f:
    soup = BSoup(f)
    b = s.body.select("#pgBd")[0]
    sc = b.find_all("script")
    sc[1]