#!/bin/bash

# This script performs the following tasks:
# 1. Initializes a new Git repository
# 2. Adds all modified files to the staging area
# 3. Commits the staged changes with a specified commit message
# 4. Pushes the commits to the specified remote repository

# Set the commit message
read -p "Enter commit message: " commit_message

# git remote add origin https://gitlab.com/mobigrow/applications/wallet-web-application.git




# Initialize the repository and add all modified files to the staging area
# git init
git add .

# Commit the staged changes
git commit -m "$commit_message"

# Set the remote repository URL
# read -p "Enter remote repository URL: " remote_repo

# Push the commits to the remote repository
# git push $remote_repo master
git branch -M main
git push -uf origin main


# chmod +x git-automation.sh
