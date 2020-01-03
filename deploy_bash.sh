#!/bin/bash
export app='node_daohuytuan' # container & image name
path_app="$HOME/daohuytuan"
gitProjectName="daohuytuan"
gitProjectUrl="git@github.com:DaoHuyTuan/daohuytuan.git"

path_static_server="$HOME/static-server"
gitStaticServerName="static-server"
gitStaticServerUrl="git@github.com:DaoHuyTuan/static-server.git"

gitBranch="master"
hostDockerRegistry="127.0.0.1"
portDockerRegistry="5000"
version="latest"

changeDir() {
	cd $path_app/$gitProjectName
	if [ ! $? -eq 0 ]; then
		echo "cd $path_app/$gitProjectName ERROR"
		exit 1
	fi
}

cloneProject() {
	echo "CLONE project"
	mkdir -p $path_app
	if [ ! $? -eq 0 ]; then
    	exit 1
	fi

	cd $path_app
        git clone $gitProjectUrl
	if [ ! $? -eq 0 ]; then
		rmdir $path_app
    	exit 1
	fi
}
changeDirStaticServer() {
	cd $path_app/$gitStaticServerName
	if [ ! $? -eq 0 ]; then
		echo "cd $path_app/$gitStaticServerName ERROR"
		exit 1
	fi
}
cloneStaticServer() {

	echo "CLONE static server"
	mkdir -p $path_static_server
	
	if [ ! $? -eq 0 ]; then
    	exit 1
	fi
	cd $path_static_server
	git clone $gitStaticServerUrl
	if [ ! $? -eq 0 ]; then
		rmdir $path_static_server
    	exit 1
	fi
}

pullProject() {
	echo "PULL project"
	changeDir

	git checkout -- .
	if [ ! $? -eq 0 ]; then
		echo "git checkout ERROR"
		exit 1
	fi

	git checkout -b $gitBranch origin/$gitBranch
	outputCode=$?
	if [ ! $outputCode -eq 0 ]; then
		if [ ! $outputCode -eq 128 ]; then
			echo "git checkout -b $gitBranch ERROR"
			exit 1
		else
			git checkout $gitBranch
			if [ ! $? -eq 0 ]; then
				echo "git checkout $gitBranch ERROR"
			fi
		fi
	fi

	git pull
	if [ ! $? -eq 0 ]; then
		echo "git pull $gitBranch ERROR"
		exit 1
	fi
}
pullProjectStatic() {
	echo "PULL project static server" 
	changeDirStaticServer

	git checkout -- .
	if [ ! $? -eq 0 ]; then
		echo "git checkout ERROR"
		exit 1
	fi

	git checkout -b $gitBranch origin/$gitBranch
	outputCode=$?
	if [ ! $outputCode -eq 0 ]; then
		if [ ! $outputCode -eq 128 ]; then
			echo "git checkout -b $gitBranch ERROR"
			exit 1
		else
			git checkout $gitBranch
			if [ ! $? -eq 0 ]; then
				echo "git checkout $gitBranch ERROR"
			fi
		fi
	fi

	git pull
	if [ ! $? -eq 0 ]; then
		echo "git pull $gitBranch ERROR"
		exit 1
	fi
}

buildDockerImage() {
	echo "run Docker Build"
	changeDir

	docker build -t $app .
	if [ ! $? -eq 0 ]; then
		echo "docker build ERROR"
		exit 1
	else
		echo "docker build SUCCESS"
	fi
}

pushImagesToLocalRegistry() {
	echo "Pushing Images to a Local Registry"
	changeDir

	docker image tag $app:$version $hostDockerRegistry:$portDockerRegistry/$app:$version
	if [ ! $? -eq 0 ]; then
		echo "docker image tag ERROR"
		exit 1
	fi

	docker image push $hostDockerRegistry:$portDockerRegistry/$app:$version
	if [ ! $? -eq 0 ]; then
		echo "docker image push ERROR"
		exit 1
	fi
}

dockerDeploy() {
  docker-compose up -d
}

deleteOldImage() {
	echo "run Delete Old Docker Containers & Images"

	docker ps -a --filter "status=exited" --filter "name=$app" -q | xargs --no-run-if-empty docker rm
	if [ ! $? -eq 0 ]; then
		echo "Delete Old Docker Containers ERROR"
	else
		echo "Delete Old Docker Containers SUCCESS"
	fi

	docker image prune -f --filter dangling=true --filter "label=maintainer=$app"
	if [ ! $? -eq 0 ]; then
		echo "Delete Old Docker Images ERROR"
	else
		echo "Delete Old Docker Images SUCCESS"
	fi
	echo "FINISH"
}


if [ ! -d "$path_app/$gitProjectName" ]; then
	cloneProject
fi
if [ ! -d "$path_app/$gitStaticServerName" ]; then
	cloneStaticServer
fi
pullProject
pullProjectStatic
buildDockerImage
pushImagesToLocalRegistry
deleteOldImage
dockerDeploy
