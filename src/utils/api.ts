export interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  year: string;
  description: string;
  image: string;
  images: string[];
  services: string[];
  stats: Record<string, string>;
  highlights: string[];
}

export type CreateProject = Omit<Project, 'id'>;

export const projectsService = {
  async getAll(): Promise<Project[]> {
    try {
      const response = await fetch('/api/projects');
      if (!response.ok) {
        throw new Error('Failed to fetch projects');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching projects:', error);
      return [];
    }
  },

  async getById(id: number): Promise<Project | null> {
    try {
      const response = await fetch(`/api/projects/${id}`);
      if (!response.ok) {
        return null;
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching project:', error);
      return null;
    }
  },

  async create(project: CreateProject): Promise<Project | null> {
    try {
      const response = await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(project),
      });
      if (!response.ok) {
        console.error('Failed to create project');
        return null;
      }
      return await response.json();
    } catch (error) {
      console.error('Error creating project:', error);
      return null;
    }
  },

  async update(id: number, project: Partial<CreateProject>): Promise<Project | null> {
    try {
      const response = await fetch(`/api/projects/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(project),
      });
      if (!response.ok) {
        console.error('Failed to update project');
        return null;
      }
      return await response.json();
    } catch (error) {
      console.error('Error updating project:', error);
      return null;
    }
  },

  async delete(id: number): Promise<boolean> {
    try {
      const response = await fetch(`/api/projects/${id}`, {
        method: 'DELETE',
      });
      return response.ok;
    } catch (error) {
      console.error('Error deleting project:', error);
      return false;
    }
  },

  async seedDatabase(): Promise<boolean> {
    try {
      const response = await fetch('/api/projects/seed', {
        method: 'POST',
      });
      return response.ok;
    } catch (error) {
      console.error('Error seeding database:', error);
      return false;
    }
  },
};
