# Upload Artifact

This tutorial guides you through the process of uploading an artifact (e.g., a software package with an execution script) to Allxon. This is a prerequisite for creating Over-the-Air (OTA) deployment tasks on the Allxon Portal.

The process involves three main steps:
1.  **Create an Artifact Record**: Register your artifact with Allxon to get a unique identifier.
2.  **Retrieve the Upload URL**: Get a secure, temporary URL to upload your file.
3.  **Upload the Artifact File**: Upload the actual file to the provided URL.

## Before You Start
- Make sure you have an artifact file ready for upload (e.g., `a19ae4e0ced9bddd59832e926004b4d2-Allxon_OTA_Artifact-L-all.tar.gz`). [Click here](https://github.com/allxon/allxon-hello-ota-example) to know how to prepare an artifact.
- You need to have an API Key (`ApiKeyID` and `ApiSecret`). If you don't have one, please follow the [Getting Started](/allxon-api/GettingStarted) to create your API key.

## Step 1: Create an Artifact Record

First, you need to inform Allxon about the new artifact you intend to upload. You do this by sending a `POST` request to the `/ota/artifact` endpoint with the artifact's name and its MD5 checksum.

### Request Body Examples
The request body should be a JSON object containing the artifact file name and the artifact file md5 checksum. See the sample code to learn how to calculate the md5.

```json
{
  "artifact_name": "e160822777ad520af247073166e5f57d-Allxon_OTA_Artifact-L-all.tar.gz",
  "artifact_md5": "f413eb1a3808ce8c37a0b21de35fb84f"
}
```

### Sample Code

#### Linux Sample Code: Using `curl` on the Command Line

1.  **Create a shell script** (`create_artifact.sh`) to make the API request. This script will calculate the MD5 checksum and send it in the request body.

```shell
#!/bin/bash

# --- Start of configuration ---
keyid="Your ApiKeyID"
secret="Your ApiSecret"
file_name="a19ae4e0ced9bddd59832e926004b4d2-Allxon_OTA_Artifact-L-all.tar.gz" # The name of your artifact file
# --- End of configuration ---

# get current epoch in milliseconds
EPOCH=$(date +%s%3N)
method="POST"
path="/ota/artifact"

# calculate artifact md5 (hex)
artifact_md5=$(md5sum "$file_name" | cut -d' ' -f1)

# create request body
body="{\"artifact_name\":\"$file_name\",\"artifact_md5\":\"$artifact_md5\"}"

# calculate signing_key
signing_key=$( echo -n "$(($EPOCH / 3600000))" | openssl dgst -sha256 -hmac "$secret" -r | cut -d' ' -f1 )

# calculate signature
# Note: The request body is NOT included in the signature calculation for Allxon API.
signature=$( echo -n "$method$path$EPOCH" | openssl dgst -sha256 -hmac "$signing_key" -r | cut -d' ' -f1 )

echo "Requesting to create artifact record..."

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
chmod u+x ./create_artifact.sh
./create_artifact.sh
```

You will receive a response containing the `artifact_uuid`. This UUID is the unique identifier for your artifact within Allxon.

**Example Response:**
```json
{
  "artifact_uuid": "a5ae26cf-3b80-4f7a-8bd1-6dfb1d3a125a"
}
```
Copy the `artifact_uuid` for the next step.

## Step 2: Retrieve the Upload URL

Now that you have an `artifact_uuid`, you need to request a pre-signed upload URL. This is a temporary, secure link that you can use to upload your artifact file directly to Allxon's storage.

### Request Body Examples
The request body should be a JSON object containing the artifact file md5 checksum same as the previous step.

```json
{
  "artifact_md5": "f413eb1a3808ce8c37a0b21de35fb84f"
}
```

### Sample Code

#### Linux Sample Code: Using `curl` on the Command Line

1.  **Create a shell script** (`get_upload_url.sh`). This script is very similar to the previous one, but it calls a different endpoint and requires the `artifact_uuid`.

```shell
#!/bin/bash

# --- Start of configuration ---
keyid="Your ApiKeyID"
secret="Your ApiSecret"
file_name="my-artifact.zip" # The name of your artifact file
artifact_uuid="The artifact_uuid from Step 1"
# --- End of configuration ---

# get current epoch in milliseconds
EPOCH=$(date +%s%3N)
method="POST"
path="/ota/artifact/$artifact_uuid"

# calculate artifact md5 (hex)
artifact_md5=$(md5sum "$file_name" | cut -d' ' -f1)

# create request body
body="{\"artifact_md5\":\"$artifact_md5\"}"

# calculate signing_key
signing_key=$( echo -n "$(($EPOCH / 3600000))" | openssl dgst -sha256 -hmac "$secret" -r | cut -d' ' -f1 )

# calculate signature
signature=$( echo -n "$method$path$EPOCH" | openssl dgst -sha256 -hmac "$signing_key" -r | cut -d' ' -f1 )

echo "Requesting upload URL..."

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
chmod u+x ./get_upload_url.sh
./get_upload_url.sh
```

The response will contain the `upload_url`, `content_md5`, and `content_type`.

**Example Response:**
```json
{
    "upload_url": "https://some-secure-storage-url.com/path/to/upload?signature=...",
    "content_md5": "RaLZ20TdZtMxGBYC1/OqxA==",
    "content_type": "application/octet-stream"
}
```
Copy the `upload_url`, `content_md5`, and `content_type` for the final step.

## Step 3: Upload the Artifact File

With the `upload_url`, you can now upload your artifact file. This is a `PUT` request made directly to the secure storage URL. This request does **not** require `ALLXON-SIG1` authentication, but it does require a `Content-MD5` header.

### Sample Code

#### Linux Sample Code: Using `curl` on the Command Line

1.  **Create a shell script** (`upload_artifact.sh`) to perform the upload.

```shell
#!/bin/bash

# --- Start of configuration ---
upload_url="The upload_url from Step 2"
content_md5="The content_md5 from Step 2"
file_name="a19ae4e0ced9bddd59832e926004b4d2-Allxon_OTA_Artifact-L-all.tar.gz"
# --- End of configuration ---

echo "Uploading artifact file..."

curl "$upload_url" \
-X "PUT" \
-H "Content-Type: application/octet-stream" \
-H "Content-MD5: $content_md5" \
-T "./$file_name" \
--compressed

```

2.  **Make the script executable and run it.**

```shell
chmod u+x ./upload_artifact.sh
./upload_artifact.sh
```

If the upload is successful, you will receive an empty response with an HTTP `200 OK` status code. Your artifact is now uploaded and can be used in OTA deployments on Allxon Portal. You can also trigger the deployment by Allxon API; see the next section for more detail.