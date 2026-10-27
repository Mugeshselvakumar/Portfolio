import { Link } from 'react-router-dom'
import { ArrowUpRight, Globe } from 'lucide-react'
import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'
import { ProjectPreview } from '../components/ProjectPreview'
import { projects } from '../data/projects'

export function Projects() {
    return (
        <Section id="work" label="Selected projects" className="py-24 lg:py-32">
            <div className="mx-auto max-w-6xl px-6">
                <SectionHeading
                    eyebrow="Selected Work"
                    title="Projects"
                    description="A selection of projects demonstrating full-stack development, security research, and authentication engineering."
                />

                <div className="space-y-20 lg:space-y-28">
                    {projects.map((project, index) => (
                        <article
                            key={project.id}
                            className="group"
                        >
                            <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? 'lg:direction-rtl' : ''}`}>
                                {/* Preview / Image */}
                                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                                    <Link
                                        to={`/project/${project.id}`}
                                        className="block rounded-xl overflow-hidden transition-transform duration-500 group-hover:scale-[1.02] border border-border bg-surface-alt"
                                        aria-label={`View ${project.title} project details`}
                                        tabIndex={-1}
                                    >
                                        {/* Only show image for journalprobe, use ProjectPreview for the rest */}
                                        {project.id === 'journalprobe' && project.imageUrl ? (
                                            <img
                                                src={project.imageUrl}
                                                alt={project.title}
                                                className="w-full h-auto object-cover aspect-video"
                                            />
                                        ) : (
                                            <ProjectPreview project={project} />
                                        )}
                                    </Link>
                                </div>

                                {/* Info */}
                                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-xs font-mono text-accent tracking-wide">
                                            {project.category}
                                        </span>
                                        <span className="text-xs text-muted">·</span>
                                        <span className="text-xs text-muted">{project.date}</span>
                                    </div>

                                    <h3 className="text-2xl md:text-3xl font-bold text-fg tracking-tight">
                                        {project.title}
                                    </h3>

                                    <p className="mt-4 text-muted leading-relaxed">
                                        {project.shortDescription}
                                    </p>

                                    <div className="mt-6 flex flex-wrap gap-2">
                                        {project.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 text-xs font-medium text-fg bg-surface-alt border border-border rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="mt-8 flex items-center gap-4">
                                        <Link
                                            to={`/project/${project.id}`}
                                            className="inline-flex items-center gap-2 text-sm font-medium text-fg hover:text-accent transition-colors group/link"
                                        >
                                            View Project Details
                                            <ArrowUpRight
                                                size={16}
                                                className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                                            />
                                        </Link>

                                        {/* Live Demo Link (Shows up if liveUrl is defined, e.g., Journal Probe) */}
                                        {project.liveUrl && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-fg bg-accent/10 hover:bg-accent/20 border border-accent/30 rounded-lg transition-colors"
                                            >
                                                <Globe size={16} />
                                                Live Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </Section>
    )
}