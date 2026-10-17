"use client"

import Link from "next/link"
import { useEffect, useRef, useState, type CSSProperties } from "react"
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ExternalLink,
  Github,
  Layers,
  Mail,
  MessageSquare,
  Rocket,
  ShieldCheck,
  User,
  Users,
  X,
} from "lucide-react"

/* ─────────────────────────────────────────────────────────────
   Langue : clé partagée "portfolio-lang".
   ───────────────────────────────────────────────────────────── */
type Lang = "fr" | "en"
const LANG_KEY = "portfolio-lang"

function useLang(): [Lang, (l: Lang) => void] {
  const [lang, setLang] = useState<Lang>("fr")
  useEffect(() => {
    try {
      const saved = localStorage.getItem(LANG_KEY)
      if (saved === "fr" || saved === "en") setLang(saved)
    } catch {}
  }, [])
  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])
  const update = (l: Lang) => {
    setLang(l)
    try {
      localStorage.setItem(LANG_KEY, l)
    } catch {}
  }
  return [lang, update]
}

/* ─────────────────────────────────────────────────────────────
   Données des projets : chaque affirmation a été vérifiée dans
   le dépôt correspondant (octobre 2026).
   ───────────────────────────────────────────────────────────── */
type L = { fr: string; en: string }
type Context = "internship" | "team" | "academic" | "personal"
type Project = {
  slug: string
  title: L
  short: L
  tagline: L
  context: Context
  setting: L
  period: L
  myRole: L
  teamNote?: L
  summary: L
  stack: string[]
  highlights: L[]
  architecture: { name: string; tech: string; role: L }[]
  verification: L[]
  deployment: L
  evidence: { label: L; path: string; href: string }[]
  interviewTopics: L[]
  metrics?: { value: number; label: L }[]
  repo: string
  demo?: string
  featured?: boolean
}

