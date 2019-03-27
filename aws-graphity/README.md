# AWS Graphity

## Supports

- nodejs 8.10
- serverless-webpack
- serverless-offline
- eslint (@typescript-eslint/eslint-plugin)
- apollo-server-lambda
- graphity

## Installation

```bash
sls create --template-url https://github.com/corgidisco/serverless-templates/tree/master/aws-graphity --path myproject
cd myproject
npm install
```

**Development**

```bash
sls offline start --stage dev
sls deploy --stage dev
```

**Production**

```bash
sls offline start --stage prod
sls deploy --stage prod
```

## License

MIT
