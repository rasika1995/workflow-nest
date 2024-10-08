# NestJS Temporal Example

This is a sample NestJS project demonstrating how to integrate Temporal workflows. The project aims to explore workflow tools like Temporal, Flowable, and Camunda in the future.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Starting the Application](#starting-the-application)
- [Running Workers](#running-workers)
- [Workflows](#workflows)
- [Future Integrations](#future-integrations)
- [License](#license)

## Prerequisites

- Node.js (v14 or later)
- Yarn (v1.22 or later)
- Temporal server running locally or accessible via the network.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/rasika1995/workflow-nest.git
   cd workflow-nest
   ```

2. Install dependencies using Yarn:

   ```bash
   yarn install
   ```

## Usage

### Configuration

Before running the application, ensure that your Temporal server is up and running. 

1. Clone the Temporal Docker Compose repository:

   ```bash
   git clone https://github.com/temporalio/docker-compose.git
   cd docker-compose
   ```

2. Start Temporal Using Docker Compose:

   Run the following command to start Temporal and its dependencies: 

   ```bash
   docker-compose up
   ```

   This will spin up the Temporal server, along with its dependencies like Cassandra (for data storage), Prometheus (for monitoring), and Grafana (for visualization). 

3. Verify Temporal Server is Running:

   Temporal’s web interface should be accessible at [http://localhost:8088](http://localhost:8088).

### Starting the Application

To start the NestJS application, use the following command:

```bash
yarn start
```

This will start the NestJS server on the default port (3000).

## Workflows

This project includes two cron workflows:

1. A workflow that runs every 5 minutes.
2. A workflow that runs every minute.

You can start these workflows via HTTP requests to the following endpoints:

- Start the 5-minute cron workflow:
  
  ```http
  GET http://localhost:3000/temporal/start-cron
  ```

- Start the 1-minute cron workflow:

  ```http
  GET http://localhost:3000/temporal/start-minute-cron
  ```

## Future Integrations

This project is intended for research and development on various workflow tools, including Temporal, Flowable, and Camunda. As these integrations progress, the project will evolve to demonstrate additional capabilities.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.