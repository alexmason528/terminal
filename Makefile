.PHONY: build
build:
	docker-compose build
	docker-compose run backend python manage.py migrate
	docker-compose run backend python manage.py loaddata api/fixtures/addresses.json

.PHONY: start
start:
	docker-compose up -d

.PHONY: stop
stop:
	docker-compose down