const PROJECTS: Project[] = [
  {
    "slug": "fraud-detection-platform",
    "title": {
      "fr": "Plateforme de détection des appels frauduleux",
      "en": "Fraudulent call detection platform"
    },
    "short": {
      "fr": "Détection de fraude",
      "en": "Fraud detection"
    },
    "tagline": {
      "fr": "Détection de fraude télécom temps réel : ingestion Kafka, scoring ML et cycle de réentraînement supervisé.",
      "en": "Real-time telecom fraud detection: Kafka ingestion, ML scoring and a supervised retraining loop."
    },
    "context": "internship",
    "setting": {
      "fr": "Stage ingénieur, Tunisie Telecom (DSI)",
      "en": "Engineering internship, Tunisie Telecom (IT department)"
    },
    "period": {
      "fr": "Juillet – août 2026",
      "en": "July – August 2026"
    },
    "myRole": {
      "fr": "Conception et réalisation complètes : architecture, backend Spring Boot, frontend Angular, service ML FastAPI, ingestion Kafka, conteneurisation, manifestes Kubernetes et pipeline CI/CD.",
      "en": "Full design and delivery: architecture, Spring Boot backend, Angular frontend, FastAPI ML service, Kafka ingestion, containerization, Kubernetes manifests and CI/CD pipeline."
    },
    "summary": {
      "fr": "La plateforme ingère les enregistrements d'appels (CDR) par import CSV ou en flux Kafka, les score avec un modèle Random Forest et génère des alertes sur trois niveaux de sévérité. Elle cible les schémas de fraude courants chez un opérateur : IRSF, Wangiri, SIM boxing et piratage de PBX. Les analystes labellisent les cas, déclenchent un réentraînement depuis l'interface, comparent les métriques et promeuvent manuellement le nouveau modèle, rechargé à chaud.",
      "en": "The platform ingests call detail records (CDRs) through CSV import or a Kafka stream, scores them with a Random Forest model and raises alerts at three severity levels. It targets common operator fraud patterns: IRSF, Wangiri, SIM boxing and PBX hacking. Analysts label cases, trigger retraining from the UI, compare metrics and manually promote the new model, which is hot-reloaded."
    },
    "stack": [
      "Java 17",
      "Spring Boot 3.5",
      "Angular 21",
      "FastAPI",
      "scikit-learn",
      "PostgreSQL",
      "Kafka (KRaft)",
      "Docker",
      "Kubernetes",
      "GitHub Actions"
    ],
    "highlights": [
      {
        "fr": "Streaming temps réel via Kafka avec un consumer idempotent et un upsert des prédictions pour empêcher les doublons.",
        "en": "Real-time streaming through Kafka with an idempotent consumer and prediction upserts to prevent duplicates."
      },
      {
        "fr": "Cycle MLOps avec humain dans la boucle : labellisation, export du jeu de données, réentraînement, comparaison AUC / précision / rappel, promotion manuelle.",
        "en": "Human-in-the-loop MLOps cycle: labelling, dataset export, retraining, AUC / precision / recall comparison, manual promotion."
      },
      {
        "fr": "Trois rôles isolés (ADMIN, ANALYSTE, SUPERADMIN) avec contrôle d'accès sur chaque endpoint et authentification JWT.",
        "en": "Three isolated roles (ADMIN, ANALYST, SUPERADMIN) with access control on every endpoint and JWT authentication."
      },
      {
        "fr": "API documentée en OpenAPI / Swagger.",
        "en": "API documented with OpenAPI / Swagger."
      }
    ],
    "architecture": [
      {
        "name": "fraud-frontend",
        "tech": "Angular + nginx",
        "role": {
          "fr": "Tableaux de bord par rôle, reverse proxy vers /api",
          "en": "Role-based dashboards, reverse proxy to /api"
        }
      },
      {
        "name": "fraud-backend",
        "tech": "Spring Boot 3",
        "role": {
          "fr": "API REST, sécurité JWT, consumer Kafka, orchestration ML",
          "en": "REST API, JWT security, Kafka consumer, ML orchestration"
        }
      },
      {
        "name": "fraud-ml",
        "tech": "FastAPI + scikit-learn",
        "role": {
          "fr": "Scoring et réentraînement, modèles sur volume persistant",
          "en": "Scoring and retraining, models on a persistent volume"
        }
      },
      {
        "name": "fraud-postgres",
        "tech": "PostgreSQL (StatefulSet)",
        "role": {
          "fr": "CDR, prédictions, alertes, utilisateurs",
          "en": "CDRs, predictions, alerts, users"
        }
      },
      {
        "name": "fraud-kafka",
        "tech": "Kafka KRaft (StatefulSet)",
        "role": {
          "fr": "Ingestion temps réel sur le topic cdr-stream",
          "en": "Real-time ingestion on the cdr-stream topic"
        }
      }
    ],
    "verification": [
      {
        "fr": "19 tests unitaires backend (JUnit 5 + Mockito) exécutés en CI, ciblant l'idempotence du consumer Kafka, l'upsert des prédictions et la résolution du périmètre par rôle ; couverture JaCoCo publiée en artefact.",
        "en": "19 backend unit tests (JUnit 5 + Mockito) run in CI, covering Kafka consumer idempotency, prediction upserts and role-based scope resolution; JaCoCo coverage published as an artifact."
      },
      {
        "fr": "Tests pytest du service ML et build de production Angular à chaque push et pull request.",
        "en": "pytest tests for the ML service and an Angular production build on every push and pull request."
      },
      {
        "fr": "Actions GitHub épinglées par SHA de commit ; analyse continue SonarCloud.",
        "en": "GitHub Actions pinned to commit SHAs; continuous SonarCloud analysis."
      }
    ],
    "deployment": {
      "fr": "Au merge sur main, la CI publie trois images Docker sur Docker Hub (tags latest et SHA du commit). Déploiement sur Kubernetes via 8 manifestes : StatefulSets avec volumes persistants, probes, HPA sur le backend, Secrets hors dépôt, conteneurs non-root. Une démo frontend est en ligne.",
      "en": "On merge to main, CI publishes three Docker images to Docker Hub (latest and commit-SHA tags). Kubernetes deployment through 8 manifests: StatefulSets with persistent volumes, probes, HPA on the backend, Secrets kept out of the repo, non-root containers. A frontend demo is live."
    },
    "evidence": [
      {
        "label": {
          "fr": "Pipeline CI/CD",
          "en": "CI/CD pipeline"
        },
        "path": ".github/workflows/ci.yml",
        "href": "https://github.com/iheb137/fraud-detection-platform/blob/main/.github/workflows/ci.yml"
      },
      {
        "label": {
          "fr": "Manifestes Kubernetes",
          "en": "Kubernetes manifests"
        },
        "path": "infra/k8s/",
        "href": "https://github.com/iheb137/fraud-detection-platform/tree/main/infra/k8s"
      },
      {
        "label": {
          "fr": "Autoscaling du backend",
          "en": "Backend autoscaling"
        },
        "path": "infra/k8s/07-hpa.yaml",
        "href": "https://github.com/iheb137/fraud-detection-platform/blob/main/infra/k8s/07-hpa.yaml"
      },
      {
        "label": {
          "fr": "Test du consumer Kafka",
          "en": "Kafka consumer test"
        },
        "path": "KafkaConsumerServiceTest.java",
        "href": "https://github.com/iheb137/fraud-detection-platform/blob/main/backend/backend/src/test/java/com/tunisietelecom/frauddetection/service/KafkaConsumerServiceTest.java"
      },
      {
        "label": {
          "fr": "Tests du service ML",
          "en": "ML service tests"
        },
        "path": "ml-service/tests/",
        "href": "https://github.com/iheb137/fraud-detection-platform/tree/main/ml-service/tests"
      },
      {
        "label": {
          "fr": "Image Docker publiée",
          "en": "Published Docker image"
        },
        "path": "iheb99/fraud-backend",
        "href": "https://hub.docker.com/r/iheb99/fraud-backend"
      }
    ],
    "interviewTopics": [
      {
        "fr": "Pourquoi des « batchs virtuels » journaliers plutôt qu'un traitement message par message",
        "en": "Why daily “virtual batches” rather than per-message processing"
      },
      {
        "fr": "Garantir l'idempotence d'un consumer Kafka et éviter les doublons en base",
        "en": "Making a Kafka consumer idempotent and avoiding duplicates in the database"
      },
      {
        "fr": "Promotion manuelle d'un modèle et rechargement à chaud sans redéploiement",
        "en": "Manual model promotion and hot reload without redeployment"
      },
      {
        "fr": "Choix StatefulSet vs Deployment pour PostgreSQL et Kafka",
        "en": "StatefulSet vs Deployment for PostgreSQL and Kafka"
      }
    ],
    "metrics": [
      {
        "value": 19,
        "label": {
          "fr": "tests unitaires backend en CI",
          "en": "backend unit tests in CI"
        }
      },
      {
        "value": 8,
        "label": {
          "fr": "manifestes Kubernetes",
          "en": "Kubernetes manifests"
        }
      },
      {
        "value": 3,
        "label": {
          "fr": "images Docker publiées",
          "en": "published Docker images"
        }
      },
      {
        "value": 5,
        "label": {
          "fr": "services orchestrés",
          "en": "orchestrated services"
        }
      }
    ],
    "repo": "https://github.com/iheb137/fraud-detection-platform",
    "demo": "https://fraud-detection-platform-brown.vercel.app",
    "featured": true
  },
  {
    "slug": "mecamanage",
    "title": {
      "fr": "MecaManage",
      "en": "MecaManage"
    },
    "short": {
      "fr": "MecaManage",
      "en": "MecaManage"
    },
    "tagline": {
      "fr": "Gestion d'ateliers mécaniques multi-garages : API .NET en Clean Architecture, assistant IA et automatisations n8n.",
      "en": "Multi-garage workshop management: Clean Architecture .NET API, AI assistant and n8n automations."
    },
    "context": "team",
    "setting": {
      "fr": "Projet d'équipe, TEK-UP (4 personnes)",
      "en": "Team project, TEK-UP (4 people)"
    },
    "period": {
      "fr": "Mars – avril 2026",
      "en": "March – April 2026"
    },
    "myRole": {
      "fr": "Responsable du backend .NET 8 : Clean Architecture (Domain, Application, Infrastructure, API), migrations EF Core, authentification JWT avec refresh token, RBAC, API multi-tenant (garages, véhicules, interventions), intégration du service IA et tests unitaires. Auteur des trois workflows n8n.",
      "en": "Owner of the .NET 8 backend: Clean Architecture (Domain, Application, Infrastructure, API), EF Core migrations, JWT authentication with refresh tokens, RBAC, multi-tenant API (garages, vehicles, interventions), AI service integration and unit tests. Author of the three n8n workflows."
    },
    "teamNote": {
      "fr": "Docker, pipeline GitHub Actions, déploiement SSH, Ansible et supervision Prometheus / Grafana : Arbi Hazbri. Frontend Angular et service IA (FastAPI, RAG) : Louay Lewati.",
      "en": "Docker, GitHub Actions pipeline, SSH deployment, Ansible and Prometheus / Grafana monitoring: Arbi Hazbri. Angular frontend and AI service (FastAPI, RAG): Louay Lewati."
    },
    "summary": {
      "fr": "Application de gestion pour réseaux de garages : clients, véhicules, interventions, affectation des mécaniciens, devis, factures et stocks. Le travail a été mené en sprints et livré par pull requests relues, une branche par fonctionnalité.",
      "en": "Management application for garage networks: customers, vehicles, interventions, mechanic assignment, quotes, invoices and stock. Work ran in sprints and shipped through reviewed pull requests, one branch per feature."
    },
    "stack": [
      "C# / .NET 8",
      "ASP.NET Core",
      "EF Core",
      "xUnit",
      "Angular 21",
      "FastAPI",
      "n8n",
      "Docker",
      "GitHub Actions"
    ],
    "highlights": [
      {
        "fr": "Découpage Clean Architecture en quatre projets, avec dépendances orientées vers le domaine.",
        "en": "Clean Architecture split into four projects, with dependencies pointing toward the domain."
      },
      {
        "fr": "Sécurité : JWT, refresh token, autorisations par rôle sur les endpoints sensibles (chef d'atelier).",
        "en": "Security: JWT, refresh tokens, role-based authorization on sensitive endpoints (workshop manager)."
      },
      {
        "fr": "Workflows n8n : notification client, notification mécanicien et rapport quotidien.",
        "en": "n8n workflows: customer notification, mechanic notification and daily report."
      }
    ],
    "architecture": [
      {
        "name": "MecaManage.API",
        "tech": "ASP.NET Core",
        "role": {
          "fr": "Contrôleurs REST, authentification, RBAC",
          "en": "REST controllers, authentication, RBAC"
        }
      },
      {
        "name": "MecaManage.Application",
        "tech": ".NET 8",
        "role": {
          "fr": "Cas d'usage et services métier",
          "en": "Use cases and business services"
        }
      },
      {
        "name": "MecaManage.Infrastructure",
        "tech": "EF Core",
        "role": {
          "fr": "Persistance, migrations, clients externes",
          "en": "Persistence, migrations, external clients"
        }
      },
      {
        "name": "ia-service",
        "tech": "FastAPI",
        "role": {
          "fr": "Assistant IA appelé par le backend",
          "en": "AI assistant called by the backend"
        }
      },
      {
        "name": "n8n",
        "tech": "n8n",
        "role": {
          "fr": "Notifications et rapports automatisés",
          "en": "Automated notifications and reports"
        }
      }
    ],
    "verification": [
      {
        "fr": "Tests unitaires xUnit avec Moq, FluentAssertions et EF Core InMemory, exécutés par la CI de l'équipe à chaque push.",
        "en": "xUnit unit tests with Moq, FluentAssertions and EF Core InMemory, run by the team's CI on every push."
      }
    ],
    "deployment": {
      "fr": "Images Docker publiées sur Docker Hub puis déploiement par SSH au merge sur main (mis en place par Arbi Hazbri).",
      "en": "Docker images published to Docker Hub, then SSH deployment on merge to main (set up by Arbi Hazbri)."
    },
    "evidence": [
      {
        "label": {
          "fr": "Backend Clean Architecture",
          "en": "Clean Architecture backend"
        },
        "path": "backend/",
        "href": "https://github.com/iheb137/MECAMANAGE/tree/main/backend"
      },
      {
        "label": {
          "fr": "Tests unitaires",
          "en": "Unit tests"
        },
        "path": "backend/MecaManage.Tests/",
        "href": "https://github.com/iheb137/MECAMANAGE/tree/main/backend/MecaManage.Tests"
      },
      {
        "label": {
          "fr": "Workflows n8n",
          "en": "n8n workflows"
        },
        "path": "n8n/workflows/",
        "href": "https://github.com/iheb137/MECAMANAGE/tree/main/n8n/workflows"
      },
      {
        "label": {
          "fr": "Historique des pull requests",
          "en": "Pull request history"
        },
        "path": "pulls?q=is:pr",
        "href": "https://github.com/iheb137/MECAMANAGE/pulls?q=is%3Apr"
      }
    ],
    "interviewTopics": [
      {
        "fr": "Placer la logique métier dans la couche Application plutôt que dans les contrôleurs",
        "en": "Keeping business logic in the Application layer rather than in controllers"
      },
      {
        "fr": "Rotation des refresh tokens et révocation",
        "en": "Refresh token rotation and revocation"
      },
      {
        "fr": "Travailler à quatre sur un même dépôt : branches, revues, conflits",
        "en": "Four people on one repository: branches, reviews, conflicts"
      }
    ],
    "repo": "https://github.com/iheb137/MECAMANAGE"
  },
  {
    "slug": "hotel-management-devops",
    "title": {
      "fr": "IH-AR Hotel Management : industrialisation DevOps",
      "en": "IH-AR Hotel Management: DevOps industrialization"
    },
    "short": {
      "fr": "IH-AR DevOps",
      "en": "IH-AR DevOps"
    },
    "tagline": {
      "fr": "Mise en place de la chaîne CI/CD, de la qualité de code et de la conteneurisation d'une application Symfony.",
      "en": "CI/CD, code quality and containerization for a Symfony application."
    },
    "context": "team",
    "setting": {
      "fr": "Projet académique à deux, TEK-UP",
      "en": "Two-person academic project, TEK-UP"
    },
    "period": {
      "fr": "Décembre 2025 – janvier 2026",
      "en": "December 2025 – January 2026"
    },
    "myRole": {
      "fr": "Toute la partie DevOps : pipeline GitLab CI en quatre étapes, Dockerfile et docker-compose, configuration PHPUnit et couverture, analyse statique PHPStan, intégration SonarCloud, publication de l'image sur Docker Hub.",
      "en": "All of the DevOps work: four-stage GitLab CI pipeline, Dockerfile and docker-compose, PHPUnit and coverage setup, PHPStan static analysis, SonarCloud integration, image publishing to Docker Hub."
    },
    "teamNote": {
      "fr": "L'application Symfony elle-même a été développée par mon binôme.",
      "en": "The Symfony application itself was developed by my teammate."
    },
    "summary": {
      "fr": "À partir d'une application Symfony 6.4 existante, j'ai construit la chaîne qui la rend livrable : chaque push valide les dépendances, lance la suite PHPUnit, exécute l'analyse statique, puis construit et publie l'image Docker sur main.",
      "en": "Starting from an existing Symfony 6.4 application, I built the chain that makes it shippable: every push validates dependencies, runs the PHPUnit suite and static analysis, then builds and publishes the Docker image on main."
    },
    "stack": [
      "GitLab CI",
      "Docker",
      "docker-compose",
      "PHPUnit",
      "PHPStan",
      "SonarCloud",
      "Symfony 6.4",
      "MariaDB",
      "nginx"
    ],
    "highlights": [
      {
        "fr": "Étapes validate → test → analyze → build, avec cache Composer et build conditionné à la branche main.",
        "en": "validate → test → analyze → build stages, with Composer caching and build gated on the main branch."
      },
      {
        "fr": "Couverture de code via Xdebug transmise à SonarCloud.",
        "en": "Code coverage via Xdebug fed to SonarCloud."
      },
      {
        "fr": "Environnement local reproductible : services php, nginx et MariaDB.",
        "en": "Reproducible local environment: php, nginx and MariaDB services."
      }
    ],
    "architecture": [
      {
        "name": "php",
        "tech": "PHP-FPM / Symfony 6.4",
        "role": {
          "fr": "Application",
          "en": "Application"
        }
      },
      {
        "name": "nginx",
        "tech": "nginx",
        "role": {
          "fr": "Serveur web",
          "en": "Web server"
        }
      },
      {
        "name": "db",
        "tech": "MariaDB 10.4",
        "role": {
          "fr": "Base de données",
          "en": "Database"
        }
      }
    ],
    "verification": [
      {
        "fr": "Suite PHPUnit (tests unitaires et fonctionnels) exécutée à chaque pipeline, PHPStan et SonarCloud en étape d'analyse.",
        "en": "PHPUnit suite (unit and functional tests) run in every pipeline, PHPStan and SonarCloud in the analysis stage."
      }
    ],
    "deployment": {
      "fr": "Image poussée sur Docker Hub avec les tags latest et SHA court du commit ; secrets fournis par les variables CI/CD GitLab.",
      "en": "Image pushed to Docker Hub with latest and short-commit-SHA tags; secrets supplied through GitLab CI/CD variables."
    },
    "evidence": [
      {
        "label": {
          "fr": "Pipeline GitLab CI",
          "en": "GitLab CI pipeline"
        },
        "path": ".gitlab-ci.yml",
        "href": "https://github.com/iheb137/hotel-management/blob/main/.gitlab-ci.yml"
      },
      {
        "label": {
          "fr": "Image Docker",
          "en": "Docker image"
        },
        "path": "Dockerfile",
        "href": "https://github.com/iheb137/hotel-management/blob/main/Dockerfile"
      },
      {
        "label": {
          "fr": "Configuration SonarCloud",
          "en": "SonarCloud configuration"
        },
        "path": "sonar-project.properties",
        "href": "https://github.com/iheb137/hotel-management/blob/main/sonar-project.properties"
      },
      {
        "label": {
          "fr": "Documentation DevOps",
          "en": "DevOps documentation"
        },
        "path": "README_DEVOPS.md",
        "href": "https://github.com/iheb137/hotel-management/blob/main/README_DEVOPS.md"
      }
    ],
    "interviewTopics": [
      {
        "fr": "Ordonner les étapes d'un pipeline pour échouer vite",
        "en": "Ordering pipeline stages to fail fast"
      },
      {
        "fr": "Empêcher les scripts Composer de s'exécuter pendant le build d'image",
        "en": "Preventing Composer scripts from running during the image build"
      }
    ],
    "repo": "https://github.com/iheb137/hotel-management"
  },
  {
    "slug": "smart-career-hub",
    "title": {
      "fr": "Smart Career Hub",
      "en": "Smart Career Hub"
    },
    "short": {
      "fr": "Smart Career Hub",
      "en": "Smart Career Hub"
    },
    "tagline": {
      "fr": "Plateforme de recrutement étudiants / entreprises avec analyse de CV et génération de quiz par LLM.",
      "en": "Student / company recruiting platform with LLM-based CV analysis and quiz generation."
    },
    "context": "academic",
    "setting": {
      "fr": "Projet académique, TEK-UP",
      "en": "Academic project, TEK-UP"
    },
    "period": {
      "fr": "Septembre – décembre 2025",
      "en": "September – December 2025"
    },
    "myRole": {
      "fr": "Développement full-stack : API Spring Boot, console d'administration Angular et microservice IA FastAPI.",
      "en": "Full-stack development: Spring Boot API, Angular admin console and FastAPI AI microservice."
    },
    "summary": {
      "fr": "Trois rôles (candidat, recruteur, administrateur) : publication d'offres, candidatures, suivi, gestion des utilisateurs. Le microservice IA s'appuie sur LLaMA 3 pour analyser les CV et générer des quiz d'évaluation ; l'administration dispose d'un score de risque pour repérer les profils suspects.",
      "en": "Three roles (candidate, recruiter, administrator): job postings, applications, tracking, user management. The AI microservice uses LLaMA 3 to analyse CVs and generate assessment quizzes; administrators get a risk score to flag suspicious profiles."
    },
    "stack": [
      "Java 17",
      "Spring Boot 3.5",
      "Angular 21",
      "FastAPI",
      "LLaMA 3",
      "PostgreSQL",
      "MongoDB",
      "JWT"
    ],
    "highlights": [
      {
        "fr": "Architecture en trois services : API métier, console Angular, microservice IA indépendant.",
        "en": "Three-service architecture: business API, Angular console, standalone AI microservice."
      },
      {
        "fr": "Persistance hybride : PostgreSQL pour le relationnel, MongoDB pour les données de l'IA.",
        "en": "Hybrid persistence: PostgreSQL for relational data, MongoDB for AI data."
      }
    ],
    "architecture": [
      {
        "name": "API",
        "tech": "Spring Boot 3.5",
        "role": {
          "fr": "Offres, candidatures, utilisateurs, JWT",
          "en": "Jobs, applications, users, JWT"
        }
      },
      {
        "name": "smart-career-hub-admin",
        "tech": "Angular 21",
        "role": {
          "fr": "Console d'administration",
          "en": "Admin console"
        }
      },
      {
        "name": "ia-service",
        "tech": "FastAPI + LLaMA 3",
        "role": {
          "fr": "Analyse de CV, quiz, score de risque",
          "en": "CV analysis, quizzes, risk scoring"
        }
      }
    ],
    "verification": [
      {
        "fr": "Pas de pipeline CI ni de suite de tests significative sur ce projet : c'est un prototype fonctionnel.",
        "en": "No CI pipeline or meaningful test suite on this project: it is a working prototype."
      }
    ],
    "deployment": {
      "fr": "Exécution locale par scripts de démarrage ; pas de déploiement public.",
      "en": "Runs locally through start-up scripts; no public deployment."
    },
    "evidence": [
      {
        "label": {
          "fr": "Microservice IA",
          "en": "AI microservice"
        },
        "path": "ia-service/main.py",
        "href": "https://github.com/iheb137/Smart-career-hub/blob/main/ia-service/main.py"
      },
      {
        "label": {
          "fr": "Console Angular",
          "en": "Angular console"
        },
        "path": "smart-career-hub-admin/",
        "href": "https://github.com/iheb137/Smart-career-hub/tree/main/smart-career-hub-admin"
      }
    ],
    "interviewTopics": [
      {
        "fr": "Fiabiliser une sortie de LLM avant de l'enregistrer",
        "en": "Making LLM output reliable before persisting it"
      },
      {
        "fr": "Ce que j'ajouterais pour l'industrialiser : tests, CI, conteneurs",
        "en": "What I would add to industrialize it: tests, CI, containers"
      }
    ],
    "repo": "https://github.com/iheb137/Smart-career-hub"
  },
  {
    "slug": "ihar-car-rental",
    "title": {
      "fr": "iHar, location de voitures de luxe",
      "en": "iHar, luxury car rental"
    },
    "short": {
      "fr": "iHar",
      "en": "iHar"
    },
    "tagline": {
      "fr": "Site PHP déployé sur Kubernetes par un pipeline Jenkins : build, push et mise à jour de l'image.",
      "en": "PHP website deployed to Kubernetes by a Jenkins pipeline: build, push and image rollout."
    },
    "context": "personal",
    "setting": {
      "fr": "Projet personnel",
      "en": "Personal project"
    },
    "period": {
      "fr": "Octobre 2024 – septembre 2025",
      "en": "October 2024 – September 2025"
    },
    "myRole": {
      "fr": "Développement du site (PHP, JavaScript) et de toute la chaîne de déploiement.",
      "en": "Built the website (PHP, JavaScript) and the entire deployment chain."
    },
    "summary": {
      "fr": "Mon premier projet DevOps complet : un site de réservation conteneurisé avec Apache, déployé sur un cluster Kubernetes local avec MySQL, et un Jenkins lui-même exécuté dans le cluster qui construit l'image, la publie et met à jour le déploiement.",
      "en": "My first end-to-end DevOps project: a booking website containerized with Apache, deployed to a local Kubernetes cluster with MySQL, and a Jenkins running inside the cluster that builds the image, publishes it and updates the deployment."
    },
    "stack": [
      "PHP 8.2",
      "JavaScript",
      "MySQL",
      "Docker",
      "Jenkins",
      "Kubernetes"
    ],
    "highlights": [
      {
        "fr": "Pipeline Jenkins en trois étapes : checkout, build et push Docker, kubectl set image.",
        "en": "Three-stage Jenkins pipeline: checkout, Docker build and push, kubectl set image."
      },
      {
        "fr": "Jenkins, l'application et MySQL décrits en manifestes Kubernetes.",
        "en": "Jenkins, the application and MySQL described as Kubernetes manifests."
      }
    ],
    "architecture": [
      {
        "name": "luxury-car-rental",
        "tech": "PHP 8.2 + Apache",
        "role": {
          "fr": "Application web",
          "en": "Web application"
        }
      },
      {
        "name": "mysql",
        "tech": "MySQL",
        "role": {
          "fr": "Réservations et contacts",
          "en": "Bookings and contacts"
        }
      },
      {
        "name": "jenkins",
        "tech": "Jenkins (dans le cluster)",
        "role": {
          "fr": "Build et déploiement",
          "en": "Build and deployment"
        }
      }
    ],
    "verification": [
      {
        "fr": "Pas de tests automatisés : le pipeline couvre la construction et le déploiement.",
        "en": "No automated tests: the pipeline covers build and deployment."
      }
    ],
    "deployment": {
      "fr": "Cluster Kubernetes local (Docker Desktop), image publiée sur Docker Hub.",
      "en": "Local Kubernetes cluster (Docker Desktop), image published to Docker Hub."
    },
    "evidence": [
      {
        "label": {
          "fr": "Pipeline Jenkins",
          "en": "Jenkins pipeline"
        },
        "path": "Jenkinsfile",
        "href": "https://github.com/iheb137/iHar---Luxury-Car-Rental/blob/master/Jenkinsfile"
      },
      {
        "label": {
          "fr": "Manifestes Kubernetes",
          "en": "Kubernetes manifests"
        },
        "path": "k8s/",
        "href": "https://github.com/iheb137/iHar---Luxury-Car-Rental/tree/master/k8s"
      }
    ],
    "interviewTopics": [
      {
        "fr": "Ce que je referais autrement aujourd'hui : gestion des secrets, tests, GitOps",
        "en": "What I would do differently today: secrets management, tests, GitOps"
      }
    ],
    "repo": "https://github.com/iheb137/iHar---Luxury-Car-Rental"
  },
  {
    "slug": "rag-chatbot",
    "title": {
      "fr": "Chatbot d'écoute basé sur un LLM et du RAG",
      "en": "LLM and RAG-based support chatbot"
    },
    "short": {
      "fr": "Chatbot RAG",
      "en": "RAG chatbot"
    },
    "tagline": {
      "fr": "Assistant conversationnel Next.js qui enrichit les réponses d'un LLM par recherche documentaire (RAG).",
      "en": "Next.js conversational assistant that grounds LLM answers with document retrieval (RAG)."
    },
    "context": "academic",
    "setting": {
      "fr": "Projet académique",
      "en": "Academic project"
    },
    "period": {
      "fr": "Avril – mai 2025",
      "en": "April – May 2025"
    },
    "myRole": {
      "fr": "Réalisation complète.",
      "en": "Built end to end."
    },
    "summary": {
      "fr": "Interface de discussion et route d'API Next.js qui récupère des passages pertinents avant d'interroger un modèle local (Ollama) ou distant (API OpenAI). Prototype de soutien émotionnel, sans visée médicale.",
      "en": "Chat interface and Next.js API route that retrieves relevant passages before querying a local (Ollama) or remote (OpenAI API) model. Emotional-support prototype, with no medical purpose."
    },
    "stack": [
      "Next.js 14",
      "TypeScript",
      "Vercel AI SDK",
      "Ollama",
      "OpenAI API",
      "Tailwind CSS"
    ],
    "highlights": [],
    "architecture": [],
    "verification": [
      {
        "fr": "Pas de tests automatisés.",
        "en": "No automated tests."
      }
    ],
    "deployment": {
      "fr": "Exécution locale.",
      "en": "Runs locally."
    },
    "evidence": [
      {
        "label": {
          "fr": "Logique RAG",
          "en": "RAG logic"
        },
        "path": "lib/rag-utils.ts",
        "href": "https://github.com/iheb137/chatbot-ai/blob/main/lib/rag-utils.ts"
      },
      {
        "label": {
          "fr": "Route de chat",
          "en": "Chat route"
        },
        "path": "app/api/chat/route.ts",
        "href": "https://github.com/iheb137/chatbot-ai/blob/main/app/api/chat/route.ts"
      }
    ],
    "interviewTopics": [],
    "repo": "https://github.com/iheb137/chatbot-ai"
  },
  {
    "slug": "portfolio",
    "title": {
      "fr": "Ce portfolio",
      "en": "This portfolio"
    },
    "short": {
      "fr": "Ce portfolio",
      "en": "This portfolio"
    },
    "tagline": {
      "fr": "Ce site : Next.js bilingue, animé et déployé automatiquement.",
      "en": "This site: bilingual, animated Next.js, deployed automatically."
    },
    "context": "personal",
    "setting": {
      "fr": "Projet personnel",
      "en": "Personal project"
    },
    "period": {
      "fr": "2025 – 2026",
      "en": "2025 – 2026"
    },
    "myRole": {
      "fr": "Réalisation complète.",
      "en": "Built end to end."
    },
    "summary": {
      "fr": "Portfolio en Next.js et Tailwind CSS, en français et en anglais, avec fonds animés en canvas, apparitions au défilement et contenu vérifiable relié aux dépôts. Chaque push sur main est déployé par Vercel.",
      "en": "Next.js and Tailwind CSS portfolio in French and English, with animated canvas backgrounds, scroll reveals and verifiable content linked to the repositories. Every push to main is deployed by Vercel."
    },
    "stack": [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Canvas API",
      "Vercel"
    ],
    "highlights": [],
    "architecture": [],
    "verification": [
      {
        "fr": "Vérification des types TypeScript au build.",
        "en": "TypeScript type checking at build time."
      }
    ],
    "deployment": {
      "fr": "Vercel, à chaque merge sur main.",
      "en": "Vercel, on every merge to main."
    },
    "evidence": [],
    "interviewTopics": [],
    "repo": "https://github.com/iheb137/portfolio"
  },
  {
    "slug": "clinic-management",
    "title": {
      "fr": "Gestion de clinique",
      "en": "Clinic management"
    },
    "short": {
      "fr": "Clinique JavaFX",
      "en": "JavaFX clinic"
    },
    "tagline": {
      "fr": "Application de bureau Java pour les patients, rendez-vous et personnel médical.",
      "en": "Java desktop application for patients, appointments and medical staff."
    },
    "context": "academic",
    "setting": {
      "fr": "Projet académique",
      "en": "Academic project"
    },
    "period": {
      "fr": "Février – mai 2025",
      "en": "February – May 2025"
    },
    "myRole": {
      "fr": "Réalisation complète.",
      "en": "Built end to end."
    },
    "summary": {
      "fr": "Interface JavaFX (FXML) et persistance MySQL, organisée avec Maven.",
      "en": "JavaFX (FXML) interface and MySQL persistence, built with Maven."
    },
    "stack": [
      "Java",
      "JavaFX",
      "MySQL",
      "Maven"
    ],
    "highlights": [],
    "architecture": [],
    "verification": [
      {
        "fr": "Pas de tests automatisés.",
        "en": "No automated tests."
      }
    ],
    "deployment": {
      "fr": "Application de bureau.",
      "en": "Desktop application."
    },
    "evidence": [],
    "interviewTopics": [],
    "repo": "https://github.com/iheb137/Gestion-de-clinique-"
  },
  {
  "slug": "edu-tek",
  "title": {
    "fr": "Edu-Tek : plateforme de suivi académique et d'accompagnement par l'IA",
    "en": "Edu-Tek: AI-Powered Academic Monitoring and Student Support Platform"
  },
  "short": {
    "fr": "Edu-Tek",
    "en": "Edu-Tek"
  },
  "tagline": {
    "fr": "Plateforme académique full-stack intégrant l'intelligence artificielle, l'automatisation des notifications et une infrastructure Kubernetes déployée selon une approche GitOps.",
    "en": "Full-stack academic platform integrating artificial intelligence, automated notifications, and a Kubernetes infrastructure deployed using a GitOps approach."
  },
  "context": "team",
  "setting": {
    "fr": "Projet semestriel en 5e année Génie Logiciel et Systèmes d'Information, TEK-UP University",
    "en": "Semester project in the 5th year of Software Engineering and Information Systems, TEK-UP University"
  },
  "period": {
    "fr": "Septembre – octobre 2026",
    "en": "September – October 2026"
  },
  "myRole": {
    "fr": "À personnaliser selon ta contribution réelle au projet : développement full-stack, intégration du service d'intelligence artificielle, industrialisation CI/CD, conteneurisation Docker, déploiement Kubernetes et automatisation GitOps.",
    "en": "Customize according to your actual contribution to the project: full-stack development, AI service integration, CI/CD engineering, Docker containerization, Kubernetes deployment, and GitOps automation."
  },
  "teamNote": {
    "fr": "Projet académique intégrant une application Angular, une API Spring Boot, un service de prédiction IA en Python et une infrastructure conteneurisée. Les responsabilités individuelles sont à préciser selon la répartition réelle du travail.",
    "en": "Academic project integrating an Angular application, a Spring Boot API, a Python-based AI prediction service, and a containerized infrastructure. Individual responsibilities should be specified according to the actual division of work."
  },
  "summary": {
    "fr": "Edu-Tek centralise la gestion de la vie académique d'un établissement : organisation pédagogique, assiduité, évaluations, résultats, démarches administratives, communication et suivi des rémunérations. La plateforme intègre un service d'intelligence artificielle basé sur un réseau GRU pour estimer le risque d'échec académique à partir d'indicateurs semestriels et fournir des facteurs explicatifs. L'infrastructure repose sur une architecture distribuée composée d'Angular, Spring Boot, FastAPI et PostgreSQL, déployée sur Kubernetes avec Argo CD pour la synchronisation GitOps. Une chaîne CI/CD automatise les tests, la construction des images, l'analyse de sécurité et les contrôles après déploiement.",
    "en": "Edu-Tek centralizes an institution's academic operations, including educational organization, attendance, assessments, results, administrative requests, communication, and payroll tracking. The platform integrates a GRU-based artificial intelligence service to estimate academic failure risk from semester-level indicators and provide explanatory factors. Its distributed architecture combines Angular, Spring Boot, FastAPI, and PostgreSQL, deployed on Kubernetes with Argo CD for GitOps synchronization. A CI/CD pipeline automates testing, image builds, security scanning, and post-deployment verification."
  },
  "stack": [
    "Angular 21",
    "TypeScript",
    "Spring Boot 4",
    "Java 17",
    "Spring Security",
    "JWT",
    "Hibernate",
    "Python 3.12",
    "FastAPI",
    "PyTorch",
    "GRU",
    "scikit-learn",
    "PostgreSQL 16",
    "Docker",
    "Kubernetes",
    "Kustomize",
    "Argo CD",
    "GitHub Actions",
    "GitHub Container Registry",
    "Trivy",
    "Gitleaks",
    "n8n",
    "Gmail"
  ],
  "highlights": [
    {
      "fr": "Architecture distribuée en trois services applicatifs : frontend Angular, backend Spring Boot sécurisé par JWT et service de prédiction FastAPI utilisant PyTorch.",
      "en": "Three-service application architecture: Angular frontend, JWT-secured Spring Boot backend, and a FastAPI prediction service powered by PyTorch."
    },
    {
      "fr": "Pipeline CI/CD/CT : détection des secrets avec Gitleaks, tests backend et IA, build frontend, construction des images Docker, analyse Trivy et publication sur GitHub Container Registry.",
      "en": "CI/CD/CT pipeline: secret detection with Gitleaks, backend and AI tests, frontend build, Docker image creation, Trivy scanning, and publishing to GitHub Container Registry."
    },
    {
      "fr": "Déploiement Kubernetes piloté par Argo CD avec synchronisation automatique, self-healing et mise à jour des images par identifiant de commit.",
      "en": "Argo CD-managed Kubernetes deployment with automatic synchronization, self-healing, and commit-specific image updates."
    },
    {
      "fr": "Modèle GRU avec probabilités calibrées et facteurs explicatifs, évalué sur des données synthétiques générées à partir du plan d'études GLSI.",
      "en": "GRU model with calibrated probabilities and explanatory factors, evaluated on synthetic data generated from the GLSI curriculum."
    },
    {
      "fr": "Automatisation des notifications par e-mail via n8n et Gmail, avec suivi des envois et journalisation des exécutions.",
      "en": "Email notification automation through n8n and Gmail, including delivery tracking and execution logging."
    }
  ],
  "architecture": [
    {
      "name": "front",
      "tech": "Angular 21 + nginx",
      "role": {
        "fr": "Interface utilisateur et portail académique",
        "en": "User interface and academic portal"
      }
    },
    {
      "name": "backend",
      "tech": "Spring Boot 4 + Java 17 + Spring Security + JWT",
      "role": {
        "fr": "API REST, logique métier, authentification et gestion des données académiques",
        "en": "REST API, business logic, authentication, and academic data management"
      }
    },
    {
      "name": "ia",
      "tech": "FastAPI + PyTorch + GRU",
      "role": {
        "fr": "Prédiction du risque académique et génération de facteurs explicatifs",
        "en": "Academic risk prediction and generation of explanatory factors"
      }
    },
    {
      "name": "postgres",
      "tech": "PostgreSQL 16",
      "role": {
        "fr": "Persistance des données relationnelles",
        "en": "Relational data persistence"
      }
    },
    {
      "name": "kubernetes",
      "tech": "Kubernetes + Kustomize + Ingress NGINX",
      "role": {
        "fr": "Orchestration des conteneurs, exposition des services et gestion des déploiements",
        "en": "Container orchestration, service exposure, and deployment management"
      }
    },
    {
      "name": "argocd",
      "tech": "Argo CD",
      "role": {
        "fr": "Déploiement continu selon l'approche GitOps et réconciliation de l'état du cluster",
        "en": "GitOps continuous deployment and cluster state reconciliation"
      }
    },
    {
      "name": "n8n",
      "tech": "n8n + Gmail",
      "role": {
        "fr": "Automatisation des notifications par e-mail",
        "en": "Email notification automation"
      }
    }
  ],
  "verification": [
    {
      "fr": "Service IA : 16 tests pytest réussis selon le README du dépôt.",
      "en": "AI service: 16 pytest tests passing according to the repository README."
    },
    {
      "fr": "Backend : 1 test JUnit documenté, avec démarrage complet sur PostgreSQL.",
      "en": "Backend: 1 documented JUnit test, including full startup against PostgreSQL."
    },
    {
      "fr": "Frontend : build de production Angular validé.",
      "en": "Frontend: Angular production build validated."
    },
    {
      "fr": "Sécurité : contrôles Gitleaks et Trivy intégrés à la chaîne CI.",
      "en": "Security: Gitleaks and Trivy checks integrated into the CI pipeline."
    },
    {
      "fr": "Après déploiement : Job smoke-tests avec 7 vérifications documentées.",
      "en": "Post-deployment: smoke-tests Job with 7 documented checks."
    }
  ],
  "deployment": {
    "fr": "Déploiement sur Kubernetes, notamment via Minikube pour l'environnement local. Les images frontend, backend et IA sont publiées sur GitHub Container Registry avec des tags sha-<commit>. La CI met à jour k8s/kustomization.yaml, puis Argo CD synchronise l'état souhaité du cluster. Les ressources Kubernetes comprennent les Deployments, Services, un StatefulSet PostgreSQL avec stockage persistant, un Ingress NGINX et un Job de smoke tests exécuté après synchronisation. Les secrets sont fournis au cluster séparément du dépôt Git.",
    "en": "Deployment to Kubernetes, including Minikube for the local environment. Frontend, backend, and AI images are published to GitHub Container Registry with sha-<commit> tags. CI updates k8s/kustomization.yaml, after which Argo CD synchronizes the desired cluster state. Kubernetes resources include Deployments, Services, a PostgreSQL StatefulSet with persistent storage, an NGINX Ingress, and a smoke-test Job executed after synchronization. Secrets are supplied to the cluster separately from the Git repository."
  },
  "evidence": [
    {
      "label": {
        "fr": "Dépôt principal",
        "en": "Main repository"
      },
      "path": "README.md",
      "href": "https://github.com/iheb137/EDU-TEK-"
    },
    {
      "label": {
        "fr": "Pipeline CI/CD",
        "en": "CI/CD pipeline"
      },
      "path": ".github/workflows/ci.yml",
      "href": "https://github.com/iheb137/EDU-TEK-/blob/main/.github/workflows/ci.yml"
    },
    {
      "label": {
        "fr": "Manifestes Kubernetes",
        "en": "Kubernetes manifests"
      },
      "path": "k8s/",
      "href": "https://github.com/iheb137/EDU-TEK-/tree/main/k8s"
    },
    {
      "label": {
        "fr": "Configuration Argo CD",
        "en": "Argo CD configuration"
      },
      "path": "argocd/edutek-app.yaml",
      "href": "https://github.com/iheb137/EDU-TEK-/blob/main/argocd/edutek-app.yaml"
    },
    {
      "label": {
        "fr": "Service d'intelligence artificielle",
        "en": "Artificial intelligence service"
      },
      "path": "edutek-ia/README.md",
      "href": "https://github.com/iheb137/EDU-TEK-/blob/main/edutek-ia/README.md"
    },
    {
      "label": {
        "fr": "Contrat du service IA",
        "en": "AI service contract"
      },
      "path": "docs/contrat-service-ia.md",
      "href": "https://github.com/iheb137/EDU-TEK-/blob/main/docs/contrat-service-ia.md"
    },
    {
      "label": {
        "fr": "Intégration n8n",
        "en": "n8n integration"
      },
      "path": "docs/integration-n8n.md",
      "href": "https://github.com/iheb137/EDU-TEK-/blob/main/docs/integration-n8n.md"
    }
  ],
  "interviewTopics": [
    {
      "fr": "Concevoir une architecture distribuée reliant Angular, Spring Boot et FastAPI.",
      "en": "Designing a distributed architecture connecting Angular, Spring Boot, and FastAPI."
    },
    {
      "fr": "Sécuriser une API multi-établissement avec JWT et un contrôle d'accès par rôle.",
      "en": "Securing a multi-tenant API with JWT and role-based access control."
    },
    {
      "fr": "Construire une chaîne CI/CD intégrant les tests, la détection des secrets et l'analyse des vulnérabilités des images.",
      "en": "Building a CI/CD pipeline integrating tests, secret detection, and container image vulnerability scanning."
    },
    {
      "fr": "Mettre en œuvre GitOps avec Argo CD, Kustomize, synchronisation automatique et self-healing.",
      "en": "Implementing GitOps with Argo CD, Kustomize, automatic synchronization, and self-healing."
    },
    {
      "fr": "Évaluer un modèle GRU calibré et interpréter ses prédictions à partir de données synthétiques.",
      "en": "Evaluating a calibrated GRU model and interpreting its predictions using synthetic data."
    },
    {
      "fr": "Concevoir des tests de fumée post-déploiement et assurer la cohérence entre le dépôt Git et le cluster Kubernetes.",
      "en": "Designing post-deployment smoke tests and maintaining consistency between the Git repository and Kubernetes cluster."
    }
  ],
  "repo": "https://github.com/iheb137/EDU-TEK-"
}

]

