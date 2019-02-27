# Get That Issue

## Project Requirements

- Git
- Node > 8.10.0

## Step 1: Fork this repository

Fork the project by clicking the Fork button on the top-right hand corner. Wait while the repository is being forked. All done!

This will create a copy of this repository in your account.

## Step 2: Clone the repository

Now clone the forked repository to your machine. Go to your GitHub account, open the forked repository, click on the clone button and then click the _copy to clipboard_ icon.

Open a terminal and run the following git command:

```
git clone "url you just copied"
```

where "url you just copied" (without the quote marks) is the url to this repository (your fork of this project). See the previous steps to obtain the url.

For example:

```
git clone https://github.com/this-is-you/get-that-issue.git
```

where `this-is-you` is your GitHub username. Here you're copying the contents of the get-that-issue.git repository in GitHub to your computer.

## Step 3: Install Project dependencies

Run

```
yarn install or npm install
```

## Create a branch

Change to the repository directory on your computer (if you are not already there):

```
cd get-that-issue.git
```

Now create a branch using the `git checkout` command:

```
git checkout -b <add-your-new-branch-name>
```

For example:

```
git checkout -b name-of-your-branch
```

## Make necessary changes and commit those changes

Make all the possible changes according to the issue.

If you go to the project directory and execute the command `git status`, you'll see there are changes.

Add those changes to the branch you just created using the `git add` command:

```
git add changes-you-made
```

Now commit those changes using the `git commit` command:

```
git commit -m "your-commit-message"
```

## Push changes to GitHub

Push your changes using the command `git push`:

```
git push origin <add-your-branch-name>
```

replacing `<add-your-branch-name>` with the name of the branch you created earlier.

## Submit your changes for review

If you go to your repository on GitHub, you'll see a `Compare & pull request` button. Click on that button.

Now submit the pull request.
