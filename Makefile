default: check build run

check:
	yarn audit --groups dependencies

build:
	docker build -t document_explorer:latest .

run:
	docker run -d --rm -p 8097:80 --name document_explorer document_explorer:latest

stop:
	docker stop document_explorer

rebuild: stop build run
