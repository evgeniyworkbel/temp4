lint-frontend:
	make -C frontend lint

install:
	npm ci

start-backend:
	npx start-server

start-frontend:
	make -C frontend start

start:
	make start-backend & make start-frontend

publish:
	npm publish --dry-run
