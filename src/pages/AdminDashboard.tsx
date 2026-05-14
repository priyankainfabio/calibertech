import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Trash2, Edit2, Save, X, LogOut, Image as ImageIcon, ChevronUp, ChevronDown, Images, Upload } from 'lucide-react';
import { isAuthenticated, logout } from '../utils/auth';
import { useTheme } from '../contexts/ThemeContext';
import { projectsService, Project } from '../utils/api';

const defaultProjects: Project[] = [
  {
    id: 1,
    title: 'Modern Office Complex',
    category: 'commercial',
    location: 'New York, USA',
    year: '2023',
    description: 'A state-of-the-art 25-story office complex with advanced structural steel framework. Delivered comprehensive detailing and design services.',
    image: 'https://img.freepik.com/premium-photo/modern-business-office-building_1127-20327.jpg',
    images: [],
    services: ['Structural Steel Design', 'Steel Detailing', 'Connection Design', '3D Modeling'],
    stats: { area: '500,000 sq ft', steel: '8,500 tons', duration: '18 months' },
    highlights: ['LEED Gold Certified', 'Seismic-resistant design', 'Advanced BIM modeling', 'On-time delivery'],
  },
  {
    id: 2,
    title: 'Manufacturing Plant',
    category: 'industrial',
    location: 'Texas, USA',
    year: '2023',
    description: 'Large-scale manufacturing facility with heavy-duty steel structures. Provided complete engineering and detailing services.',
    image: 'https://tbm-corp.com/wp-content/uploads/2020/04/manufacturing-plant.jpg',
    images: [],
    services: ['Steel Detailing', 'Fabrication Support', 'MTO Estimation', 'Shop Drawings'],
    stats: { area: '750,000 sq ft', steel: '12,000 tons', duration: '24 months' },
    highlights: ['Heavy-duty structures', 'Fabrication-ready drawings', 'Cost optimization', 'Quality assurance'],
  },
  {
    id: 3,
    title: 'Highway Bridge Project',
    category: 'infrastructure',
    location: 'California, USA',
    year: '2022',
    description: 'Major highway bridge with complex steel truss system. Delivered detailed engineering and connection design.',
    image: 'https://creativedesignresolutions.com/wp-content/uploads/2016/04/CDR-1395-540x360.jpg',
    images: [],
    services: ['Structural Design', 'Connection Design', 'Steel Detailing', 'BIM Services'],
    stats: { span: '450 meters', steel: '6,200 tons', duration: '20 months' },
    highlights: ['Complex truss system', 'Code-compliant design', 'Detailed documentation', 'Successful completion'],
  },
  {
    id: 4,
    title: 'Luxury Residential Tower',
    category: 'residential',
    location: 'Miami, USA',
    year: '2024',
    description: 'Premium residential high-rise with innovative steel frame design. Provided comprehensive structural engineering services.',
    image: 'https://images.squarespace-cdn.com/content/v1/6321a8468450453e98507255/1664460548187-FK10P88WOGNX157QYZ5D/v3---Private-Luxury-Residential-Tower%2C-Kolkata.jpg',
    images: [],
    services: ['Steel Frame Design', '3D Modeling', 'Steel Detailing', 'Estimation'],
    stats: { floors: '35 stories', steel: '4,800 tons', duration: '16 months' },
    highlights: ['Innovative design', 'Premium quality', 'BIM integration', 'Client satisfaction'],
  },
  {
    id: 5,
    title: 'Shopping Mall Complex',
    category: 'commercial',
    location: 'Chicago, USA',
    year: '2023',
    description: 'Large shopping mall with expansive steel structures. Delivered complete detailing and design services.',
    image: 'https://cdnb.artstation.com/p/assets/images/images/023/283/189/large/deepak-satokiya-shoppingview-a.jpg?1578687346',
    images: [],
    services: ['Structural Design', 'Steel Detailing', 'Shop Drawings', 'MTO'],
    stats: { area: '600,000 sq ft', steel: '9,500 tons', duration: '22 months' },
    highlights: ['Large span structures', 'Efficient design', 'Timely delivery', 'Quality excellence'],
  },
  {
    id: 6,
    title: 'Warehouse Facility',
    category: 'industrial',
    location: 'Atlanta, USA',
    year: '2024',
    description: 'Massive warehouse facility with pre-engineered building systems. Provided PEB design and detailing services.',
    image: 'https://bauerpainting.com/wp-content/uploads/2024/02/b99acd00thumbnail.jpeg',
    images: [],
    services: ['PEB Design', 'Steel Detailing', 'Fabrication Support', 'Estimation'],
    stats: { area: '1,200,000 sq ft', steel: '15,000 tons', duration: '28 months' },
    highlights: ['PEB systems', 'Cost-effective solution', 'Rapid construction', 'Quality deliverables'],
  },
  {
    id: 7,
    title: 'Sports Stadium',
    category: 'infrastructure',
    location: 'Dallas, USA',
    year: '2022',
    description: 'Iconic sports stadium with complex steel roof structure. Delivered advanced engineering and detailing services.',
    image: 'https://tse3.mm.bing.net/th/id/OIP.-etEbllW6uYvdEOaJzE-xwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
    images: [],
    services: ['Structural Design', 'Connection Design', '3D Modeling', 'Steel Detailing'],
    stats: { capacity: '80,000 seats', steel: '18,000 tons', duration: '30 months' },
    highlights: ['Complex roof structure', 'Advanced engineering', 'BIM implementation', 'Iconic design'],
  },
  {
    id: 8,
    title: 'Mixed-Use Development',
    category: 'commercial',
    location: 'Seattle, USA',
    year: '2024',
    description: 'Modern mixed-use development combining residential and commercial spaces. Provided comprehensive steel engineering services.',
    image: 'https://th.bing.com/th/id/R.9e9c8eb23752798270f74c617826bb01?rik=aOauzgBTnUCNtQ&riu=http%3a%2f%2fwww.ppcc.com.kh%2fppcc_prime%2fwp-content%2fuploads%2ftheedge-ppcc-05.jpg&ehk=bj2fktWVuNMLKs3dm66oFN0JVL1PDscP66fMB%2b3Nbdg%3d&risl=&pid=ImgRaw&r=0',
    images: [],
    services: ['Steel Frame Design', 'Steel Detailing', 'BIM Services', 'Estimation'],
    stats: { area: '850,000 sq ft', steel: '11,500 tons', duration: '26 months' },
    highlights: ['Mixed-use design', 'Sustainable solutions', 'Comprehensive services', 'Project success'],
  },
];

