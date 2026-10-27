import type { Project } from '../data/projects'

interface ProjectPreviewProps {
    project: Project
}

export function ProjectPreview({ project }: ProjectPreviewProps) {
    switch (project.previewType) {
        case 'app':
            return <AppPreview project={project} />

        case 'architecture':
            return <ArchitecturePreview project={project} />

        case 'flow':
            return <FlowPreview project={project} />

        default:
            return <AppPreview project={project} />
    }
}

/* ------------------------------------------------------------------ */
/* Shared arrow icon                                                   */
/* ------------------------------------------------------------------ */

function DownArrow() {
    return (
        <div className="flex justify-center" aria-hidden="true">
            <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="text-border"
            >
                <path
                    d="M8 2v10M4 9l4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </div>
    )
}

/* ------------------------------------------------------------------ */
/* Journal Probe — App Preview                                         */
/* ------------------------------------------------------------------ */

function AppPreview({ project }: { project: Project }) {
    return (
        <div
            className="w-full aspect-[16/10] bg-surface-alt rounded-xl border border-border overflow-hidden relative"
            role="img"
           // aria-label={project.previewLabel}
        >
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-4 py-3 bg-surface border-b border-border">
                <div className="flex gap-1.5" aria-hidden="true">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-300" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-300" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-300" />
                </div>

                <div className="flex-1 mx-4">
                    <div
                        className="h-5 bg-surface-alt rounded-md max-w-xs mx-auto"
                        aria-hidden="true"
                    />
                </div>
            </div>

            {/* Journal Probe application mockup */}
            <div className="p-5 lg:p-6 space-y-4">
                {/* Top navigation */}
                <div className="flex items-center justify-between" aria-hidden="true">
                    <div className="flex items-center gap-2">
                        <div className="h-4 w-4 bg-accent/20 rounded" />
                        <div className="h-4 w-24 bg-border rounded" />
                    </div>

                    <div className="flex gap-3">
                        <div className="h-3 w-12 bg-border rounded" />
                        <div className="h-3 w-12 bg-border rounded" />
                        <div className="h-3 w-14 bg-accent/30 rounded" />
                        <div className="h-3 w-10 bg-border rounded" />
                    </div>
                </div>

                {/* Dashboard header */}
                <div className="flex items-center justify-between pt-1" aria-hidden="true">
                    <div className="space-y-1.5">
                        <div className="h-4 w-36 bg-border rounded" />
                        <div className="h-2.5 w-48 bg-surface rounded" />
                    </div>

                    <div className="h-7 w-28 bg-accent/20 rounded-md" />
                </div>

                {/* Dashboard + journal editor */}
                <div className="grid grid-cols-3 gap-4" aria-hidden="true">
                    {/* Recent activity / entries */}
                    <div className="space-y-3">
                        <div className="h-3 w-24 bg-border rounded" />

                        {[0, 1, 2].map((i) => (
                            <div
                                key={i}
                                className="h-14 bg-surface rounded-lg border border-border p-2.5"
                            >
                                <div className="h-2 w-2/3 bg-border rounded mb-1.5" />
                                <div className="h-2 w-full bg-surface-alt rounded mb-1" />
                                <div className="h-2 w-1/2 bg-surface-alt rounded" />
                            </div>
                        ))}

                        <div className="h-3 w-20 bg-accent/30 rounded" />
                    </div>

                    {/* Journal creation editor */}
                    <div className="col-span-2 space-y-3">
                        <div className="h-3 w-28 bg-border rounded" />

                        <div className="bg-surface rounded-lg border border-border p-3 space-y-2.5">
                            {/* Entry title */}
                            <div className="h-3.5 w-2/3 bg-border rounded" />

                            {/* Rich text content */}
                            <div className="h-2 w-full bg-surface-alt rounded" />
                            <div className="h-2 w-5/6 bg-surface-alt rounded" />
                            <div className="h-2 w-3/4 bg-surface-alt rounded" />

                            {/* Multimedia attachments */}
                            <div className="flex gap-2 pt-1">
                                <div className="h-6 w-16 bg-accent/20 rounded-md" />
                                <div className="h-6 w-16 bg-surface-alt rounded-md border border-border" />
                                <div className="h-6 w-16 bg-surface-alt rounded-md border border-border" />
                            </div>
                        </div>

                        {/* AI prompts and suggestions */}
                        <div className="bg-accent/10 border border-accent/20 rounded-lg p-3 space-y-2">
                            <div className="h-2.5 w-32 bg-accent/30 rounded" />
                            <div className="h-2 w-full bg-surface rounded" />
                            <div className="h-2 w-4/5 bg-surface rounded" />
                        </div>
                    </div>
                </div>

                {/* Search, filters, and AI insights */}
                <div className="grid grid-cols-3 gap-3 pt-1" aria-hidden="true">
                    {/* Search */}
                    <div className="h-12 bg-surface rounded-lg border border-border p-2.5">
                        <div className="h-2.5 w-1/2 bg-border rounded mb-2" />
                        <div className="h-2 w-full bg-surface-alt rounded" />
                    </div>

                    {/* Filters */}
                    <div className="h-12 bg-surface rounded-lg border border-border p-2.5">
                        <div className="h-2.5 w-1/2 bg-border rounded mb-2" />
                        <div className="flex gap-1.5">
                            <div className="h-2.5 w-10 bg-accent/20 rounded" />
                            <div className="h-2.5 w-10 bg-surface-alt rounded border border-border" />
                            <div className="h-2.5 w-10 bg-surface-alt rounded border border-border" />
                        </div>
                    </div>

                    {/* AI insights */}
                    <div className="h-12 bg-accent/10 rounded-lg border border-accent/20 p-2.5">
                        <div className="h-2.5 w-1/2 bg-accent/30 rounded mb-2" />
                        <div className="h-2 w-full bg-surface rounded" />
                    </div>
                </div>
            </div>
        </div>
    )
}
/* ------------------------------------------------------------------ */
/* Post-Quantum Steganography — Architecture Preview                   */
/* ------------------------------------------------------------------ */