const T = {
  fr: {
    kicker: "Projets",
    title: "Des projets livrés, pas seulement codés",
    intro: "Pour chaque projet : ce que j'ai fait moi-même, l'architecture, les tests, le déploiement et les fichiers qui le prouvent.",
    stats: [
      { value: 8, label: "projets publics" },
      { value: 4, label: "avec un pipeline CI/CD" },
      { value: 3, label: "avec des tests automatisés" },
    ],
    filters: { all: "Tous", internship: "Stage", team: "Équipe", academic: "Académique", personal: "Personnel" },
    filterLabel: "Filtrer par type de projet",
    featured: "Projet phare",
    caseStudy: "Étude de cas",
    source: "Code source",
    demo: "Démo en ligne",
    myRole: "Mon rôle",
    team: "Équipe",
    overview: "Présentation",
    highlights: "Points techniques",
    architecture: "Architecture",
    component: "Composant",
    technology: "Technologie",
    responsibility: "Responsabilité",
    verification: "Tests et intégration continue",
    deployment: "Déploiement",
    proof: "Preuves dans le code",
    interview: "À approfondir en entretien",
    close: "Fermer",
    ctaTitle: "Un de ces projets vous parle ?",
    ctaText: "Je peux en présenter l'architecture et les choix techniques en entretien, en français ou en anglais.",
    contact: "Me contacter",
    skills: "Voir mes compétences",
    langLabel: "English",
  },
  en: {
    kicker: "Projects",
    title: "Projects shipped, not just coded",
    intro: "For each project: what I built myself, the architecture, tests, deployment and the files that prove it.",
    stats: [
      { value: 8, label: "public projects" },
      { value: 4, label: "with a CI/CD pipeline" },
      { value: 3, label: "with automated tests" },
    ],
    filters: { all: "All", internship: "Internship", team: "Team", academic: "Academic", personal: "Personal" },
    filterLabel: "Filter by project type",
    featured: "Featured project",
    caseStudy: "Case study",
    source: "Source code",
    demo: "Live demo",
    myRole: "My role",
    team: "Team",
    overview: "Overview",
    highlights: "Technical highlights",
    architecture: "Architecture",
    component: "Component",
    technology: "Technology",
    responsibility: "Responsibility",
    verification: "Tests and continuous integration",
    deployment: "Deployment",
    proof: "Evidence in the code",
    interview: "Worth discussing in an interview",
    close: "Close",
    ctaTitle: "Does one of these projects speak to you?",
    ctaText: "I can walk through its architecture and technical choices in an interview, in French or English.",
    contact: "Contact me",
    skills: "See my skills",
    langLabel: "Français",
  },
} as const

