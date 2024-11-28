
# Questions Scenario: Driveway Service Management System

David Smith, a driveway sealing contractor, wants a web-based solution to manage his client interactions and service workflow. The system will handle client registrations, quote requests, negotiations, work orders, billing, and dispute management.

## Task

### Frontend Developer:
Build a responsive dashboard for both David Smith (contractor) and his clients. The dashboards should include:

#### Contractor Dashboard:
- View and respond to incoming quote requests.
- Track ongoing work orders and their status.
- View bills and respond to client disputes.
- Generate a revenue report for a specified period.

#### Client Dashboard:
- Submit a quote request with property details (address, size, photos).
- View and respond to contractor quotes and bills.
- Track the status of their work orders and bills.

### Backend Developer:
Design a scalable and secure RESTful API to support the frontend functionality. Key endpoints include:

#### Authentication:
- Secure login and registration for clients and the contractor.

#### Quote Management:
- Create, retrieve, update, and delete quotes, including negotiation history.

#### Order and Billing:
- Manage orders and bills, including dispute resolution and payment tracking.

#### Reports:
- Generate revenue reports for the contractor.

#### Database Design:
- Implement database design using relational modeling, specifying primary keys, foreign keys, and constraints.
- Ensure server-side validation, error handling, and logging.

## Submission Requirements

### Frontend:
- The source code must follow best practices in component structuring, state management, and styling.
- Include basic animations for better user experience and micro-interactions for inputs and button clicks.

### Backend:
- Include an ER diagram of the database design.
- Provide clear and structured API documentation using tools like Swagger or Postman.
- Demonstrate secure handling of sensitive data (e.g., credit card information) using encryption or tokenization.

### General:
- Submit a Dockerized solution for easy deployment.
- Provide a `README.md` with setup instructions, along with testing steps.

## Technology Stack
- **Frontend**: Use **Next.js**.
- **Backend**: Use **Nest.js**.

## Team Instructions
- Work as a team to complete this assessment.
- Deadline: **Sunday 2024, 12 PM**.
- When completed, make a video explaining the steps you took to achieve the project and the challenges you faced.

**Good luck, team!**
