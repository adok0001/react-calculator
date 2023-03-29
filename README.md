# react-calculator

This is a TypeScript-based calculator app built with React and AWS Amplify. The app uses a GraphQL API and a Cognito userpool for authentication.
[Live version on Amplify](https://master.d24sr9e1xdl2rt.amplifyapp.com/)

## Installation

> The following commands will be most accurate for use in the powershell terminal.
To install the app, follow these steps:

1. Clone the repository: `git clone https://github.com/me/reactcalculator.git` or
- Run `npx create-react-app react-calculator --template typescript` to create a new React app with TypeScript support.
- Build out the app's components.
2. Navigate to the app directory: `cd react-calculator`
3. Install dependencies: `npm install`

## AWS Amplify Integration

To set up AWS Amplify integration, [install the Amplify CLI](https://docs.amplify.aws/cli/start/install/) and follow these steps:

1. Run `amplify configure` to configure the AWS Amplify CLI on your local machine.
2. Run `amplify init` to create a new Amplify project for your app.
3. Run `amplify add auth` to add a Cognito userpool for authentication.
4. Run `amplify add api` to add a GraphQL API and schema with rules to only allow users access to their own history.
5. Run `amplify update api` and configure the API to use Cognito userpool as the authentication mode.
6. Run `amplify push` to deploy the backend configuration to the cloud.
7. Configure the [Authenticator](@aws-amplify/ui-react) component to only trigger on certain actions.
8. Configure the API to sync local and cloud data. If you encounter this [known issue](https://github.com/aws-amplify/amplify-js/issues/4257), you can resolve it by following [these steps](https://github.com/aws-amplify/amplify-js/issues/4257#issuecomment-622288820)

## Usage 

To run the app locally, use the following command:

`npm start`

To build the app, use the following command:

`npm run build`

## Testing

- Write tests using [Jest for TypeScript](@types/jest).
- Set up [WebDriver](https://www.selenium.dev/documentation/webdriver/)
To run tests, use the following command:

`npm test`

## Deploying React Frontend with Amplify
1. From your project directory, run `amplify console` and select **AWS Console**, or
    Navigate to the **Amplify Console** in the AWS Management Console.
2. From the app dashboard, select **Hosting Environments**
3. Choose **GitHub** as the Repository service provider and click on the **Connect branch** button.
4. **Authorize** Amplify Console to access your GitHub account, and select the repository containing your frontend code.
5. Click on the Branch dropdown and select the branch you want to deploy.
6. Under the Build settings
 - Choose Continuous deployment to enable automatic deployments.
 - Choose the existing environment and App type.
 - Select a service role, you might have to create a new one
7. Click on the Save and deploy button to deploy your app.

## Dockerfile

To build a Docker image of the app
Run the following command to build the Docker image:

```powershell
$version=1.0.0
docker build -t react-calculator:$version .
```

And to run and bind to port 3000:

`docker run -p 3000:3000 react-calculator`
 And  access it on http://your-network:80

## Contributing

To contribute to this project, please follow these steps:

1. Fork this repository to your own GitHub account.
2. Clone the forked repository to your local machine.
3. Create a new branch for your changes.
4. Make your changes and commit them with a descriptive commit message.
5. Push your changes to your forked repository.
6. Submit a pull request from your forked repository to this repository.
7. Wait for your pull request to be reviewed and merged.

Please make sure to adhere to the following guidelines:

- Follow the existing code style and conventions.
- Write tests for new features and ensure that existing tests pass.
- Use clear and descriptive commit messages.
- Ensure that your code is well-documented.

## Frequently Asked Questions (FAQ)

1. [npm install vs npm ci](https://stackoverflow.com/questions/52499617/what-is-the-difference-between-npm-install-and-npm-ci)

## Contact

To contact the project maintainer, please visit their website [here](https://adok0001.github.io/#contact).