const CONTEXT_STYLE: Record<Context, string> = {
  internship: "border-amber-300/35 bg-amber-300/10 text-amber-300",
  team: "border-indigo-400/35 bg-indigo-400/10 text-indigo-300",
  academic: "border-teal-300/35 bg-teal-300/10 text-teal-300",
  personal: "border-slate-400/30 bg-white/5 text-slate-300",
}

/* ─────────────────────────────────────────────────────────────
   Fond animé : réseau de nœuds traversé par des impulsions.
   ───────────────────────────────────────────────────────────── */
function NetworkBackground() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas?.getContext("2d")
    if (!canvas || !ctx) return
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    type N = { x: number; y: number; vx: number; vy: number; glow: number }
    type P = { a: number; b: number; t: number; speed: number; color: string }
    let nodes: N[] = []
    let pulses: P[] = []
    let w = 0
    let h = 0
    let raf = 0
    let last = performance.now()
    let spawn = 0
    const mouse = { x: -9999, y: -9999 }
    const LINK = 150

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.round(Math.min(70, Math.max(28, (w * h) / 26000)))
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        glow: 0,
      }))
      pulses = []
    }

    const neighbours = (i: number) => {
      const out: number[] = []
      for (let j = 0; j < nodes.length; j++) {
        if (j === i) continue
        const dx = nodes[i].x - nodes[j].x
        const dy = nodes[i].y - nodes[j].y
        if (dx * dx + dy * dy < LINK * LINK) out.push(j)
      }
      return out
    }

    const draw = (dt: number) => {
      ctx.clearRect(0, 0, w, h)

      // Liens
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < LINK) {
            ctx.strokeStyle = `rgba(129,140,248,${(1 - d / LINK) * 0.16})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
      }

      // Impulsions qui voyagent de nœud en nœud
      for (const p of pulses) {
        const a = nodes[p.a]
        const b = nodes[p.b]
        const x = a.x + (b.x - a.x) * p.t
        const y = a.y + (b.y - a.y) * p.t
        const g = ctx.createRadialGradient(x, y, 0, x, y, 10)
        g.addColorStop(0, p.color)
        g.addColorStop(1, "rgba(0,0,0,0)")
        ctx.fillStyle = g
        ctx.beginPath()
        ctx.arc(x, y, 10, 0, Math.PI * 2)
        ctx.fill()
      }

      // Nœuds
      for (const n of nodes) {
        n.glow = Math.max(0, n.glow - dt * 1.2)
        const dx = n.x - mouse.x
        const dy = n.y - mouse.y
        const near = Math.max(0, 1 - Math.sqrt(dx * dx + dy * dy) / 180)
        const light = Math.max(n.glow, near)
        ctx.fillStyle = `rgba(45,212,191,${0.35 + light * 0.65})`
        ctx.beginPath()
        ctx.arc(n.x, n.y, 1.6 + light * 2.2, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const step = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000)
      last = now
      for (const n of nodes) {
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > w) n.vx *= -1
        if (n.y < 0 || n.y > h) n.vy *= -1
      }
      spawn -= dt
      if (spawn <= 0 && pulses.length < 14) {
        const a = Math.floor(Math.random() * nodes.length)
        const nb = neighbours(a)
        if (nb.length) {
          const r = Math.random()
          pulses.push({
            a,
            b: nb[Math.floor(Math.random() * nb.length)],
            t: 0,
            speed: 0.6 + Math.random() * 0.6,
            color: r < 0.7 ? "rgba(45,212,191,0.95)" : r < 0.92 ? "rgba(129,140,248,0.95)" : "rgba(251,191,36,0.95)",
          })
          nodes[a].glow = 1
        }
        spawn = 0.25 + Math.random() * 0.3
      }
      const next: P[] = []
      for (const p of pulses) {
        p.t += dt * p.speed
        if (p.t < 1) {
          next.push(p)
          continue
        }
        nodes[p.b].glow = 1
        const nb = neighbours(p.b).filter((j) => j !== p.a)
        if (nb.length && Math.random() < 0.75) next.push({ ...p, a: p.b, b: nb[Math.floor(Math.random() * nb.length)], t: 0 })
      }
      pulses = next
      draw(dt)
      raf = requestAnimationFrame(step)
    }

    const onMove = (e: PointerEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }
    const onVisibility = () => {
      cancelAnimationFrame(raf)
      if (!document.hidden && !reduced) {
        last = performance.now()
        raf = requestAnimationFrame(step)
      }
    }

    resize()
    if (reduced) draw(0)
    else raf = requestAnimationFrame(step)
    window.addEventListener("resize", resize)
    window.addEventListener("pointermove", onMove, { passive: true })
    document.addEventListener("visibilitychange", onVisibility)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", resize)
      window.removeEventListener("pointermove", onMove)
      document.removeEventListener("visibilitychange", onVisibility)
    }
  }, [])

  return <canvas ref={ref} aria-hidden="true" className="pointer-events-none fixed inset-0 z-0" />
}


/* ─────────────────────────────────────────────────────────────
   Effets
   ───────────────────────────────────────────────────────────── */
function useReveal(dep: unknown) {
  useEffect(() => {
    document.getElementById("projects-root")?.classList.add("pj-js")
    const items = Array.from(document.querySelectorAll<HTMLElement>("#projects-root [data-reveal]:not([data-visible])"))
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.setAttribute("data-visible", "")
            io.unobserve(e.target)
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    )
    items.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [dep])
}

function useSpotlight() {
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const card = (e.target as Element | null)?.closest?.<HTMLElement>(".pj-spot")
      if (!card) return
      const r = card.getBoundingClientRect()
      card.style.setProperty("--mx", `${e.clientX - r.left}px`)
      card.style.setProperty("--my", `${e.clientY - r.top}px`)
    }
    document.addEventListener("pointermove", onMove, { passive: true })
    return () => document.removeEventListener("pointermove", onMove)
  }, [])
}

function CountUp({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [shown, setShown] = useState(value)
  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    setShown(0)
    let raf = 0
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      io.disconnect()
      const start = performance.now()
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / 1200)
        setShown(Math.round(value * (1 - Math.pow(1 - p, 3))))
        if (p < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    })
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [value])
  return (
    <>
      <span ref={ref} aria-hidden="true">
        {shown}
      </span>
      <span className="sr-only">{value}</span>
    </>
  )
}

const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties
const period = (p: Project, lang: Lang) => (lang === "fr" ? p.period.fr.toLowerCase() : p.period.en)

function Stack({ items, max }: { items: string[]; max?: number }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {(max ? items.slice(0, max) : items).map((s) => (
        <li key={s} className="rounded-md border border-slate-500/20 bg-white/[0.04] px-2 py-0.5 text-xs text-slate-300">
          {s}
        </li>
      ))}
    </ul>
  )
}

function Evidence({ items, lang, title }: { items: Project["evidence"]; lang: Lang; title: string }) {
  if (!items.length) return null
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-500/15 bg-[#070c18]/90">
      <div className="flex items-center gap-2 border-b border-slate-500/15 px-4 py-2.5">
        <span aria-hidden="true" className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-teal-300/70" />
        </span>
        <p className="ml-2 text-sm font-medium text-white">{title}</p>
      </div>
      <ul className="divide-y divide-slate-500/10">
        {items.map((e, i) => (
          <li key={e.href} className="pj-line" style={{ animationDelay: `${150 + i * 90}ms` }}>
            <a href={e.href} target="_blank" rel="noopener noreferrer" className="group flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5 px-4 py-2.5 transition-colors hover:bg-teal-300/[0.06]">
              <span className="text-sm text-slate-200">
                <span aria-hidden="true" className="mr-2 font-mono text-teal-300">✓</span>
                {e.label[lang]}
              </span>
              <span className="inline-flex items-center gap-1.5 break-all font-mono text-xs text-slate-400 group-hover:text-teal-300">
                {e.path}
                <ExternalLink className="h-3 w-3 shrink-0" aria-hidden="true" />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

/** Schéma d'architecture animé : les composants reliés par un flux lumineux. */
function Flow({ names }: { names: string[] }) {
  return (
    <div aria-hidden="true" className="relative overflow-hidden rounded-2xl border border-slate-500/15 bg-[#070c18]/80 px-4 py-6">
      <div className="pj-grid absolute inset-0" />
      <div className="relative flex flex-wrap items-center justify-center gap-y-4">
        {names.map((n, i) => (
          <div key={n} className="flex items-center">
            <span className="pj-node rounded-lg border border-teal-300/40 bg-teal-300/10 px-2.5 py-1.5 font-mono text-[11px] text-white" style={{ animationDelay: `${i * 0.6}s` }}>
              {n}
            </span>
            {i < names.length - 1 && (
              <span className="relative mx-1.5 h-px w-6 overflow-hidden bg-slate-500/30">
                <span className="pj-flow absolute top-0 h-px w-3 bg-teal-300" style={{ animationDelay: `${i * 0.4}s` }} />
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function Section({ icon: Icon, title, children }: { icon: typeof User; title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-slate-500/15 pt-6">
      <h3 className="mb-3 flex items-center gap-2.5 text-base font-semibold text-white">
        <Icon className="h-4 w-4 text-teal-300" aria-hidden="true" />
        {title}
      </h3>
      {children}
    </section>
  )
}

function Bullets({ items, lang, color = "bg-teal-300" }: { items: L[]; lang: Lang; color?: string }) {
  return (
    <ul className="space-y-2">
      {items.map((i) => (
        <li key={i.fr} className="flex gap-3 text-sm leading-relaxed text-slate-300">
          <span aria-hidden="true" className={`mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full ${color}`} />
          {i[lang]}
        </li>
      ))}
    </ul>
  )
}

/** Étude de cas en panneau latéral (élément <dialog> natif : Échap ferme, focus piégé). */
function CaseStudy({ project, lang, onClose }: { project: Project | null; lang: Lang; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null)
  const t = T[lang]

  useEffect(() => {
    const d = ref.current
    if (!d) return
    if (project && !d.open) {
      d.showModal()
      document.body.style.overflow = "hidden"
    }
    if (!project && d.open) d.close()
  }, [project])

  useEffect(() => {
    const d = ref.current
    if (!d) return
    const onCloseEvt = () => {
      document.body.style.overflow = ""
      onClose()
    }
    d.addEventListener("close", onCloseEvt)
    return () => d.removeEventListener("close", onCloseEvt)
  }, [onClose])

  return (
    <dialog
      ref={ref}
      aria-labelledby="case-title"
      onClick={(e) => {
        if (e.target === ref.current) ref.current?.close()
      }}
      className="pj-dialog m-0 ml-auto h-full max-h-none w-full max-w-3xl overflow-y-auto border-l border-slate-500/20 bg-[#0c1324] p-0 text-slate-200 backdrop:bg-[#070c18]/70 backdrop:backdrop-blur-sm"
    >
      {project && (
        <div className="relative">
          <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-slate-500/15 bg-[#0c1324]/95 px-6 py-4 backdrop-blur">
            <p className={`inline-flex rounded-2xl border px-3 py-1 text-xs ${CONTEXT_STYLE[project.context]}`}>
              {project.setting[lang]}, {period(project, lang)}
            </p>
            <button
              type="button"
              onClick={() => ref.current?.close()}
              aria-label={t.close}
              className="grid h-10 w-10 place-items-center rounded-full border border-slate-500/30 text-slate-300 transition-colors hover:border-teal-300 hover:text-teal-300"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="space-y-6 px-6 pb-12 pt-6 sm:px-9">
            <div>
              <h2 id="case-title" className="text-3xl font-bold leading-tight text-white">
                {project.title[lang]}
              </h2>
              <p className="mt-3 text-lg text-slate-300">{project.tagline[lang]}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href={project.repo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-teal-300 px-4 py-2.5 text-sm font-medium text-[#070c18] transition-all hover:-translate-y-0.5">
                  <Github className="h-4 w-4" />
                  {t.source}
                </a>
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-slate-500/30 bg-white/5 px-4 py-2.5 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:border-teal-300/60">
                    {t.demo}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>

            <Section icon={BookOpen} title={t.overview}>
              <p className="text-sm leading-relaxed text-slate-300">{project.summary[lang]}</p>
            </Section>

            <Section icon={User} title={t.myRole}>
              <p className="text-sm leading-relaxed text-slate-300">{project.myRole[lang]}</p>
              {project.teamNote && (
                <p className="mt-3 rounded-xl border border-indigo-400/25 bg-indigo-400/[0.07] p-3.5 text-sm text-slate-300">
                  <span className="font-medium text-white">{t.team}. </span>
                  {project.teamNote[lang]}
                </p>
              )}
            </Section>

            {project.highlights.length > 0 && (
              <Section icon={Rocket} title={t.highlights}>
                <Bullets items={project.highlights} lang={lang} />
              </Section>
            )}

            {project.architecture.length > 0 && (
              <Section icon={Layers} title={t.architecture}>
                <Flow names={project.architecture.map((c) => c.name)} />
                <div className="mt-4 overflow-x-auto" tabIndex={0} role="region" aria-label={t.architecture}>
                  <table className="w-full min-w-[30rem] text-left text-sm">
                    <thead className="text-slate-400">
                      <tr className="border-b border-slate-500/20">
                        <th scope="col" className="py-2 pr-4 font-normal">{t.component}</th>
                        <th scope="col" className="py-2 pr-4 font-normal">{t.technology}</th>
                        <th scope="col" className="py-2 font-normal">{t.responsibility}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {project.architecture.map((c) => (
                        <tr key={c.name} className="border-b border-slate-500/10 align-top">
                          <th scope="row" className="whitespace-nowrap py-2.5 pr-4 font-mono text-xs font-medium text-teal-300">{c.name}</th>
                          <td className="py-2.5 pr-4 text-white">{c.tech}</td>
                          <td className="py-2.5 text-slate-400">{c.role[lang]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Section>
            )}

            <Section icon={ShieldCheck} title={t.verification}>
              <Bullets items={project.verification} lang={lang} />
            </Section>

            <Section icon={Rocket} title={t.deployment}>
              <p className="text-sm leading-relaxed text-slate-300">{project.deployment[lang]}</p>
            </Section>

            {project.evidence.length > 0 && <Evidence items={project.evidence} lang={lang} title={t.proof} />}

            {project.interviewTopics.length > 0 && (
              <Section icon={MessageSquare} title={t.interview}>
                <Bullets items={project.interviewTopics} lang={lang} color="bg-amber-300" />
              </Section>
            )}

            <div>
              <Stack items={project.stack} />
            </div>
          </div>
        </div>
      )}
    </dialog>
  )
}

/* ─────────────────────────────────────────────────────────────
   Page
   ───────────────────────────────────────────────────────────── */
export default function ProjectsPage() {
  const [lang, setLang] = useLang()
  const [filter, setFilter] = useState<Context | "all">("all")
  const [open, setOpen] = useState<Project | null>(null)
  const t = T[lang]
  useReveal(lang + filter)
  useSpotlight()

  const featured = PROJECTS.find((p) => p.featured)!
  const others = PROJECTS.filter((p) => !p.featured && (filter === "all" || p.context === filter))
  const showFeatured = filter === "all" || filter === featured.context

  return (
    <div id="projects-root" className="relative min-h-screen overflow-x-clip bg-[#070c18] text-slate-200">
      <NetworkBackground />
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="pj-drift absolute -left-[15%] -top-[20%] h-[60vmax] w-[60vmax] rounded-full bg-[radial-gradient(circle,rgba(45,212,191,0.12),transparent_60%)] blur-2xl" />
        <div className="pj-drift-2 absolute -right-[20%] top-[25%] h-[55vmax] w-[55vmax] rounded-full bg-[radial-gradient(circle,rgba(129,140,248,0.15),transparent_60%)] blur-2xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-5 pb-24 pt-14 md:pt-20">
        {/* ── EN-TÊTE ───────────────────────────────────────── */}
        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => setLang(lang === "fr" ? "en" : "fr")}
            lang={lang === "fr" ? "en" : "fr"}
            className="rounded-full border border-slate-500/30 bg-white/5 px-4 py-1.5 text-sm text-slate-200 backdrop-blur transition-colors hover:border-teal-300 hover:text-teal-300"
          >
            {t.langLabel}
          </button>
        </div>
        <header className="mt-4 grid items-end gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
          <div>
            <p className="pj-in text-sm font-medium text-teal-300" style={delay(0)}>
              {t.kicker}
            </p>
            <h1 className="pj-in mt-3 text-4xl font-bold leading-[1.06] tracking-tight md:text-6xl" style={delay(100)}>
              <span className="pj-sheen">{t.title}</span>
            </h1>
            <p className="pj-in mt-6 max-w-xl text-lg leading-relaxed text-slate-400" style={delay(200)}>
              {t.intro}
            </p>
          </div>
          <dl className="pj-in grid grid-cols-3 gap-3" style={delay(300)}>
            {t.stats.map((s) => (
              <div key={s.label} className="flex flex-col-reverse rounded-2xl border border-slate-500/20 bg-[#0c1324]/75 px-4 py-4 backdrop-blur">
                <dt className="mt-1 text-xs leading-snug text-slate-400">{s.label}</dt>
                <dd className="bg-gradient-to-br from-teal-300 to-indigo-400 bg-clip-text text-4xl font-bold text-transparent">
                  <CountUp value={s.value} />
                </dd>
              </div>
            ))}
          </dl>
        </header>

        {/* ── FILTRES ───────────────────────────────────────── */}
        <div className="pj-in sticky top-20 z-20 -mx-5 mt-12 border-y border-slate-500/10 bg-[#070c18]/85 px-5 py-3 backdrop-blur-lg" style={delay(380)}>
          <div role="group" aria-label={t.filterLabel} className="flex gap-2 overflow-x-auto [scrollbar-width:none]">
            {(["all", "internship", "team", "academic", "personal"] as const).map((f) => {
              const active = filter === f
              const n = f === "all" ? PROJECTS.length : PROJECTS.filter((p) => p.context === f).length
              return (
                <button
                  key={f}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setFilter(f)}
                  className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm transition-all ${
                    active ? "border-teal-300 bg-teal-300 text-[#070c18] shadow-[0_8px_24px_-10px_rgba(45,212,191,0.8)]" : "border-slate-500/25 bg-white/[0.03] text-slate-300 hover:border-teal-300/60 hover:text-white"
                  }`}
                >
                  {t.filters[f]}
                  <span className={`rounded-full px-1.5 text-xs ${active ? "bg-[#070c18]/15" : "bg-white/10"}`}>{n}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* ── PROJET PHARE ──────────────────────────────────── */}
        {showFeatured && (
          <article key={`f-${filter}`} className="pj-pop pj-spot relative mt-10 grid gap-10 rounded-3xl border border-slate-500/20 bg-[#0c1324]/80 p-6 backdrop-blur-md sm:p-9 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-teal-300 to-indigo-400 px-3 py-1 text-xs font-semibold text-[#070c18]">
                  <Rocket className="h-3.5 w-3.5" aria-hidden="true" />
                  {t.featured}
                </span>
                <span className={`inline-flex rounded-2xl border px-3 py-1 text-xs ${CONTEXT_STYLE[featured.context]}`}>
                  {featured.setting[lang]}, {period(featured, lang)}
                </span>
              </div>
              <h2 className="mt-5 text-3xl font-bold leading-tight text-white md:text-4xl">{featured.title[lang]}</h2>
              <p className="mt-3 text-lg text-slate-200">{featured.tagline[lang]}</p>
              <p className="mt-4 text-sm leading-relaxed text-slate-400">{featured.summary[lang]}</p>
              <p className="mt-4 border-l-2 border-teal-300/50 pl-4 text-sm">
                <span className="font-medium text-white">{t.myRole}. </span>
                <span className="text-slate-400">{featured.myRole[lang]}</span>
              </p>
              <div className="mt-5">
                <Stack items={featured.stack} />
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setOpen(featured)}
                  className="group inline-flex items-center gap-2 rounded-xl bg-teal-300 px-5 py-2.5 font-medium text-[#070c18] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-10px_rgba(45,212,191,0.7)]"
                >
                  {t.caseStudy}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
                {featured.demo && (
                  <a href={featured.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-slate-500/30 bg-white/5 px-5 py-2.5 font-medium text-white transition-all hover:-translate-y-0.5 hover:border-teal-300/60">
                    {t.demo}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
                <a href={featured.repo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-slate-500/30 bg-white/5 px-5 py-2.5 font-medium text-white transition-all hover:-translate-y-0.5 hover:border-teal-300/60">
                  <Github className="h-4 w-4" />
                  {t.source}
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              {featured.metrics && (
                <dl className="grid grid-cols-2 gap-3">
                  {featured.metrics.map((m) => (
                    <div key={m.label.fr} className="flex flex-col-reverse rounded-2xl border border-slate-500/15 bg-[#070c18]/70 px-4 py-4">
                      <dt className="mt-2 text-sm leading-snug text-slate-400">{m.label[lang]}</dt>
                      <dd className="bg-gradient-to-br from-teal-300 to-indigo-400 bg-clip-text text-4xl font-bold leading-none text-transparent">
                        <CountUp value={m.value} />
                      </dd>
                    </div>
                  ))}
                </dl>
              )}
              <Evidence items={featured.evidence} lang={lang} title={t.proof} />
            </div>
          </article>
        )}

        {/* ── AUTRES PROJETS ────────────────────────────────── */}
        <ul key={`g-${filter}`} className="mt-6 grid gap-5 md:grid-cols-2">
          {others.map((p, i) => (
            <li
              key={p.slug}
              className="pj-pop pj-spot group relative flex flex-col rounded-2xl border border-slate-500/20 bg-[#0c1324]/80 p-6 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 sm:p-7"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <p className={`inline-flex self-start rounded-2xl border px-3 py-1 text-xs ${CONTEXT_STYLE[p.context]}`}>
                {p.setting[lang]}, {period(p, lang)}
              </p>
              <h3 className="mt-4 text-xl font-semibold leading-snug text-white">{p.title[lang]}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.tagline[lang]}</p>
              {p.teamNote && (
                <p className="mt-4 border-l-2 border-indigo-400/50 pl-3 text-sm">
                  <span className="font-medium text-white">{t.myRole}. </span>
                  <span className="text-slate-400">{p.myRole[lang]}</span>
                </p>
              )}
              <div className="mt-5">
                <Stack items={p.stack} max={6} />
              </div>
              <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-6 text-sm">
                {p.architecture.length > 0 && (
                  <button type="button" onClick={() => setOpen(p)} className="group/b inline-flex items-center gap-1.5 font-medium text-teal-300">
                    {t.caseStudy}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/b:translate-x-1" aria-hidden="true" />
                  </button>
                )}
                <a href={p.repo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-slate-300 transition-colors hover:text-teal-300">
                  <Github className="h-4 w-4" aria-hidden="true" />
                  {t.source}
                </a>
              </div>
            </li>
          ))}
        </ul>

        {/* ── APPEL À L'ACTION ──────────────────────────────── */}
        <section data-reveal aria-labelledby="pj-cta" className="pj-conic relative mt-24 overflow-hidden rounded-3xl p-px">
          <div className="relative rounded-3xl bg-[#0c1324] px-7 py-12 text-center md:px-16 md:py-14">
            <h2 id="pj-cta" className="text-3xl font-bold text-white md:text-4xl">
              {t.ctaTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-400">{t.ctaText}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-teal-300 px-6 py-3 font-medium text-[#070c18] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-10px_rgba(45,212,191,0.7)]"
              >
                <Mail className="h-4 w-4" />
                {t.contact}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/skills"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-500/30 bg-white/5 px-6 py-3 font-medium text-white transition-all hover:-translate-y-0.5 hover:border-teal-300/60"
              >
                <CheckCircle2 className="h-4 w-4" />
                {t.skills}
              </Link>
            </div>
          </div>
        </section>
      </div>

      <CaseStudy project={open} lang={lang} onClose={() => setOpen(null)} />

      <style>{`
        @keyframes pj-in { from { opacity: 0; transform: translate3d(0, 24px, 0) } to { opacity: 1; transform: none } }
        @keyframes pj-pop { from { opacity: 0; transform: translate3d(0, 22px, 0) scale(.98) } to { opacity: 1; transform: none } }
        @keyframes pj-drift { 0%,100% { transform: translate3d(0,0,0) scale(1) } 33% { transform: translate3d(6%,-4%,0) scale(1.08) } 66% { transform: translate3d(-5%,5%,0) scale(.95) } }
        @keyframes pj-rot { to { transform: rotate(360deg) } }
        @keyframes pj-sheen { from { background-position: 100% 0 } to { background-position: 0% 0 } }
        @keyframes pj-flow { from { left: -40% } to { left: 110% } }
        @keyframes pj-node { 0%, 100% { box-shadow: 0 0 0 0 rgba(45,212,191,0) } 50% { box-shadow: 0 0 22px -4px rgba(45,212,191,.7) } }
        @keyframes pj-line { from { opacity: 0; transform: translateX(-8px) } to { opacity: 1; transform: none } }
        @keyframes pj-slide { from { transform: translateX(100%) } to { transform: none } }

        .pj-in { animation: pj-in .9s cubic-bezier(.2,.7,.2,1) both; animation-delay: var(--d, 0ms) }
        .pj-pop { animation: pj-pop .6s cubic-bezier(.2,.7,.2,1) both }
        .pj-drift { animation: pj-drift 24s ease-in-out infinite }
        .pj-drift-2 { animation: pj-drift 32s ease-in-out infinite reverse }
        .pj-flow { animation: pj-flow 1.6s ease-in-out infinite }
        .pj-node { animation: pj-node 2.4s ease-in-out infinite }
        .pj-line { animation: pj-line .5s ease-out both }
        .pj-dialog[open] { animation: pj-slide .45s cubic-bezier(.2,.7,.2,1) }
        .pj-sheen {
          background: linear-gradient(100deg, #fff 20%, #2dd4bf 45%, #818cf8 65%, #fff 90%);
          background-size: 250% 100%;
          -webkit-background-clip: text; background-clip: text; color: transparent;
          animation: pj-sheen 2.4s ease-out .4s both;
        }
        .pj-grid {
          background-image: linear-gradient(rgba(148,163,184,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,.07) 1px, transparent 1px);
          background-size: 28px 28px;
        }

        .pj-js [data-reveal] { opacity: 0; transform: translate3d(0, 28px, 0); transition: opacity .8s cubic-bezier(.2,.7,.2,1), transform .8s cubic-bezier(.2,.7,.2,1) }
        .pj-js [data-reveal][data-visible] { opacity: 1; transform: none }

        .pj-spot { isolation: isolate }
        .pj-spot::before {
          content: ""; position: absolute; inset: -1px; border-radius: inherit; padding: 1px; pointer-events: none;
          background: radial-gradient(360px circle at var(--mx, 50%) var(--my, 0%), rgba(45,212,191,.8), rgba(129,140,248,.35) 40%, transparent 70%);
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0); -webkit-mask-composite: xor; mask-composite: exclude;
          opacity: 0; transition: opacity .35s;
        }
        .pj-spot::after {
          content: ""; position: absolute; inset: 0; border-radius: inherit; pointer-events: none; z-index: -1;
          background: radial-gradient(480px circle at var(--mx, 50%) var(--my, 0%), rgba(45,212,191,.08), transparent 60%);
          opacity: 0; transition: opacity .35s;
        }
        .pj-spot:hover::before, .pj-spot:hover::after, .pj-spot:focus-within::before { opacity: 1 }

        .pj-conic::before {
          content: ""; position: absolute; inset: -150%;
          background: conic-gradient(from 0deg, transparent 0 70%, #2dd4bf 80%, #818cf8 90%, transparent 100%);
          animation: pj-rot 7s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .pj-in, .pj-pop, .pj-drift, .pj-drift-2, .pj-flow, .pj-node, .pj-line, .pj-sheen, .pj-dialog[open], .pj-conic::before { animation: none !important }
          .pj-sheen { background-position: 0 0 }
          .pj-js [data-reveal] { opacity: 1; transform: none; transition: none }
        }
      `}</style>
    </div>
  )
}
