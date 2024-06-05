kubectl version

echo "Deploying shell..."

kubectl apply -f k8s/deployment-shell.yml

echo "Expoosing shell deployment..."

kubectl expose --port=80 --target-port=3000  deployment/kspr-dev-shell

echo "Creating shell ingress..."

kubectl apply -f k8s/ingress-shell.yml

echo "Deploying mfs..."

kubectl apply -f k8s/deployment-mfs.yml

echo "Expoosing mfs deployment..."

kubectl expose --port=80 --target-port=80  deployment/kspr-dev-mfs

echo "Creating mfs ingress..."

kubectl apply -f k8s/ingress-mfs.yml