function ArchitecturePreview({ project }: { project: Project }) {
    return (
        <div
            className="w-full aspect-[16/10] bg-surface-alt rounded-xl border border-border overflow-hidden p-6 lg:p-8 relative"
            role="img"
            //aria-label={project.previewLabel}
        >
            <div className="h-full flex flex-col justify-between">
                {/* Title */}
                <p
                    className="text-[10px] font-mono text-muted uppercase tracking-widest mb-4"
                    aria-hidden="true"
                >
                    Hybrid Security Architecture
                </p>

                <div className="flex-1 flex items-center justify-center">
                    <div className="w-full max-w-sm space-y-3">
                        {/* Multimedia input */}
                        <div className="bg-surface border border-border rounded-lg px-4 py-2.5 text-center">
                            <p className="text-[11px] font-mono font-medium text-fg">
                                Multimedia Input
                            </p>
                            <p className="text-[9px] text-muted mt-0.5">
                                Text · Image · Audio / Spectrogram
                            </p>
                        </div>

                        <DownArrow />

                        {/* Key establishment */}
                        <div className="bg-accent/10 border border-accent/20 rounded-lg px-4 py-2.5 text-center">
                            <p className="text-[11px] font-mono font-medium text-accent">
                                Post-Quantum Key Establishment
                            </p>
                            <p className="text-[9px] text-muted mt-0.5">McEliece KEM</p>
                        </div>

                        <DownArrow />

                        {/* Encryption */}
                        <div className="bg-surface border border-border rounded-lg px-4 py-2.5 text-center">
                            <p className="text-[11px] font-mono font-medium text-fg">
                                Symmetric Encryption
                            </p>
                            <p className="text-[9px] text-muted mt-0.5">Adaptive RC6</p>
                        </div>

                        <DownArrow />

                        {/* Steganography */}
                        <div className="bg-surface border border-border rounded-lg px-4 py-2.5 text-center">
                            <p className="text-[11px] font-mono font-medium text-fg">
                                Covert Data Embedding
                            </p>
                            <p className="text-[9px] text-muted mt-0.5">
                                DCT–IDCT · O-Pattern LSB
                            </p>
                        </div>

                        <DownArrow />

                        {/* Receiver */}
                        <div className="bg-accent/10 border border-accent/20 rounded-lg px-4 py-2.5 text-center">
                            <p className="text-[11px] font-mono font-medium text-accent">
                                Extraction & Recovery
                            </p>
                            <p className="text-[9px] text-muted mt-0.5">
                                Decapsulation · Decryption · Reconstruction
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

/* ------------------------------------------------------------------ */
/* Kerberos — Authentication Flow Preview                              */
/* ------------------------------------------------------------------ */

function FlowPreview({ project }: { project: Project }) {
    return (
        <div
            className="w-full aspect-[16/10] bg-surface-alt rounded-xl border border-border overflow-hidden p-6 lg:p-8 relative"
            role="img"
            //aria-label={project.previewLabel}
        >
            <p
                className="text-[10px] font-mono text-muted uppercase tracking-widest mb-4"
                aria-hidden="true"
            >
                Kerberos Authentication Flow
            </p>

            <div className="h-[calc(100%-2rem)] flex items-center justify-center">
                <div className="w-full max-w-md">
                    {/* Actors */}
                    <div className="flex justify-between mb-6" aria-hidden="true">
                        <div className="text-center">
                            <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto">
                                <span className="text-[10px] font-mono font-medium text-accent">
                                    C
                                </span>
                            </div>
                            <p className="text-[9px] text-muted mt-1">Client</p>
                        </div>

                        <div className="text-center">
                            <div className="w-10 h-10 rounded-lg bg-surface border border-border flex items-center justify-center mx-auto">
                                <span className="text-[10px] font-mono font-medium text-fg">
                                    AS
                                </span>
                            </div>
                            <p className="text-[9px] text-muted mt-1">Auth Server</p>
                        </div>

                        <div className="text-center">
                            <div className="w-10 h-10 rounded-lg bg-surface border border-border flex items-center justify-center mx-auto">
                                <span className="text-[10px] font-mono font-medium text-fg">
                                    TGS
                                </span>
                            </div>
                            <p className="text-[9px] text-muted mt-1">Ticket Granting</p>
                        </div>

                        <div className="text-center">
                            <div className="w-10 h-10 rounded-lg bg-surface border border-border flex items-center justify-center mx-auto">
                                <span className="text-[10px] font-mono font-medium text-fg">
                                    S
                                </span>
                            </div>
                            <p className="text-[9px] text-muted mt-1">Service</p>
                        </div>
                    </div>

                    {/* Flow steps */}
                    <div className="space-y-2.5" aria-hidden="true">
                        <FlowStep
                            step="1"
                            label="Request TGT"
                            direction="right"
                        />

                        <FlowStep
                            step="2"
                            label="TGT + Session Key"
                            direction="left"
                        />

                        <FlowStep
                            step="3"
                            label="Service Ticket Request"
                            direction="right"
                        />

                        <FlowStep
                            step="4"
                            label="Service Ticket"
                            direction="left"
                        />

                        <FlowStep
                            step="5"
                            label="Access Protected Service"
                            direction="right"
                        />
                    </div>

                    {/* Attack testing note */}
                    <div className="mt-5 bg-surface border border-border rounded-lg px-3 py-2">
                        <p className="text-[9px] font-mono text-muted">
                            Security tests: Replay attack · Impersonation · Invalid token
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

/* ------------------------------------------------------------------ */
/* Kerberos flow step                                                  */
/* ------------------------------------------------------------------ */

function FlowStep({
    step,
    label,
    direction,
}: {
    step: string
    label: string
    direction: 'left' | 'right'
}) {
    return (
        <div className="flex items-center gap-2">
            <div className="w-16 text-right">
                <span className="text-[8px] font-mono text-muted">{step}</span>
            </div>

            <div className="flex-1 h-px bg-accent/30 relative">
                {direction === 'right' ? (
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-4 border-l-accent/30 border-y-2 border-y-transparent" />
                ) : (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-0 border-r-4 border-r-border border-y-2 border-y-transparent" />
                )}
            </div>

            <span className="text-[8px] font-mono text-muted w-28">{label}</span>
        </div>
    )
}