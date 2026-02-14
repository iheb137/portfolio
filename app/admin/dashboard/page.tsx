'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useRouter } from 'next/navigation';

interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  link?: string;
  technologies?: string[];
  createdAt: string;
}

interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  location?: string;
  createdAt: string;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [projects, setProjects] = useState<Project[]>([]);
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  // Formulaires
  const [projectForm, setProjectForm] = useState({ title: '', description: '', image: '', link: '', technologies: '' });
  const [eventForm, setEventForm] = useState({ title: '', date: '', description: '', location: '' });

  const token = typeof window !== 'undefined' ? localStorage.getItem('adminToken') : '';

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [projectsRes, eventsRes] = await Promise.all([
        fetch('/api/admin/projects'),
        fetch('/api/admin/events'),
      ]);

      setProjects(await projectsRes.json());
      setEvents(await eventsRes.json());
    } catch (err) {
      setError('Erreur lors du chargement des données');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    router.push('/admin/login');
  };

  // Gestion des projets
  const addProject = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await fetch('/api/admin/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...projectForm,
          technologies: projectForm.technologies.split(',').map(t => t.trim()),
        }),
      });

      if (response.ok) {
        const newProject = await response.json();
        setProjects([...projects, newProject]);
        setProjectForm({ title: '', description: '', image: '', link: '', technologies: '' });
        setSuccess('Projet ajouté avec succès');
      } else {
        setError('Erreur lors de l\'ajout du projet');
      }
    } catch (err) {
      setError('Erreur serveur');
    }
  };

  const deleteProject = async (id: string) => {
    if (!confirm('Êtes-vous sûr?')) return;

    try {
      const response = await fetch(`/api/admin/projects?id=${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` },
      });

      if (response.ok) {
        setProjects(projects.filter(p => p.id !== id));
        setSuccess('Projet supprimé');
      }
    } catch (err) {
      setError('Erreur lors de la suppression');
    }
  };

  // Gestion des événements
  const addEvent = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await fetch('/api/admin/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(eventForm),
      });

      if (response.ok) {
        const newEvent = await response.json();
        setEvents([...events, newEvent]);
        setEventForm({ title: '', date: '', description: '', location: '' });
        setSuccess('Événement ajouté avec succès');
      } else {
        setError('Erreur lors de l\'ajout de l\'événement');
      }
    } catch (err) {
      setError('Erreur serveur');
    }
  };

  const deleteEvent = async (id: string) => {
    if (!confirm('Êtes-vous sûr?')) return;

    try {
      const response = await fetch(`/api/admin/events?id=${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` },
      });

      if (response.ok) {
        setEvents(events.filter(e => e.id !== id));
        setSuccess('Événement supprimé');
      }
    } catch (err) {
      setError('Erreur lors de la suppression');
    }
  };

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Chargement...</div>;
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Panneau d'Administration</h1>
          <Button variant="destructive" onClick={handleLogout}>
            Déconnexion
          </Button>
        </div>

        {/* Messages */}
        {success && (
          <Alert className="mb-4 bg-green-50 dark:bg-green-950 text-green-900 dark:text-green-100 border-green-200">
            <AlertDescription>{success}</AlertDescription>
          </Alert>
        )}
        {error && (
          <Alert variant="destructive" className="mb-4">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <Tabs defaultValue="projects" className="space-y-6">
          <TabsList>
            <TabsTrigger value="projects">Projets</TabsTrigger>
            <TabsTrigger value="events">Événements</TabsTrigger>
            <TabsTrigger value="media">CV & Photos</TabsTrigger>
          </TabsList>

          {/* Onglet Projets */}
          <TabsContent value="projects" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Ajouter un Projet</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={addProject} className="space-y-4">
                  <Input
                    placeholder="Titre du projet"
                    value={projectForm.title}
                    onChange={(e) => setProjectForm({ ...projectForm, title: e.target.value })}
                    required
                  />
                  <Textarea
                    placeholder="Description"
                    value={projectForm.description}
                    onChange={(e) => setProjectForm({ ...projectForm, description: e.target.value })}
                    required
                  />
                  <Input
                    placeholder="URL de l'image"
                    value={projectForm.image}
                    onChange={(e) => setProjectForm({ ...projectForm, image: e.target.value })}
                  />
                  <Input
                    placeholder="Lien du projet"
                    value={projectForm.link}
                    onChange={(e) => setProjectForm({ ...projectForm, link: e.target.value })}
                  />
                  <Input
                    placeholder="Technos (séparées par des virgules)"
                    value={projectForm.technologies}
                    onChange={(e) => setProjectForm({ ...projectForm, technologies: e.target.value })}
                  />
                  <Button type="submit" className="w-full">Ajouter</Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Projets existants ({projects.length})</h3>
              {projects.map(project => (
                <Card key={project.id}>
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold">{project.title}</h4>
                        <p className="text-sm text-gray-600">{project.description}</p>
                      </div>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => deleteProject(project.id)}
                      >
                        Supprimer
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Onglet Événements */}
          <TabsContent value="events" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Ajouter un Événement</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={addEvent} className="space-y-4">
                  <Input
                    placeholder="Titre de l'événement"
                    value={eventForm.title}
                    onChange={(e) => setEventForm({ ...eventForm, title: e.target.value })}
                    required
                  />
                  <Input
                    placeholder="Date"
                    type="date"
                    value={eventForm.date}
                    onChange={(e) => setEventForm({ ...eventForm, date: e.target.value })}
                    required
                  />
                  <Textarea
                    placeholder="Description"
                    value={eventForm.description}
                    onChange={(e) => setEventForm({ ...eventForm, description: e.target.value })}
                    required
                  />
                  <Input
                    placeholder="Lieu (optionnel)"
                    value={eventForm.location}
                    onChange={(e) => setEventForm({ ...eventForm, location: e.target.value })}
                  />
                  <Button type="submit" className="w-full">Ajouter</Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Événements existants ({events.length})</h3>
              {events.map(event => (
                <Card key={event.id}>
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold">{event.title}</h4>
                        <p className="text-sm text-gray-600">{event.date} - {event.location}</p>
                        <p className="text-sm">{event.description}</p>
                      </div>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => deleteEvent(event.id)}
                      >
                        Supprimer
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Onglet CV & Photos */}
          <TabsContent value="media" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Gérer le CV et les Photos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Charger un CV</h4>
                  <Input
                    placeholder="URL du CV (PDF)"
                    type="url"
                  />
                  <Button className="mt-2 w-full">Mettre à jour le CV</Button>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Photo de profil</h4>
                  <Input
                    placeholder="URL de la photo de profil"
                    type="url"
                  />
                  <Button className="mt-2 w-full">Mettre à jour</Button>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Photos du portfolio</h4>
                  <Input
                    placeholder="URL de la photo"
                    type="url"
                  />
                  <Button className="mt-2 w-full">Ajouter une photo</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
