# Review Minner

## Getting started

npm i

Create .config file at root directory

npm start

## Installation of AWS in System

paste it in google and install latest version of aws https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html

aws --version

## Configure Aws Accout

aws --configure

Enter AWS Access Key ID

Enter AWS Secret Access Key

## Create Build And Deploy to Amazon S3

npm run build

aws s3 sync build/ s3://reviewminer.com
