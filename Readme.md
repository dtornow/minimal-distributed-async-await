# Minimal Distributed Async Await Framework

At Resonate, we are working on Distributed Async Await, an extension of Async Await that makes distribution a first class citizen. Distributed Async Await is based on two primitives, Durable Functions and Durable Promises－and one simple idea, Resume Semantics.

Resume Semantics refers to the ability to resume from an interruption point in case of a voluntary (await) or involuntary (crash) interruption.

Distributed Async Await allows developers to express the concurrent and distributed structure of their computations to coordinate concurrent executions across an arbitrary number of processes.

This repo explores how to build a minimal Distributed Async Await framework in about 60 lines of Javascript, including a mocked Function as a Service framework.

## Running the Application

### Prerequisites

Node.js installed on your machine.

### Steps

#### 1. Clone the Repository

```
git clone <repository-url>
cd <repository-directory>
```

#### 2. Make the loop.sh Script Executable:


```
chmod +x loop.sh
```

#### 3. Run the Script with the Initial Input Message:

```
./loop.sh '{"queue": "countdown", "event": {"args": ["123-456-7890", 5, 1000], "history": []}}'
```

Alternatively, run the script with default values

```
./loop.sh
```

This setup will execute the countdown function by scheduling tasks and resuming from the last completed step after each delay, simulating efficient execution on a FaaS platform.