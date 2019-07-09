# import string
# az = string.ascii_lowercase[:26]

# for i in range(26):
#     print('var {} = function(int){{ return {}(++int); }};'.format(az[i], az[i+1]))
#     #print('We are the {} who say "{}!"'.format('knights', 'Ni'))

# # https://bandcamp.com/ectotherm/snakeoil_crumbs


# curl "https://bandcamp.com/ectotherm/snakeoil_requests?snakeoil_user=gilamonster" -H "" --compressed


curl "https://bandcamp.com/ectotherm/get_the_snakeoil_password?snakeoil_param=frog&snakeoil_user=gilamonster" 
    -H "User-Agent: SnakeOil/5.0 (USER 9.0; Agent 6.0; String/5.0) Gecko/321" -H "Content-Type: application/x-www-form-urlencoded" -H "Content-Length: 45"

curl -X POST -H 'User-Agent: SnakeOil/5.0 (USER 9.0; Agent 6.0; String/5.0) Gecko/321' -H 'Content-Type: application/x-www-form-urlencoded' -H 'Content-Length: 45' -v -i 'https://bandcamp.com/ectotherm/get_the_snakeoil_password?snakeoil_param=frog&snakeoil_user=gilamonster'


# POST https://bandcamp.com/ectotherm/get_the_snakeoil_password HTTP/1.1
# Host: bandcamp.com
# User-Agent: SnakeOil/5.0 (USER 9.0; Agent 6.0; String/5.0) Gecko/321
# Content-Type: application/x-www-form-urlencoded
# Content-Length: 45

# snakeoil_param=frog&snakeoil_user=gilamonster

import requests

headers = {
    'User-Agent': 'SnakeOil/5.0 (USER 9.0; Agent 6.0; String/5.0) Gecko/321',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': '45',
}

params = (
    ('snakeoil_param', 'frog'),
    ('snakeoil_user', 'gilamonster'),
)

response = requests.get('https://bandcamp.com/ectotherm/get_the_snakeoil_password', headers=headers, params=params)

#NB. Original query string below. It seems impossible to parse and
#reproduce query strings 100% accurately so the one below is given
#in case the reproduced version is not "correct".
# response = requests.get('https://bandcamp.com/ectotherm/get_the_snakeoil_password?snakeoil_param=frog&snakeoil_user=gilamonster', headers=headers)

fetch("https://bandcamp.com/ectotherm/get_the_snakeoil_password", 
{"headers":
    {"User-Agent":"SnakeOil/5.0 (USER 9.0; Agent 6.0; String/5.0) Gecko/321",
    "Content-Type":"application/x-www-form-urlencoded",
    "Content-Length":"45"},
    "referrerPolicy":"no-referrer-when-downgrade",
    "body":"snakeoil_param=frog&snakeoil_user=gilamonster",
    "method":"POST"});


gilamonster uses the dumbest password you can think of - log in with it at bandcamp.com/ectotherm/constrict_login
password : password

email your cover letter and resume to herpetologist@bandcamp.com



https://bandcamp.com/ectotherm/snakeoil_crumbs

POST https://bandcamp.com/ectotherm/get_the_snakeoil_password HTTP/1.1
Host: bandcamp.com
User-Agent: SnakeOil/5.0 (USER 9.0; Agent 6.0; String/5.0) ?????/321
Content-Type: application/x-www-form-urlencoded
Content-Length: 45

snakeoil_param=????&snakeoil_user=???????????



https://bandcamp.com/gilamonster
https://thenandthen.bandcamp.com/track/think
https://callandcall.bandcamp.com/track/it


https://bandcamp.com/ectotherm/snakeoil_requests?snakeoil_param=frog
https://bandcamp.com/ectotherm/snakeoil_requests?&snakeoil_user=gilamonster

https://dothelaundry.bandcamp.com/ectotherm/launder_cb

it("dirty");

it = function(str) {
	var the_answer = "";
	for (var i = 0; i < str.length; i++) {
		the_answer += window[str[i]](0);	
	}
	return the_answer;
};

lookup = ["f", "y","d", "s","v", "k", "e", "i", "n", "p","a", "t", "l", "r", "j", "u", "z", "o", "g", "w", "c","q", "m", "h", "x", "b"];

var a = function(int) { return b(++int); };
...
var z = function(int) { return lookup[int]; };

it( )

Through Luander();

window.Launder("what_it()_returns");
