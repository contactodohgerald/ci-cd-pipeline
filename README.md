# Laravel CI/CD and Deployment to DigitalOcean

This repository provides a guide and configuration files for setting up a CI/CD pipeline with GitHub Actions and deploying a Laravel application to DigitalOcean.

## Overview

The CI/CD pipeline automates the process of building, testing, and deploying a Laravel application whenever changes are pushed to the `main` branch. The pipeline uses GitHub Actions for continuous integration and the deployment is done to a DigitalOcean Droplet.

## Prerequisites

- [DigitalOcean account](https://www.digitalocean.com/)
- [GitHub account](https://github.com/)

## Steps

1. Set up Laravel application:
   - Install Laravel locally using Composer.
   - Create a new Laravel project using the `laravel new` command.
   - Configure the necessary settings, such as the database connection and environment variables.

2. Create a new repository on GitHub:
   - Create a new repository on GitHub to host your Laravel application.

3. Configure GitHub Actions for CI/CD:
   - Inside your Laravel project, create a `.github/workflows` directory.
   - Inside this directory, create a YAML file (e.g., `ci-cd.yaml`) for GitHub Actions.
   - Copy the contents from the provided `ci-cd.yaml` file in this repository to the workflow file.
   - Commit and push the workflow file to your GitHub repository.

4. Prepare DigitalOcean:
   - Sign up for a DigitalOcean account if you haven't already.
   - Create a new Droplet (virtual server) on DigitalOcean.
   - Configure the Droplet with your preferred settings and choose the appropriate size and region.

5. Configure secrets in your GitHub repository:
   - In your GitHub repository, go to "Settings" -> "Secrets".
   - Add the following secrets:
     - `DIGITALOCEAN_HOST`: The IP address or hostname of your DigitalOcean Droplet.
     - `DIGITALOCEAN_USERNAME`: The SSH username for your Droplet.
     - `DIGITALOCEAN_PASSWORD`: The SSH password for your Droplet.
     - `DIGITALOCEAN_PORT`: The SSH port for your Droplet (usually 22).

6. Deploy to DigitalOcean:
   - With the CI/CD pipeline set up, any push to the `main` branch will trigger the pipeline.
   - The pipeline will run the tests, and if successful, it will deploy the application to your DigitalOcean Droplet.

## Usage

1. Clone the repository:

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
