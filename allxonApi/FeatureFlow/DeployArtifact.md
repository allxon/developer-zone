# Deploying an Allxon Artifact
This tutorial guides you through the process of triggering and monitoring an OTA (Over-the-Air) deployment using the Allxon API. This is a crucial step after you have successfully uploaded your artifact.

## Before You Start
- Make sure you have an artifact already uploaded. You can learn how to upload an artifact in the [previous section](/allxon-api/FeatureFlow/UploadArtifact).
- You need to have an API Key (`ApiKeyID` and `ApiSecret`). If you don't have one, please follow the [Getting Started](/allxon-api/GettingStarted) to create your API key.

## Step 1: Trigger the Deployment
To trigger a deployment, you will make a `POST` request to the `/ota/deployment` endpoint. You must provide the serial numbers of the devices you want to update and the UUID of the artifact you previously uploaded.

### Request Body Examples
The request body should be a JSON object containing the device serial numbers and the artifact UUID.

```json
{
  "device_sn": [
    "a41c03c45e1c11ec9389bba7faa790bc"
  ],
  "artifact_uuid": "a5ae26cf-3b80-4f7a-8bd1-6dfb1d3a125a"
}
```

### With runtime arguments (optional)
If your execution script (`ota_deploy.sh`) requires runtime arguments, you can include an optional `arguments` field. You can learn more about this at https://github.com/allxon/allxon-ota-args-example.
```json
{
  "device_sn": [
    "a41c03c45e1c11ec9389bba7faa790bc"
  ],
  "artifact_uuid": "a5ae26cf-3b80-4f7a-8bd1-6dfb1d3a125a",
  "arguments": [
    {
      "argument1": "value1",
      "argument2": "value2"
    }
  ]
}
```

### Sample Code

#### Linux Sample Code: Using `curl` on the Command Line
1.  **Create a shell script** (`deploy_artifact.sh`) to make the API request. This script will calculate the MD5 checksum and send it in the request body.

```shell
#!/bin/bash

# --- Start of configuration ---
keyid="Your ApiKeyID"
secret="Your ApiSecret"
device_sn="Your device serial number"
artifact_uuid="Your artifact UUID"
# --- End of configuration ---

# get current epoch in milliseconds
EPOCH=$(date +%s%3N)
method="POST"
path="/ota/deployment"

# create request body
body="{\"device_sn\":[\"$device_sn\"],\"artifact_uuid\":\"$artifact_uuid\"}"

# calculate signing_key
signing_key=$( echo -n "$(($EPOCH / 3600000))" | openssl dgst -sha256 -hmac "$secret" -r | cut -d' ' -f1 )

# calculate signature
signature=$( echo -n "$method$path$EPOCH" | openssl dgst -sha256 -hmac "$signing_key" -r | cut -d' ' -f1 )

echo "Triggering deployment..."

curl "https://us.api.allxon.com$path" \
-X "$method" \
-H "Accept: application/json" \
-H "Accept-Encoding: gzip" \
-H "Content-Type: application/json" \
-H "Authorization: ALLXON-SIG1 Credential=\"$keyid\",Signature=\"$signature\"" \
-H "X-Allxon-Epoch: $EPOCH" \
-d "$body" \
--compressed
```

2.  **Make the script executable and run it.**

```shell
chmod u+x ./deploy_artifact.sh
./deploy_artifact.sh
```

The API will respond with a `202` status code and a response body containing the `deployment_id`, `deployment_accepted`, and `deployment_rejected` fields. The `deployment_id` is crucial for the next step. If any devices are not deployable, the `deployment_rejected` field will contain an error message.

## Step 2: Check Deployment Status
You can use a `GET` request to the `/ota/deployment/{deployment_id}/{deployment_status}` endpoint to check the status of each device in your deployment.

The `deployment_status` parameter can be one of the following values: `all`, `processing`, `success`, or `failed`, allowing you to filter the results.

### Example Response
```json
[
  {
    "device_sn": "a41c03c45e1c11ec9389bba7faa790bc",
    "deployment_status": "processing",
    "update_epoch": 1627584000
  }
]
```

### Sample Code

#### Linux Sample Code: Using `curl` on the Command Line
1.  **Create a shell script** (`check_deployment_status.sh`) to make the API request to get the deployment status with `deployment_status='all'`.

```shell
#!/bin/bash

# --- Start of configuration ---
keyid="Your ApiKeyID"
secret="Your ApiSecret"
deployment_id="The deployment_id from Step 1"
# --- End of configuration ---

# get current epoch in milliseconds
EPOCH=$(date +%s%3N)
method="GET"
path="/ota/deployment/$deployment_id/all"

# calculate signing_key
signing_key=$( echo -n "$(($EPOCH / 3600000))" | openssl dgst -sha256 -hmac "$secret" -r | cut -d' ' -f1 )

# calculate signature
signature=$( echo -n "$method$path$EPOCH" | openssl dgst -sha256 -hmac "$signing_key" -r | cut -d' ' -f1 )

echo "Checking deployment status..."

curl "https://us.api.allxon.com$path" \
-X "$method" \
-H "Accept: application/json" \
-H "Accept-Encoding: gzip" \
-H "Authorization: ALLXON-SIG1 Credential=\"$keyid\",Signature=\"$signature\"" \
-H "X-Allxon-Epoch: $EPOCH" \
--compressed
```

2.  **Make the script executable and run it.**

```shell
chmod u+x ./check_deployment_status.sh
./check_deployment_status.sh
```

3.  **Confirming Completion by Polling**
By periodically polling the API with the deployment ID, you can confirm whether the entire deployment has been completed. Be sure to check the [Ratelimits](/allxon-api/Ratelimits) section to design an appropriate polling period.