export default function AdminDashboard() {
  const [projects, setProjects] = useState<Project[]>(defaultProjects);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editedProject, setEditedProject] = useState<Project | null>(null);
  const [isNewProject, setIsNewProject] = useState<boolean>(false);
  const navigate = useNavigate();
  const { theme } = useTheme();
  const isLight = theme === 'light';

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate('/admin/login');
      return;
    }

    const loadProjects = async () => {
      try {
        const apiProjects = await projectsService.getAll();
        if (apiProjects && apiProjects.length > 0) {
          const projectsWithImages = apiProjects.map(p => ({
            ...p,
            images: p.images || []
          }));
          setProjects(projectsWithImages);
        } else {
          console.log('Database empty, seeding with default projects...');
          const success = await projectsService.seedDatabase();
          if (success) {
            const seededProjects = await projectsService.getAll();
            const projectsWithImages = seededProjects.map(p => ({
              ...p,
              images: p.images || []
            }));
            setProjects(projectsWithImages);
          } else {
            setProjects(defaultProjects);
          }
        }
      } catch (error) {
        console.error('Error loading projects:', error);
        setProjects(defaultProjects);
      }
    };

    loadProjects();
  }, [navigate]);


  const handleAdd = () => {
    const newProject: Project = {
      id: Date.now(),
      title: 'New Project',
      category: 'commercial',
      location: 'Location',
      year: new Date().getFullYear().toString(),
      description: 'Project description',
      image: 'https://via.placeholder.com/800x600',
      images: [],
      services: ['Service 1'],
      stats: { area: '0 sq ft', steel: '0 tons', duration: '0 months' },
      highlights: ['Highlight 1'],
    };
    setIsNewProject(true);
    setEditingId(newProject.id);
    setEditedProject({ ...newProject });
  };

  const handleEdit = (project: Project) => {
    setIsNewProject(false);
    setEditingId(project.id);
    setEditedProject({ ...project, images: project.images || [] });
    setNewImageUrl('');
  };

  const handleSave = async () => {
    if (!editedProject) return;

    try {
      if (isNewProject) {
        const { id: _id, ...projectData } = editedProject;
        const created = await projectsService.create(projectData);
        if (created) {
          const refreshedProjects = await projectsService.getAll();
          setProjects(refreshedProjects);
        }
      } else {
        const updated = await projectsService.update(editedProject.id, editedProject);
        if (updated) {
          const refreshedProjects = await projectsService.getAll();
          setProjects(refreshedProjects);
        }
      }
      setEditingId(null);
      setEditedProject(null);
      setIsNewProject(false);
    } catch (error) {
      console.error('Error saving project:', error);
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditedProject(null);
    setIsNewProject(false);
    setNewImageUrl('');
  };

  const handleDelete = async (id: number) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      try {
        const success = await projectsService.delete(id);
        if (success) {
          const refreshedProjects = await projectsService.getAll();
          setProjects(refreshedProjects);
        }
      } catch (error) {
        console.error('Error deleting project:', error);
      }
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const handleResetToDefaults = async () => {
    if (window.confirm('Are you sure you want to reset all projects to defaults? This will replace all current projects with the 8 default projects.')) {
      try {
        for (const project of projects) {
          await projectsService.delete(project.id);
        }
        for (const project of defaultProjects) {
          const { id: _id, ...projectData } = project;
          await projectsService.create(projectData);
        }
        const refreshedProjects = await projectsService.getAll();
        setProjects(refreshedProjects);
        setEditingId(null);
        setEditedProject(null);
      } catch (error) {
        console.error('Error resetting to defaults:', error);
      }
    }
  };

  const updateField = (field: keyof Project, value: any) => {
    if (!editedProject) return;
    setEditedProject({ ...editedProject, [field]: value });
  };

  const updateService = (index: number, value: string) => {
    if (!editedProject) return;
    const newServices = [...editedProject.services];
    newServices[index] = value;
    setEditedProject({ ...editedProject, services: newServices });
  };

  const addService = () => {
    if (!editedProject) return;
    setEditedProject({ ...editedProject, services: [...editedProject.services, 'New Service'] });
  };

  const removeService = (index: number) => {
    if (!editedProject) return;
    const newServices = editedProject.services.filter((_, i) => i !== index);
    setEditedProject({ ...editedProject, services: newServices });
  };

  const updateHighlight = (index: number, value: string) => {
    if (!editedProject) return;
    const newHighlights = [...editedProject.highlights];
    newHighlights[index] = value;
    setEditedProject({ ...editedProject, highlights: newHighlights });
  };

  const addHighlight = () => {
    if (!editedProject) return;
    setEditedProject({ ...editedProject, highlights: [...editedProject.highlights, 'New Highlight'] });
  };

  const removeHighlight = (index: number) => {
    if (!editedProject) return;
    const newHighlights = editedProject.highlights.filter((_, i) => i !== index);
    setEditedProject({ ...editedProject, highlights: newHighlights });
  };

  const updateStat = (key: string, value: string) => {
    if (!editedProject) return;
    setEditedProject({ ...editedProject, stats: { ...editedProject.stats, [key]: value } });
  };

  const addImage = (url: string) => {
    if (!editedProject || !url.trim()) return;
    const currentImages = editedProject.images || [];
    setEditedProject({ ...editedProject, images: [...currentImages, url.trim()] });
  };

  const removeImage = (index: number) => {
    if (!editedProject) return;
    const currentImages = editedProject.images || [];
    const newImages = currentImages.filter((_, i) => i !== index);
    setEditedProject({ ...editedProject, images: newImages });
  };

  const moveImageUp = (index: number) => {
    if (!editedProject || index === 0) return;
    const currentImages = [...(editedProject.images || [])];
    [currentImages[index - 1], currentImages[index]] = [currentImages[index], currentImages[index - 1]];
    setEditedProject({ ...editedProject, images: currentImages });
  };

  const moveImageDown = (index: number) => {
    if (!editedProject) return;
    const currentImages = [...(editedProject.images || [])];
    if (index >= currentImages.length - 1) return;
    [currentImages[index], currentImages[index + 1]] = [currentImages[index + 1], currentImages[index]];
    setEditedProject({ ...editedProject, images: currentImages });
  };

  const [newImageUrl, setNewImageUrl] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  const handleImageUpload = async (file: File, target: 'main' | 'gallery') => {
    setIsUploading(true);
    try {
      const formData = new FormData();
      formData.append('image', file);
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) {
        const err = await response.json();
        alert(err.error || 'Upload failed');
        return;
      }
      const data = await response.json();
      if (target === 'main') {
        updateField('image', data.url);
      } else {
        addImage(data.url);
      }
    } catch (error) {
      console.error('Upload error:', error);
      alert('Failed to upload image. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  const renderEditForm = () => {
    if (!editedProject) return null;
    const project = editedProject; // TypeScript helper

    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className={`block text-sm font-semibold ${isLight ? 'text-gray-900' : 'text-white'} mb-2 transition-colors duration-300`}>
              Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={project.title}
              onChange={(e) => updateField('title', e.target.value)}
              className={`w-full px-4 py-2 rounded-lg border-2 ${isLight ? 'border-gray-300 bg-white text-gray-900' : 'border-dark-border bg-dark-bg-tertiary text-white'} focus:border-brand-red focus:outline-none transition-all`}
              placeholder="Enter project title"
            />
          </div>
          <div>
            <label className={`block text-sm font-semibold ${isLight ? 'text-gray-900' : 'text-white'} mb-2 transition-colors duration-300`}>
              Category <span className="text-red-500">*</span>
            </label>
            <select
              value={project.category}
              onChange={(e) => updateField('category', e.target.value)}
              className={`w-full px-4 py-2 rounded-lg border-2 ${isLight ? 'border-gray-300 bg-white text-gray-900' : 'border-dark-border bg-dark-bg-tertiary text-white'} focus:border-brand-red focus:outline-none transition-all`}
            >
              <option value="commercial">Commercial</option>
              <option value="industrial">Industrial</option>
              <option value="infrastructure">Infrastructure</option>
              <option value="residential">Residential</option>
            </select>
          </div>
          <div>
            <label className={`block text-sm font-semibold ${isLight ? 'text-gray-900' : 'text-white'} mb-2 transition-colors duration-300`}>
              Location <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={project.location}
              onChange={(e) => updateField('location', e.target.value)}
              className={`w-full px-4 py-2 rounded-lg border-2 ${isLight ? 'border-gray-300 bg-white text-gray-900' : 'border-dark-border bg-dark-bg-tertiary text-white'} focus:border-brand-red focus:outline-none transition-all`}
              placeholder="e.g., New York, USA"
            />
          </div>
          <div>
            <label className={`block text-sm font-semibold ${isLight ? 'text-gray-900' : 'text-white'} mb-2 transition-colors duration-300`}>
              Year <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={project.year}
              onChange={(e) => updateField('year', e.target.value)}
              className={`w-full px-4 py-2 rounded-lg border-2 ${isLight ? 'border-gray-300 bg-white text-gray-900' : 'border-dark-border bg-dark-bg-tertiary text-white'} focus:border-brand-red focus:outline-none transition-all`}
              placeholder="e.g., 2024"
            />
          </div>
        </div>

        <div>
          <label className={`block text-sm font-semibold ${isLight ? 'text-gray-900' : 'text-white'} mb-2 transition-colors duration-300`}>
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            value={project.description}
            onChange={(e) => updateField('description', e.target.value)}
            rows={4}
            className={`w-full px-4 py-2 rounded-lg border-2 ${isLight ? 'border-gray-300 bg-white text-gray-900' : 'border-dark-border bg-dark-bg-tertiary text-white'} focus:border-brand-red focus:outline-none transition-all resize-none`}
            placeholder="Enter project description"
          />
        </div>

        <div>
          <label className={`block text-sm font-semibold ${isLight ? 'text-gray-900' : 'text-white'} mb-2 transition-colors duration-300`}>
            Main Image <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center gap-2">
            <ImageIcon size={20} className={isLight ? 'text-gray-500' : 'text-dark-text-tertiary'} />
            <input
              type="url"
              value={project.image}
              onChange={(e) => updateField('image', e.target.value)}
              className={`flex-1 px-4 py-2 rounded-lg border-2 ${isLight ? 'border-gray-300 bg-white text-gray-900' : 'border-dark-border bg-dark-bg-tertiary text-white'} focus:border-brand-red focus:outline-none transition-all`}
              placeholder="https://example.com/image.jpg"
              data-testid="input-main-image-url"
            />
            <label
              className={`px-4 py-2 rounded-lg cursor-pointer transition-colors duration-300 flex items-center gap-2 ${isUploading ? 'bg-gray-400 cursor-not-allowed' : 'bg-brand-red hover:bg-red-700'} text-white`}
              data-testid="button-upload-main-image"
            >
              <Upload size={16} />
              {isUploading ? 'Uploading...' : 'Upload'}
              <input
                type="file"
                accept="image/jpeg,image/jpg,image/png,image/gif,image/webp,image/svg+xml"
                className="hidden"
                disabled={isUploading}
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) handleImageUpload(file, 'main');
                  e.target.value = '';
                }}
              />
            </label>
          </div>
          {project.image && project.image !== 'https://via.placeholder.com/800x600' && (
            <img src={project.image} alt="Preview" className="mt-2 w-full h-48 object-cover rounded-lg border-2" />
          )}
        </div>

        <div>
          <label className={`block text-sm font-semibold ${isLight ? 'text-gray-900' : 'text-white'} mb-2 transition-colors duration-300`}>
            <div className="flex items-center gap-2">
              <Images size={20} />
              Project Gallery (Additional Images)
            </div>
          </label>
          <p className={`text-sm ${isLight ? 'text-gray-600' : 'text-dark-text-secondary'} mb-3`}>
            Add multiple photos to showcase your project. Use the arrows to reorder.
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            <input
              type="url"
              value={newImageUrl}
              onChange={(e) => setNewImageUrl(e.target.value)}
              className={`flex-1 min-w-0 px-4 py-2 rounded-lg border-2 ${isLight ? 'border-gray-300 bg-white text-gray-900' : 'border-dark-border bg-dark-bg-tertiary text-white'} focus:border-brand-red focus:outline-none transition-all`}
              placeholder="https://example.com/gallery-image.jpg"
              data-testid="input-gallery-url"
            />
            <button
              type="button"
              onClick={() => {
                addImage(newImageUrl);
                setNewImageUrl('');
              }}
              className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-300 flex items-center gap-2"
              data-testid="button-add-gallery-image"
            >
              <Plus size={16} />
              Add URL
            </button>
            <label
              className={`px-4 py-2 rounded-lg cursor-pointer transition-colors duration-300 flex items-center gap-2 ${isUploading ? 'bg-gray-400 cursor-not-allowed' : 'bg-brand-red hover:bg-red-700'} text-white`}
              data-testid="button-upload-gallery-image"
            >
              <Upload size={16} />
              {isUploading ? 'Uploading...' : 'Upload'}
              <input
                type="file"
                accept="image/jpeg,image/jpg,image/png,image/gif,image/webp,image/svg+xml"
                className="hidden"
                disabled={isUploading}
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) handleImageUpload(file, 'gallery');
                  e.target.value = '';
                }}
              />
            </label>
          </div>

          {(project.images || []).length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {(project.images || []).map((img, idx) => (
                <div key={idx} className={`relative rounded-lg overflow-hidden border-2 ${isLight ? 'border-gray-300' : 'border-dark-border'}`}>
                  <img 
                    src={img} 
                    alt={`Gallery ${idx + 1}`} 
                    className="w-full h-32 object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x300?text=Image+Error';
                    }}
                  />
                  <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    #{idx + 1}
                  </div>
                  <div className="absolute top-2 right-2 flex gap-1">
                    <button
                      type="button"
                      onClick={() => moveImageUp(idx)}
                      disabled={idx === 0}
                      className={`p-1 rounded ${idx === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'} text-white transition-colors`}
                      title="Move up"
                      data-testid={`button-move-up-${idx}`}
                    >
                      <ChevronUp size={14} />
                    </button>
                    <button
                      type="button"
                      onClick={() => moveImageDown(idx)}
                      disabled={idx === (project.images || []).length - 1}
                      className={`p-1 rounded ${idx === (project.images || []).length - 1 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'} text-white transition-colors`}
                      title="Move down"
                      data-testid={`button-move-down-${idx}`}
                    >
                      <ChevronDown size={14} />
                    </button>
                    <button
                      type="button"
                      onClick={() => removeImage(idx)}
                      className="p-1 bg-red-600 hover:bg-red-700 text-white rounded transition-colors"
                      title="Remove image"
                      data-testid={`button-remove-image-${idx}`}
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className={`text-center py-8 rounded-lg border-2 border-dashed ${isLight ? 'border-gray-300 text-gray-500' : 'border-dark-border text-dark-text-tertiary'}`}>
              <Images size={40} className="mx-auto mb-2 opacity-50" />
              <p>No gallery images yet. Add images above to create a project gallery.</p>
            </div>
          )}
        </div>

        <div>
          <label className={`block text-sm font-semibold ${isLight ? 'text-gray-900' : 'text-white'} mb-2 transition-colors duration-300`}>
            Services
          </label>
          <div className="space-y-2">
            {project.services.map((service, idx) => (
              <div key={idx} className="flex gap-2">
                <input
                  type="text"
                  value={service}
                  onChange={(e) => updateService(idx, e.target.value)}
                  className={`flex-1 px-4 py-2 rounded-lg border-2 ${isLight ? 'border-gray-300 bg-white text-gray-900' : 'border-dark-border bg-dark-bg-tertiary text-white'} focus:border-brand-red focus:outline-none transition-all`}
                  placeholder="Service name"
                />
                <button
                  type="button"
                  onClick={() => removeService(idx)}
                  className="px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-300"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addService}
              className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors duration-300 text-sm"
            >
              + Add Service
            </button>
          </div>
        </div>

        <div>
          <label className={`block text-sm font-semibold ${isLight ? 'text-gray-900' : 'text-white'} mb-2 transition-colors duration-300`}>
            Stats (Key: Value format)
          </label>
          <div className="space-y-2">
            {Object.entries(project.stats).map(([key, value]) => (
              <div key={key} className="flex gap-2">
                <input
                  type="text"
                  value={key}
                  onChange={(e) => {
                    if (!editedProject) return;
                    const newStats = { ...editedProject.stats };
                    delete newStats[key];
                    newStats[e.target.value] = value;
                    setEditedProject({ ...editedProject, stats: newStats });
                  }}
                  className={`w-32 px-4 py-2 rounded-lg border-2 ${isLight ? 'border-gray-300 bg-white text-gray-900' : 'border-dark-border bg-dark-bg-tertiary text-white'} focus:border-brand-red focus:outline-none transition-all`}
                  placeholder="Key"
                />
                <input
                  type="text"
                  value={value}
                  onChange={(e) => updateStat(key, e.target.value)}
                  className={`flex-1 px-4 py-2 rounded-lg border-2 ${isLight ? 'border-gray-300 bg-white text-gray-900' : 'border-dark-border bg-dark-bg-tertiary text-white'} focus:border-brand-red focus:outline-none transition-all`}
                  placeholder="Value"
                />
              </div>
            ))}
            <button
              type="button"
              onClick={() => {
                if (!editedProject) return;
                const newKey = `stat${Object.keys(editedProject.stats).length + 1}`;
                setEditedProject({ ...editedProject, stats: { ...editedProject.stats, [newKey]: '' } });
              }}
              className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors duration-300 text-sm"
            >
              + Add Stat
            </button>
          </div>
        </div>

        <div>
          <label className={`block text-sm font-semibold ${isLight ? 'text-gray-900' : 'text-white'} mb-2 transition-colors duration-300`}>
            Highlights
          </label>
          <div className="space-y-2">
            {project.highlights.map((highlight, idx) => (
              <div key={idx} className="flex gap-2">
                <input
                  type="text"
                  value={highlight}
                  onChange={(e) => updateHighlight(idx, e.target.value)}
                  className={`flex-1 px-4 py-2 rounded-lg border-2 ${isLight ? 'border-gray-300 bg-white text-gray-900' : 'border-dark-border bg-dark-bg-tertiary text-white'} focus:border-brand-red focus:outline-none transition-all`}
                  placeholder="Highlight text"
                />
                <button
                  type="button"
                  onClick={() => removeHighlight(idx)}
                  className="px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-300"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addHighlight}
              className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors duration-300 text-sm"
            >
              + Add Highlight
            </button>
          </div>
        </div>

        <div className="flex gap-4 pt-4 border-t-2">
          <button
            onClick={handleSave}
            className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-300"
          >
            <Save size={20} />
            Save Project
          </button>
          <button
            onClick={handleCancel}
            className="flex items-center gap-2 px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg transition-colors duration-300"
          >
            <X size={20} />
            Cancel
          </button>
        </div>
      </div>
    );
  };

  if (!isAuthenticated()) {
    return null;
  }

  return (
    <main className={`min-h-screen ${isLight ? 'bg-gray-50' : 'bg-dark-bg'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className={`${isLight ? 'bg-white border-gray-300' : 'bg-dark-bg-card border-dark-border'} p-6 rounded-xl border-2 mb-6 transition-colors duration-300`}>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className={`text-3xl font-bold ${isLight ? 'text-gray-900' : 'text-white'} mb-2 transition-colors duration-300`}>
                Admin Dashboard
              </h1>
              <p className={`${isLight ? 'text-gray-600' : 'text-dark-text-secondary'} transition-colors duration-300`}>
                Manage projects for the Projects page • Total Projects: <span className="font-bold text-brand-red">{projects.length}</span>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={handleResetToDefaults}
                className="flex items-center gap-2 px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg transition-colors duration-300 text-sm"
                title="Reset to 8 default projects"
              >
                Reset to Defaults
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-300"
              >
                <LogOut size={20} />
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* Add Button */}
        <div className="mb-6 flex items-center justify-between">
          <button
            onClick={handleAdd}
            className="flex items-center gap-2 px-6 py-3 bg-brand-red hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-300"
          >
            <Plus size={20} />
            Add New Project
          </button>
          {editingId && (
            <p className={`text-sm ${isLight ? 'text-gray-600' : 'text-dark-text-secondary'} transition-colors duration-300`}>
              Currently editing a project
            </p>
          )}
        </div>

        {/* Projects List */}
        <div className="space-y-6">
          {/* Show new project form at top if adding new project */}
          {editingId && editedProject && !projects.find(p => p.id === editingId) && (
            <div className={`${isLight ? 'bg-white border-gray-300' : 'bg-dark-bg-card border-dark-border'} p-6 rounded-xl border-2 border-brand-red shadow-lg transition-colors duration-300`}>
              <div className="mb-4 pb-4 border-b-2">
                <h3 className={`text-2xl font-bold ${isLight ? 'text-gray-900' : 'text-white'} mb-2 transition-colors duration-300`}>
                  ✨ Adding New Project
                </h3>
                <p className={`text-sm ${isLight ? 'text-gray-600' : 'text-dark-text-secondary'} transition-colors duration-300`}>
                  Fill in all the details below and click "Save Project" to add this project to the list
                </p>
              </div>
              {renderEditForm()}
            </div>
          )}

          {projects.map((project) => (
            <div
              key={project.id}
              className={`${isLight ? 'bg-white border-gray-300' : 'bg-dark-bg-card border-dark-border'} p-6 rounded-xl border-2 transition-colors duration-300`}
            >
              {editingId === project.id && editedProject ? (
                /* Edit Form */
                <div>
                  <div className="mb-4 pb-4 border-b-2">
                    <h3 className={`text-xl font-bold ${isLight ? 'text-gray-900' : 'text-white'} transition-colors duration-300`}>
                      Editing: {project.title}
                    </h3>
                  </div>
                  {renderEditForm()}
                </div>
              ) : (
                /* View Mode */
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className={`text-2xl font-bold ${isLight ? 'text-gray-900' : 'text-white'} mb-2 transition-colors duration-300`}>
                        {project.title}
                      </h3>
                      <p className={`${isLight ? 'text-gray-600' : 'text-dark-text-secondary'} transition-colors duration-300`}>
                        {project.category} • {project.location} • {project.year}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit(project)}
                        className="px-4 py-2 bg-brand-red hover:bg-red-700 text-white rounded-lg transition-colors duration-300 flex items-center gap-2"
                      >
                        <Edit2 size={16} />
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(project.id)}
                        className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-300 flex items-center gap-2"
                      >
                        <Trash2 size={16} />
                        Delete
                      </button>
                    </div>
                  </div>
                  <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-lg mb-4" />
                  <p className={`${isLight ? 'text-gray-700' : 'text-dark-text-secondary'} mb-4 transition-colors duration-300`}>
                    {project.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {projects.length === 0 && (
          <div className={`${isLight ? 'bg-white border-gray-300' : 'bg-dark-bg-card border-dark-border'} p-12 rounded-xl border-2 text-center transition-colors duration-300`}>
            <p className={`${isLight ? 'text-gray-600' : 'text-dark-text-secondary'} transition-colors duration-300`}>
              No projects yet. Click "Add New Project" to get started.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
