#!/bin/bash
# ==============================================================================
# Manorog Clinic - Automated Production Deployment Script
# Target Domain: monorogclinics.theajitkumar.online
# Target Port: 12001
# ==============================================================================

set -e

echo "--------------------------------------------------------"
echo "Starting Manorog Clinic Production Deployment"
echo "--------------------------------------------------------"

# 1. Build the Docker Image
echo "==> Building Docker image 'manorog-clinic:latest'..."
docker build -t manorog-clinic:latest .

# 2. Stop and remove existing container if running
if [ "$(docker ps -aq -f name=manorog-clinic-web)" ]; then
    echo "==> Stopping existing container 'manorog-clinic-web'..."
    docker stop manorog-clinic-web || true
    echo "==> Removing existing container 'manorog-clinic-web'..."
    docker rm manorog-clinic-web || true
fi

# 3. Run new container on port 12001
echo "==> Starting new container on port 12001..."
docker run -d \
    --name manorog-clinic-web \
    -p 12001:12001 \
    --restart unless-stopped \
    manorog-clinic:latest

# 4. Wait for health check
echo "==> Waiting for application to initialize..."
sleep 3
if curl -s -f http://127.0.0.1:12001/ > /dev/null; then
    echo "✓ Application container is healthy and responding on http://127.0.0.1:12001/"
else
    echo "⚠ Warning: Application did not respond immediately, check logs with: docker logs manorog-clinic-web"
fi

# 5. Optional Nginx setup on host
if [ -d "/etc/nginx/sites-available" ]; then
    echo "==> Detected Nginx installation. Setting up monorog.conf..."
    sudo cp monorog.conf /etc/nginx/sites-available/monorog.conf
    if [ ! -f "/etc/nginx/sites-enabled/monorog.conf" ]; then
        sudo ln -s /etc/nginx/sites-available/monorog.conf /etc/nginx/sites-enabled/monorog.conf
    fi
    sudo nginx -t
    sudo systemctl reload nginx
    echo "✓ Nginx reloaded successfully!"
fi

echo "--------------------------------------------------------"
echo "Deployment Complete!"
echo "Site live on: http://localhost:12001"
echo "Public Domain: https://monorogclinics.theajitkumar.online"
echo "--------------------------------------------------------"

