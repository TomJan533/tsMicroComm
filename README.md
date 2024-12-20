# tsMicroComm

API that implements user-service, notification-service with Kafka message broker communiation.

![CI](https://github.com/TomJan533/tsMicroComm/actions/workflows/ci.yml/badge.svg)

## Project Structure Blueprint

Covers most important files and folders.

```bash
/tsMicroComm
│
├── /user-service
│   ├── /src
│   │   ├── /controllers
│   │   ├── /models
│   │   ├── /routes
│   │   ├── /services
│   │   ├── /validators
│   │   ├── /serializers
│   │   ├── /types # service specific types
│   │   ├── ...
│   │   └── app.ts
│   ├── /tests
│   │   ├── /unit
│   │   │   ├── user.controller.test.ts
│   │   │   └── user.service.test.ts
│   │   ├── /integration
│   │   │   └── user.integration.test.ts
│   ├── Dockerfile
│   ├── package.json
│   ├── tsconfig.json
│   └── /node_modules
│
├── /notification-service
│   ├── /src
│   │   ├── /controllers
│   │   ├── /models
│   │   ├── /routes
│   │   ├── /services
│   │   ├── /validators
│   │   ├── /serializers
│   │   ├── /types # service specific types
│   │   ├── ...
│   │   └── app.ts
│   ├── /tests
│   │   ├── /unit
│   │   │   ├── notification.controller.test.ts
│   │   │   └── notification.service.test.ts
│   │   ├── /integration
│   │   │   └── notification.integration.test.ts
│   ├── Dockerfile
│   ├── package.json
│   ├── tsconfig.json
│   └── /node_modules
│
│
├── /docker-compose.yml
├── ...
└── README.md
```