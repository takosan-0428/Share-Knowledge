FROM nginx:mainline AS web-base

# ポート開放
EXPOSE 80 443

# OpenSSLのインストール
# RUN apt-get update && apt-get install -y openssl

# nginx.confのコピー
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf


FROM web-base AS web-dev

# confディレクトリのコピー
COPY ./nginx/conf_dev/ /etc/nginx/conf/


FROM web-base AS web-prod

# confディレクトリのコピー
COPY ./nginx/conf_prod/ /etc/nginx/conf/


FROM python:3.9.18 AS app-base

SHELL [ "/bin/bash", "-c" ]

# ポート開放
EXPOSE 8000 5173

# requirements.txtのコピー
COPY ./python/requirements.txt /var/www/app/requirements.txt

# requirements.txtのインストール
RUN pip install --no-cache-dir -r /var/www/app/requirements.txt


FROM app-base AS node-install

# Node.jsのインストール
COPY --from=node:lts  /usr/local/bin/node /usr/local/bin/node
COPY --from=node:lts  /usr/local/lib/node_modules /usr/local/lib/node_modules
COPY --from=node:lts  /usr/local/bin/npm /usr/local/bin/npm

# npm用のシンボリックリンクを作成
RUN ln -s /usr/local/lib/node_modules/npm/lib/cli.js /usr/local/lib/cli.js

# npmを最新バージョンにアップデート
RUN npm install -g npm


FROM node-install AS app-dev

# Pycacheを作成しない環境変数を設定
ENV PYTHONDONTWRITEBYTECODE=1 

# 作業ディレクトリーの設定
WORKDIR /var/www/app


FROM node-install AS app-prod

# 作業ディレクトリーの設定
WORKDIR /var/www/app



FROM mysql:8.3.0 AS db-base

# ポート開放
EXPOSE 3306

# mycnfのコピー
COPY ./mysql/my.cnf /etc/mysql/my.cnf

# 共通の環境変数を設定
ENV TZ=Asia/Tokyo
ENV MYSQL_DATABASE=PSI


FROM db-base AS db-dev

# 環境変数を設定
ENV MYSQL_ROOT_PASSWORD=IslamSaimun


FROM phpmyadmin:5.2.1 AS admin

# ポート開放
EXPOSE 80