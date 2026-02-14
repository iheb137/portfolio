# Script de test des APIs Admin (PowerShell)
# Assurez-vous que le serveur Next.js est en cours d'exécution

$BaseUrl = "http://localhost:3000"

Write-Host "=== Tests des APIs Admin ===" -ForegroundColor Yellow
Write-Host ""

# 1. Authentification
Write-Host "1. Authentification..." -ForegroundColor Yellow
$authBody = @{
    username = "admin"
    password = "admin123"
} | ConvertTo-Json

$authResponse = Invoke-RestMethod -Uri "$BaseUrl/api/auth" `
    -Method Post `
    -Headers @{"Content-Type" = "application/json"} `
    -Body $authBody

if ($authResponse.success) {
    Write-Host "✓ Authentification réussie" -ForegroundColor Green
    $token = $authResponse.token
    Write-Host "Token: $token" -ForegroundColor Green
    Write-Host ""
} else {
    Write-Host "✗ Erreur d'authentification" -ForegroundColor Red
    exit
}

# Créer l'en-tête d'autorisation
$authHeader = @{"Authorization" = "Bearer $token"; "Content-Type" = "application/json"}

# 2. GET - Récupérer les projets
Write-Host "2. Récupérer les projets..." -ForegroundColor Yellow
$projects = Invoke-RestMethod -Uri "$BaseUrl/api/admin/projects" -Method Get
$projects | ConvertTo-Json | Write-Host
Write-Host ""

# 3. POST - Créer un projet
Write-Host "3. Créer un nouveau projet..." -ForegroundColor Yellow
$projectBody = @{
    title = "Mon Projet Test"
    description = "C'est un projet de test"
    image = "https://example.com/image.jpg"
    link = "https://github.com/example"
    technologies = @("React", "Next.js", "TypeScript")
} | ConvertTo-Json

$projectResponse = Invoke-RestMethod -Uri "$BaseUrl/api/admin/projects" `
    -Method Post `
    -Headers $authHeader `
    -Body $projectBody

$projectResponse | ConvertTo-Json | Write-Host
$projectId = $projectResponse.id
Write-Host "Project ID: $projectId" -ForegroundColor Green
Write-Host ""

# 4. GET - Récupérer les événements
Write-Host "4. Récupérer les événements..." -ForegroundColor Yellow
$events = Invoke-RestMethod -Uri "$BaseUrl/api/admin/events" -Method Get
$events | ConvertTo-Json | Write-Host
Write-Host ""

# 5. POST - Créer un événement
Write-Host "5. Créer un nouvel événement..." -ForegroundColor Yellow
$eventBody = @{
    title = "Conférence React 2026"
    date = "2026-06-15"
    description = "Une conférence sur React Server Components"
    location = "Paris, France"
} | ConvertTo-Json

$eventResponse = Invoke-RestMethod -Uri "$BaseUrl/api/admin/events" `
    -Method Post `
    -Headers $authHeader `
    -Body $eventBody

$eventResponse | ConvertTo-Json | Write-Host
$eventId = $eventResponse.id
Write-Host "Event ID: $eventId" -ForegroundColor Green
Write-Host ""

# 6. GET - Récupérer CV et photos
Write-Host "6. Récupérer CV et photos..." -ForegroundColor Yellow
$media = Invoke-RestMethod -Uri "$BaseUrl/api/admin/cv-photos" -Method Get
$media | ConvertTo-Json | Write-Host
Write-Host ""

# 7. POST - Ajouter CV
Write-Host "7. Ajouter un CV..." -ForegroundColor Yellow
$cvBody = @{
    type = "cv"
    url = "https://example.com/cv.pdf"
    name = "CV_2026.pdf"
} | ConvertTo-Json

$cvResponse = Invoke-RestMethod -Uri "$BaseUrl/api/admin/cv-photos" `
    -Method Post `
    -Headers $authHeader `
    -Body $cvBody

$cvResponse | ConvertTo-Json | Write-Host
Write-Host ""

# 8. PUT - Modifier un projet
Write-Host "8. Modifier le projet..." -ForegroundColor Yellow
if ($projectId) {
    $updateBody = @{
        id = $projectId
        title = "Mon Projet Test - Modifié"
        description = "Description mise à jour"
    } | ConvertTo-Json

    $updateResponse = Invoke-RestMethod -Uri "$BaseUrl/api/admin/projects" `
        -Method Put `
        -Headers $authHeader `
        -Body $updateBody

    $updateResponse | ConvertTo-Json | Write-Host
} else {
    Write-Host "Aucun projet à modifier" -ForegroundColor Yellow
}
Write-Host ""

# 9. DELETE - Supprimer un événement
Write-Host "9. Supprimer l'événement..." -ForegroundColor Yellow
if ($eventId) {
    $deleteResponse = Invoke-RestMethod -Uri "$BaseUrl/api/admin/events?id=$eventId" `
        -Method Delete `
        -Headers $authHeader

    $deleteResponse | ConvertTo-Json | Write-Host
} else {
    Write-Host "Aucun événement à supprimer" -ForegroundColor Yellow
}
Write-Host ""

# 10. DELETE - Supprimer le projet
Write-Host "10. Supprimer le projet..." -ForegroundColor Yellow
if ($projectId) {
    $deleteResponse = Invoke-RestMethod -Uri "$BaseUrl/api/admin/projects?id=$projectId" `
        -Method Delete `
        -Headers $authHeader

    $deleteResponse | ConvertTo-Json | Write-Host
} else {
    Write-Host "Aucun projet à supprimer" -ForegroundColor Yellow
}
Write-Host ""

Write-Host "=== Tests terminés ===" -ForegroundColor Green
