#!/bin/bash

# Script de test des APIs Admin
# Assurez-vous que le serveur Next.js est en cours d'exécution

BASE_URL="http://localhost:3000"

# Couleurs pour l'output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}=== Tests des APIs Admin ===${NC}\n"

# 1. Authentification
echo -e "${YELLOW}1. Authentification...${NC}"
AUTH_RESPONSE=$(curl -s -X POST "$BASE_URL/api/auth" \
  -H "Content-Type: application/json" \
  -d '{
    "username": "admin",
    "password": "admin123"
  }')

TOKEN=$(echo $AUTH_RESPONSE | grep -o '"token":"[^"]*' | cut -d'"' -f4)
SUCCESS=$(echo $AUTH_RESPONSE | grep -o '"success":true')

if [ ! -z "$TOKEN" ]; then
  echo -e "${GREEN}✓ Authentification réussie${NC}"
  echo -e "Token: $TOKEN\n"
else
  echo -e "${RED}✗ Erreur d'authentification${NC}\n"
  exit 1
fi

# 2. GET - Récupérer les projets
echo -e "${YELLOW}2. Récupérer les projets...${NC}"
curl -s -X GET "$BASE_URL/api/admin/projects" | jq '.'
echo -e "\n"

# 3. POST - Créer un projet
echo -e "${YELLOW}3. Créer un nouveau projet...${NC}"
PROJECT_RESPONSE=$(curl -s -X POST "$BASE_URL/api/admin/projects" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $TOKEN" \
  -d '{
    "title": "Mon Projet Test",
    "description": "C'\''est un projet de test",
    "image": "https://example.com/image.jpg",
    "link": "https://github.com/example",
    "technologies": ["React", "Next.js", "TypeScript"]
  }')

echo $PROJECT_RESPONSE | jq '.'
PROJECT_ID=$(echo $PROJECT_RESPONSE | grep -o '"id":"[^"]*' | head -1 | cut -d'"' -f4)
echo -e "\nProject ID: $PROJECT_ID\n"

# 4. GET - Récupérer les événements
echo -e "${YELLOW}4. Récupérer les événements...${NC}"
curl -s -X GET "$BASE_URL/api/admin/events" | jq '.'
echo -e "\n"

# 5. POST - Créer un événement
echo -e "${YELLOW}5. Créer un nouvel événement...${NC}"
EVENT_RESPONSE=$(curl -s -X POST "$BASE_URL/api/admin/events" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $TOKEN" \
  -d '{
    "title": "Conférence React 2026",
    "date": "2026-06-15",
    "description": "Une conférence sur React Server Components",
    "location": "Paris, France"
  }')

echo $EVENT_RESPONSE | jq '.'
EVENT_ID=$(echo $EVENT_RESPONSE | grep -o '"id":"[^"]*' | head -1 | cut -d'"' -f4)
echo -e "\nEvent ID: $EVENT_ID\n"

# 6. GET - Récupérer CV et photos
echo -e "${YELLOW}6. Récupérer CV et photos...${NC}"
curl -s -X GET "$BASE_URL/api/admin/cv-photos" | jq '.'
echo -e "\n"

# 7. POST - Ajouter CV
echo -e "${YELLOW}7. Ajouter un CV...${NC}"
curl -s -X POST "$BASE_URL/api/admin/cv-photos" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $TOKEN" \
  -d '{
    "type": "cv",
    "url": "https://example.com/cv.pdf",
    "name": "CV_2026.pdf"
  }' | jq '.'
echo -e "\n"

# 8. PUT - Modifier un projet
echo -e "${YELLOW}8. Modifier le projet...${NC}"
if [ ! -z "$PROJECT_ID" ]; then
  curl -s -X PUT "$BASE_URL/api/admin/projects" \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer $TOKEN" \
    -d "{
      \"id\": \"$PROJECT_ID\",
      \"title\": \"Mon Projet Test - Modifié\",
      \"description\": \"Description mise à jour\"
    }" | jq '.'
else
  echo "Aucun projet à modifier"
fi
echo -e "\n"

# 9. DELETE - Supprimer un événement
echo -e "${YELLOW}9. Supprimer l'événement...${NC}"
if [ ! -z "$EVENT_ID" ]; then
  curl -s -X DELETE "$BASE_URL/api/admin/events?id=$EVENT_ID" \
    -H "Authorization: Bearer $TOKEN" | jq '.'
else
  echo "Aucun événement à supprimer"
fi
echo -e "\n"

# 10. DELETE - Supprimer le projet
echo -e "${YELLOW}10. Supprimer le projet...${NC}"
if [ ! -z "$PROJECT_ID" ]; then
  curl -s -X DELETE "$BASE_URL/api/admin/projects?id=$PROJECT_ID" \
    -H "Authorization: Bearer $TOKEN" | jq '.'
else
  echo "Aucun projet à supprimer"
fi
echo -e "\n"

echo -e "${GREEN}=== Tests terminés ===${NC}"
