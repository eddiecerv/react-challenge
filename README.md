# Challenge React.js

This project is a simple React App using Typescript and Vite.

# Development

Make a clone from [Repository](git@github.com:eddiecerv/react-challenge.git).

This will pull a copy of the project from master branch.

For development you need to generate an specific branch for the change using Git strategy feature/name, fix/name, hotfix/name, release/name from the master branch.

- Note. You should not be able to push direct to other branches only yours. Each new version should generate a Pull Request against master branch from your branch.

To run application locally for development you:

- Have Node 18+ version installed on your machine. Use [NVM](https://github.com/nvm-sh/nvm) for easy installation and version management.
- Run commands:

> npm install # To install all node packages.
> npm run dev # To run app locally in development mode.

Once you run dev command, you should be able to navigate to your local app on http://localhost:3000 by default.

# Installation

Make a clone from [Repository](git@github.com:eddiecerv/react-challenge.git).

To make an easy installation you need to download and install Docker on your machine [Docker Desktop](https://www.docker.com/products/docker-desktop/).

After installation, open Docker Application (needs to open before to be able to run commands).

Open the project using a CLI or Terminal and go to the project folder using cd commands.

Once in the root of the folder of the project, execute the next commands:

- This is to generate docker image container using name react-challenge as container name at latest version.

> docker build -t react-challenge .

- After docker image generated and have locally then execute Docker Compose to deploy image.

> docker-compose up -d

The project should run on local maching using port 80. So then you should be able to go http://localhost/ to see application running.
