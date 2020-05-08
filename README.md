# Useful Scripts

Designed as a series of useful scripts.

## get-master

Used to get the latest version of master, and clean up additional branches that have since been deleted.

There are a number of flags that you can pass into the script, including `-p` followed by a file path, `-b` for the branch name, `-v` to print out verbose logging and `-m` to stay on the default branch.

You can pass a path as to where you would like the branches updated from, and an additional parameter for the default name of the branch, incase `master` isn't used as the primary branch.

By default it will use the current path, that you are executing the command from, to search for any subdirectories with git files. It will also assume that the primary branch is called master, unless specified otherwise.

### Usage

``` bash
bash get-master
bash get-master -p $DIRECTORY_PATH
bash get-master -p $DIRECTORY_PATH -b $DEFAULT_BRANCH_NAME
bash get-master -p "~/projects"
```

## clear-docker-images

Remove all docker images with specific tags, or if not specified, any that don't have the tag "latest".

### Usage

``` bash
bash clear-docker-images
bash clear-docker-images -t $TAG
bash clear-docker-images -t "<none>"
```

## first-time-setup

Script to setup a linux machine with various configs and aliases that I have found useful.

Additional work will need to be done within the `~/.bash_aliases` file for scripts such as `morning` and `night`.

For instance calling `get-master` within the morning, and `clear-docker-images` within night as options.

Other useful additions to an alias's file I have found are `start-<project>` and `stop-<project>`, which in turn call docker-compose functions from within the specific project folder.

### Usage

``` bash
bash first-time-setup $USER $EMAIL_ADDRESS
bash first-time-setup $USER "foo@company.com"
```
