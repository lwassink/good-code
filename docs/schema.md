# Schema Information

## users

column name | data type | details
----------- | --------- | -------
id | integer | not null, primary key
username | string | not null
email | string | not null
password_digest | string | not null
session_token | string | not null

## programs

column name | data type | details
----------- | --------- | -------
id | integer | not null, primary key
name | string | not null
creator | string | not null
source_code_url | string |
image_url | string |
description | text | not null
author_id | integer | not null, foreign key (references users), indexed

## reviews

column name | data type | details
----------- | --------- | -------
id | integer | not null, primary key
body | text | not null
used_for | string |
author_id | integer | not null, foreign key (references users), indexed
program_id | integer | not null, foreign key (references programs), indexed

## statuses

column name | data type | details
----------- | --------- | -------
id | integer | not null, primary key
content | string | not null
user_id | integer | not null, foreign key (references users), indexed
program_id | integer | not null, foreign key (references programs), indexed

