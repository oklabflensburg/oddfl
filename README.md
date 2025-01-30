# Open Data Day 2025

[![Lint css files](https://github.com/oklabflensburg/oddfl/actions/workflows/lint-css.yml/badge.svg)](https://github.com/oklabflensburg/oddfl/actions/workflows/lint-css.yml)
[![Lint html files](https://github.com/oklabflensburg/oddfl/actions/workflows/lint-html.yml/badge.svg)](https://github.com/oklabflensburg/oddfl/actions/workflows/lint-html.yml)
[![Lint js files](https://github.com/oklabflensburg/oddfl/actions/workflows/lint-js.yml/badge.svg)](https://github.com/oklabflensburg/oddfl/actions/workflows/lint-js.yml)
[![Lighthouse CI](https://github.com/oklabflensburg/oddfl/actions/workflows/lighthouse.yml/badge.svg)](https://github.com/oklabflensburg/oddfl/actions/workflows/lighthouse.yml)


Website für den Open Data Day am 1. März 2025 in Flensburg basierend auf TailwindCSS und gebaut mit Parcel.

![Screenshot Open Data Day Website](https://raw.githubusercontent.com/oklabflensburg/oddfl/main/screenshot_opendataday_flensburg.jpg)



## Prepare Setup

Clone repository and install dependencies on your local and remote machine.

```sh
sudo apt install nginx-full certbot python3 virtualenv
git clone https://github.com/oklabflensburg/oddfl.git
cd oddfl
```


## How to Build

Make sure you have node installed on your machine, then install dependencies.

```
pnpm install
```


When you want to build the project run the following command

```
pnpm build
```


When you are developing on your local machine run this command

```
pnpm start
```


## Nginx Setup

To deploy your site, open nginx config on your remote machine and add this lines.

```
server {
    # listen 443 ssl http2;
    # listen [::]:443 ssl http2;
    server_name opendataday-flensburg.de;

    charset utf-8;

    add_header Content-Security-Policy "default-src 'self' ; script-src 'self'; img-src 'self' data: ; style-src 'self' 'unsafe-inline'; font-src 'self'; worker-src 'none'; object-src 'none'";

    root /opt/git/oddfl/dist;
    index index.html;

    location ~ /\. {
        deny all;
    }

    location ~* \.(ico|jpg|jpeg|png|webp|svg|js|css|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, no-transform";
    }
    
    listen 80;
}
```



## SSL Setup

Install ssl certificates, make sure to uncomment `http2` section after certbot run.

```sh
sudo certbot
```


## Nginx Service

Test nginx conig and start and enable nginx service on your system.

```sh
sudo nginx -t
sudo systemctl start nginx.service
sudo systemctl status nginx.service
sudo systemctl enable nginx.service
```
