# Image de base plus complète pour éviter les problèmes de permissions
FROM node:18-bullseye

# Répertoire de travail dans le conteneur
WORKDIR /app

# Copier package.json et package-lock.json (si présent)
COPY package*.json ./

# Installer les dépendances du projet
RUN npm install

# Copier le reste du code source
COPY . .

# Installer ESLint et le plugin Jest localement (si pas déjà dans package.json)
RUN npm install --save-dev eslint eslint-plugin-jest

# Vérifier que les binaires sont exécutables
RUN chmod +x node_modules/.bin/*

# Exposer le port de l'application
EXPOSE 3000

# Commande de démarrage de l'application
CMD ["npm", "start"]
