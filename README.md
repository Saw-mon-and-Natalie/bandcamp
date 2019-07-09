`bc` or `BC` or `bandcamp`

### stack

- `jQuery`
- [`knockout.js`](https://knockoutjs.com/) for templating MVVM
- `varnish` cache server
- `fastly`
- `memcached` port `11211`
- `nginx`
- `SendGrid` for emails
- `ruby`
- `uncaffeinated` JS

### subdomains
- `t4.bcbits.com` stream files
- `f4.bcbits.com` user files
- `s4.bcbits.com` static files

```
https://t4.bcbits.com/stream/528e0e6a905748c1d40f6bf824a7e0b5/mp3-128/2912797003
https://t4.bcbits.com/stream/[stream_action_signature_?     ]/mp3-128/[TRACK_ID]

p: 0
ts: 1562694305
t: b799235f76075b5caf690c43c73c79741f44789b
token: 1562694305_adfa564aa5161e25002f07b802d837df732a6ce6

token: [timestamp]_[hash]

5d5d3aec40447e6f7f0e3c9324125b6e
528e0e6a905748c1d40f6bf824a7e0b5 > action signiture ???
3760afd24188803adc8fe0bcc54dbc0c
b799235f76075b5caf690c43c73c79741f44789b
adfa564aa5161e25002f07b802d837df732a6ce6

```
```
js > _crumbs
js > BandData
js > params
js > Tralbumdata > trackinfo > [i] > file > mp3-128 > ...

https://t4.bcbits.com/stream/528e0e6a905748c1d40f6bf824a7e0b5/mp3-128/
```

```js
function looksLikeDownloadCode(code) {
    return code.search(/^[a-z0-9]{4,5}\-[a-z0-9]{4,5}$/) === 0
}
```

Image files
```
https://f4.bcbits.com/img/0014569548_42.jpg
```