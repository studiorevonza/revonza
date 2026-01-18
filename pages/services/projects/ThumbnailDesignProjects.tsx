import React from 'react';
import { Link } from 'react-router-dom';
import { Layers, Play, Eye, Heart, Share2, Camera, ExternalLink } from 'lucide-react';
import SEO from '../../../components/SEO';

const ThumbnailDesignProjects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'YouTube Channel Growth',
      description: 'Series of eye-catching thumbnails for tech review channel that increased CTR by 200%.',
      tech: ['Photoshop', 'Color Psychology', 'Typography'],
      timeline: '1 month',
      outcome: 'Gained 50K subscribers in 3 months',
      imageUrl: 'https://images.unsplash.com/photo-1541531455306-a1005f99df35?q=80&w=2670&auto=format&fit=crop',
      projectUrl: 'https://example-youtube-thumbs.com'
    },
    {
      id: 2,
      title: 'Educational Content Series',
      description: 'Consistent thumbnail style for educational content that improved watch time.',
      tech: ['Illustrator', 'Brand Consistency', 'Visual Hierarchy'],
      timeline: '2 weeks',
      outcome: 'Increased average watch time by 60%',
      imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2787&auto=format&fit=crop',
      projectUrl: 'https://example-education-thumbs.com'
    },
    {
      id: 3,
      title: 'Social Media Campaign',
      description: 'Multiple thumbnail variations for social media campaign with A/B testing.',
      tech: ['Canva Pro', 'A/B Testing', 'Platform Optimization'],
      timeline: '3 weeks',
      outcome: 'Campaign reached 2M views',
      imageUrl: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2788&auto=format&fit=crop',
      projectUrl: 'https://example-social-thumbs.com'
    },
    {
      id: 4,
      title: 'Podcast Promotion',
      description: 'Thumbnail design system for podcast series with consistent branding.',
      tech: ['Figma', 'Brand Guidelines', 'Typography'],
      timeline: '2 weeks',
      outcome: 'Increased podcast downloads by 150%',
      imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2787&auto=format&fit=crop',
      projectUrl: 'https://example-podcast-thumbs.com'
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 bg-revonza-base transition-colors duration-300">
      <SEO 
        pageSEO={{
          title: 'Thumbnail Design Projects | Revonza Studio',
          description: 'Browse our portfolio of successful thumbnail design projects. See how weve created high-impact thumbnails that boost engagement.',
          keywords: [
            'thumbnail design projects',
            'YouTube thumbnail portfolio',
            'thumbnail design examples',
            'clickbait thumbnail case studies',
            'thumbnail design showcase',
            'social media thumbnail projects'
          ],
          canonical: 'https://revonzastudio.com/services/thumbnail-design/projects',
          ogImage: 'https://revonzastudio.com/og-thumbnail-projects.jpg',
          ogType: 'website'
        }}
      />
      
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-revonza-accent/30 bg-revonza-accent/10 backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-xs font-bold text-revonza-accent uppercase tracking-widest">Project Showcase</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-revonza-text mb-6 tracking-tight">
            Thumbnail <span className="text-transparent bg-clip-text bg-gradient-to-r from-revonza-accent to-purple-400">Design</span> Projects
          </h1>
          <p className="text-xl text-revonza-textMuted max-w-3xl mx-auto font-light">
            Explore our portfolio of successful thumbnail design projects. Each project demonstrates our expertise in creating high-impact visuals that maximize click-through rates and engagement across platforms.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="glass-panel p-8 rounded-[2rem] border border-revonza-border hover:border-revonza-accent/50 transition-all duration-300 h-full"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-revonza-surface rounded-xl flex items-center justify-center text-revonza-accent">
                  <Camera size={24} />
                </div>
                <h3 className="text-2xl font-bold text-revonza-text">{project.title}</h3>
              </div>
              
              <div className="relative mb-6 rounded-xl overflow-hidden border border-revonza-border">
                <img 
                  src={project.imageUrl} 
                  alt={`${project.title} screenshot`} 
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://placehold.co/600x400/e2e8f0/64748b?text=Project+Image';
                  }}
                />
                <a 
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="flex items-center gap-2 text-white bg-revonza-accent/90 px-4 py-2 rounded-lg">
                    <ExternalLink size={16} />
                    <span className="font-bold">Visit Project</span>
                  </div>
                </a>
              </div>
              
              <p className="text-revonza-textMuted mb-6 text-lg">
                {project.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-revonza-surface/30 rounded-xl p-4">
                  <h4 className="font-bold text-revonza-text mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-revonza-accent/20 text-revonza-accent rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="bg-revonza-surface/30 rounded-xl p-4">
                  <h4 className="font-bold text-revonza-text mb-2">Timeline</h4>
                  <p className="text-revonza-textMuted">{project.timeline}</p>
                </div>
                
                <div className="bg-revonza-surface/30 rounded-xl p-4">
                  <h4 className="font-bold text-revonza-text mb-2">Outcome</h4>
                  <p className="text-revonza-textMuted">{project.outcome}</p>
                </div>
              </div>
              
              <a 
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-revonza-surface hover:bg-revonza-accent/10 rounded-xl text-revonza-text hover:text-revonza-accent font-bold transition-all border border-revonza-border hover:border-revonza-accent flex items-center justify-center gap-2"
              >
                Visit Project
                <ExternalLink size={16} />
              </a>
            </div>
          ))}
        </div>

        {/* Service Link */}
        <div className="text-center">
          <p className="text-xl text-revonza-textMuted mb-8">
            Interested in our thumbnail design services?
          </p>
          <Link to="/services/thumbnail-design" className="inline-block px-8 py-4 bg-revonza-accent text-white rounded-full font-bold hover:scale-105 transition-all shadow-[0_0_30px_rgba(139,92,246,0.5)]">
            Learn About Thumbnail Design
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThumbnailDesignProjects;