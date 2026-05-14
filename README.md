# Caliber Tech Solutions - Project Management Guide

## Admin Dashboard Access

To manage projects through the web interface:

1. Navigate to `/admin/login`
2. Enter credentials:
   - **Username:** `Caliber`
   - **Password:** `Project@edit#back`
3. You'll be redirected to the Admin Dashboard where you can add, edit, and delete projects

## API Endpoints

The backend provides REST API endpoints for programmatic project management:

### Get All Projects
```
GET /api/projects
```
Returns an array of all projects.

### Get Single Project
```
GET /api/projects/:id
```
Returns a single project by ID.

### Create Project
```
POST /api/projects
Content-Type: application/json

{
  "title": "Project Name",
  "category": "commercial",
  "location": "City, Country",
  "year": "2024",
  "description": "Project description text",
  "image": "https://example.com/image.jpg",
  "services": ["Steel Detailing", "3D Modeling"],
  "stats": {
    "area": "500,000 sq ft",
    "steel": "8,500 tons",
    "duration": "18 months"
  },
  "highlights": ["Feature 1", "Feature 2"]
}
```

### Update Project
```
PUT /api/projects/:id
Content-Type: application/json

{
  "title": "Updated Project Name",
  "category": "industrial",
  ...
}
```

### Delete Project
```
DELETE /api/projects/:id
```

### Seed Default Projects
```
POST /api/projects/seed
```
Populates the database with 8 sample structural steel projects.

## Project Categories

Valid categories for projects:
- `commercial` - Office buildings, shopping malls, mixed-use
- `industrial` - Manufacturing plants, warehouses
- `infrastructure` - Bridges, stadiums, public works
- `residential` - Residential towers, housing complexes

## Example: Adding a New Project via API

Using cURL:
```bash
curl -X POST https://your-domain.com/api/projects \
  -H "Content-Type: application/json" \
  -d '{
    "title": "New Steel Building",
    "category": "commercial",
    "location": "Houston, USA",
    "year": "2024",
    "description": "A modern commercial building with steel frame construction.",
    "image": "https://example.com/building.jpg",
    "services": ["Structural Design", "Steel Detailing"],
    "stats": {"area": "100,000 sq ft", "steel": "2,000 tons", "duration": "12 months"},
    "highlights": ["Energy efficient", "Modern design"]
  }'
```

## Database

The project uses PostgreSQL with Drizzle ORM. Projects are stored with the following fields:
- `id` - Auto-generated unique identifier
- `title` - Project name
- `category` - Project type (commercial/industrial/infrastructure/residential)
- `location` - Geographic location
- `year` - Completion year
- `description` - Detailed project description
- `image` - URL to project image
- `services` - Array of services provided
- `stats` - Object containing project statistics
- `highlights` - Array of project highlights/features
