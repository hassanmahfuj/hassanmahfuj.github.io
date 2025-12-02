# Firebase Deployment Setup

This document explains how to set up automatic deployment to Firebase Hosting when pushing to the main branch.

## Overview

The GitHub Actions workflow will automatically deploy your site to Firebase Hosting whenever you push changes to the `main` branch.

## Setup Instructions

### Step 1: Generate Firebase Service Account Key

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your `mahfuzstack` project
3. Click **Settings (⚙️)** → **Service accounts**
4. Click **"Generate new private key"**
5. Click **"Generate key"**
6. This will download a JSON file (e.g., `service-account-key.json`)

### Step 2: Convert Service Account Key to Base64

After downloading the JSON file, run this command in your terminal:

```bash
base64 -w 0 service-account-key.json
```

This will output a long base64 encoded string. Copy this entire string.

### Step 3: Add Base64 String to GitHub Secrets

1. Go to your GitHub repository: [https://github.com/hassanmahfuj/hassanmahfuj.github.io](https://github.com/hassanmahfuj/hassanmahfuj.github.io)
2. Click the **Settings** tab
3. In the left sidebar, click **Secrets and variables** → **Actions**
4. Click **"New repository secret"**
5. **Name**: `FIREBASE_SERVICE_ACCOUNT`
6. **Secret**: Paste the base64 string from Step 2
7. Click **"Add secret"**

## How It Works

- The GitHub Actions workflow (`.github/workflows/deploy.yml`) triggers on every push to the `main` branch
- It decodes the service account key from the GitHub secret
- It deploys your site to Firebase Hosting using the `mahfuzstack` project
- Your site will be available at:
  - `https://mahfuzstack.web.app`
  - `https://mahfuzstack.firebaseapp.com`

## Testing

After setting up the `FIREBASE_SERVICE_ACCOUNT` secret:

1. Make any change to your code
2. Commit and push to the main branch:
   ```bash
   git add .
   git commit -m "Test Firebase deployment"
   git push origin main
   ```
3. Go to the **Actions** tab in your GitHub repository to see the deployment progress
4. Once complete, your site will be live on Firebase Hosting

## Benefits

- ✅ Automatic deployment on every push to main
- ✅ No manual deployment required
- ✅ Secure authentication using service account
- ✅ GitHub Actions provides deployment logs
- ✅ Zero downtime deployment

## Troubleshooting

If deployment fails:

1. Check the **Actions** tab in GitHub for error logs
2. Verify the `FIREBASE_SERVICE_ACCOUNT` secret is correctly set
3. Ensure your Firebase project exists and you have proper permissions
4. Make sure the `firebase.json` configuration is correct

## Firebase Configuration

The `firebase.json` file in your project root is configured as:

```json
{
  "hosting": {
    "public": ".",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

This configuration:
- Serves files from the root directory (`.`)
- Ignores Firebase config files and node_modules
- Rewrites all URLs to `index.html` for client-side routing