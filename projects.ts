import { ExternalLink } from "lucide-react";

export interface ProjectFeature {
    text: string;
}

export interface Project {
    id: string;
    title: string;
    category: string;
    date: string;
    shortDescription: string;
    technologies: string[];
    overview: string;
    problem: string;
    features: ProjectFeature[];
    engineeringNotes: string[];
    results?: string[];
    limitations?: string[];
    motivation?: string[];
    systemWorkflow?: string[];
    scope?: string[];
    imageUrl?: string;     // Added for project images
    liveUrl?: string;      // Added for live hosting link (e.g. Journal Probe)
    previewType: 'app' | 'architecture' | 'flow';
    previewLabel?: string;
}

export const projects: Project[] = [
    {
        id: 'journalprobe',
        title: 'Journal Probe',
        category: 'AI-Based Journal Content Generator — React Web Application',
        date: 'July 2025',
        shortDescription:
            'An AI-assisted journaling platform that helps users create, organize, and enhance journal entries through intelligent prompts, content suggestions, and bilingual support.',
        technologies: [
            'React',
            'JavaScript',
            'HTML',
            'CSS',
            'State Management',
            'Authentication',
            'Protected Routing',
            'AI Content Assistance',
        ],
        overview:
            'Journal Probe is a React-based web application designed to make journaling more accessible, creative, and personalized. It uses AI-driven prompts and content suggestions to help users overcome writer’s block, while providing organizational tools to categorize and manage journal entries effectively. The application supports both English and Tamil users and includes secure authentication with protected routes.',
        problem:
            'Traditional journaling can be difficult for users who face writer’s block, lack consistency, or struggle to organize their thoughts. Journal Probe addresses this by providing AI-assisted content generation, structured organization, and an accessible bilingual interface for both regular and occasional journal writers.',
        features: [
            { text: 'AI-based journal prompts and content suggestions to support creative writing' },
            { text: 'User authentication with protected route management' },
            { text: 'Journal entry creation, editing, and organization tools' },
            { text: 'Automatic categorization and tagging for easier journal retrieval' },
            { text: 'English and Tamil bilingual support' },
            { text: 'Responsive, component-driven interface across screen sizes' },
            { text: 'Support for multimedia journaling elements such as images, audio, and video' },
            { text: 'Client-side state management and structured error handling' },
        ],
        engineeringNotes: [
            'Built using a modular React component architecture with reusable UI components and clear separation of concerns.',
            'Authentication flow is integrated with protected routing to ensure secure access to journal content.',
            'AI prompt and suggestion features are designed to personalize the journaling experience and reduce writer’s block.',
            'Bilingual support is implemented as a cross-cutting concern across the application rather than added as a separate feature.',
            'Responsive layout and state management ensure a consistent journaling experience across devices.',
        ],
        imageUrl: '/images/journal-probe.png',          // Place your image in public/images/
        liveUrl: 'https://journal-probe.vercel.app/', // Replace with your actual deployed public URL
        previewType: 'app',
        
    },
    {
        id: 'pq-steganography',
        title: 'Hybrid Post-Quantum Cryptography–Steganography Framework',
        category: 'Security Research / Medical IoT / Multimedia Security',
        date: 'March 2026',
        shortDescription:
            'A multi-layered multimedia security framework combining McEliece post-quantum key encapsulation, adaptive RC6 encryption, DCT-based processing, and O-pattern LSB steganography to protect medical IoT text, image, and audio transmissions.',
        technologies: [
            'McEliece KEM',
            'RC6 Encryption',
            'DCT–IDCT Transformation',
            'O-Pattern LSB Steganography',
            'Spectrogram Conversion',
            'Medical IoT',
            'Raspberry Pi',
            'Key Management',
            'Multimedia Security',
        ],
        overview:
            'This research project implements a multi-layered security framework for protecting multimedia data transmitted in medical IoT environments. The system secures sensitive patient data, including text, images, and audio, by combining post-quantum key establishment, adaptive symmetric encryption, and covert steganographic embedding. Audio signals are converted into spectrogram images, enabling image-oriented encryption and steganography techniques to be applied consistently across multimedia formats. The framework is designed to reduce perceptual distortion, resist common multimedia attacks, and remain suitable for resource-constrained IoT devices.',
        problem:
            'Medical IoT systems continuously transmit confidential patient information such as diagnostic reports, medical images, audio recordings, and sensor-derived data across potentially insecure networks. Conventional encryption alone may not be sufficient against future quantum computing threats, while visibly encrypted multimedia payloads can attract adversarial attention. In addition, medical IoT devices often have limited processing power, memory, and bandwidth, making heavyweight security mechanisms impractical. The project addresses the need for a lightweight, layered, and future-ready security model that provides confidentiality, imperceptibility, integrity, and robustness for multimedia healthcare communication.',
        features: [
            { text: 'McEliece KEM for post-quantum secure key establishment and encapsulation' },
            { text: 'Adaptive RC6 symmetric encryption for protecting multimedia payloads' },
            { text: 'Audio-to-spectrogram conversion for unified image-based multimedia security' },
            { text: 'DCT–IDCT transformation for frequency-domain multimedia processing' },
            { text: 'O-Pattern LSB steganography for covert embedding of encrypted data' },
            { text: 'Protection of text, image, and audio transmissions within a single framework' },
            { text: 'Raspberry Pi-based multimedia acquisition and embedded processing support' },
            { text: 'Server-backed key management architecture for secure key distribution' },
            { text: 'Receiver-side key decapsulation, payload extraction, decryption, and reconstruction' },
            { text: 'Evaluation against noise, compression, and geometric attacks' },
        ],
        systemWorkflow: [
            'The sender acquires multimedia data such as text, medical images, or audio through an IoT-enabled device.',
            'Audio input is converted into a spectrogram image, allowing it to be processed using image-based security techniques.',
            'A shared secret key is established using the McEliece Key Encapsulation Mechanism.',
            'The multimedia payload is encrypted using adaptive RC6 encryption.',
            'DCT-based processing prepares the cover multimedia data for robust embedding.',
            'The encrypted payload is hidden inside the cover medium using O-Pattern LSB steganography.',
            'The stego file is transmitted through the network to the intended receiver.',
            'The receiver extracts the hidden payload, decapsulates the McEliece-derived key, decrypts the RC6-encrypted data, and reconstructs the original multimedia content.',
        ],
        engineeringNotes: [
            'The framework separates key establishment, encryption, compression/transformation, and steganographic embedding into distinct security layers.',
            'McEliece KEM is used for post-quantum key establishment, while RC6 provides efficient symmetric encryption for the actual multimedia payload.',
            'Audio is transformed into spectrogram images so that established image encryption and steganography methods can be applied uniformly.',
            'DCT-domain processing improves robustness compared with purely spatial-domain embedding approaches.',
            'O-Pattern LSB embedding is used to conceal encrypted data while minimizing visible distortion in the cover medium.',
            'The architecture considers medical IoT constraints such as limited device resources, bandwidth efficiency, and real-time processing requirements.',
            'The receiver pipeline includes secure decapsulation, extraction, decryption, decompression, and multimedia reconstruction.',
        ],
        results: [
            'Reported PSNR above 39 dB, indicating minimal perceptual distortion after steganographic embedding.',
            'Low MSE and high SSIM values demonstrate strong preservation of visual quality in stego images.',
            'The framework was evaluated under noise, compression, and geometric attack scenarios to assess robustness.',
            'The layered design demonstrates the feasibility of combining post-quantum cryptography, symmetric encryption, and steganography for secure multimedia transmission.',
        ],
        limitations: [
            'Clinical validation and real-world hospital deployment were not part of the project scope.',
            'Quantum-resistance claims are based on the theoretical security properties of the McEliece cryptosystem rather than a production-grade post-quantum deployment.',
            'Alternative post-quantum schemes, including lattice-based and hash-based signature systems, were not implemented or compared.',
            'The steganography implementation is limited to LSB-based embedding and does not include coverless or anonymity-focused steganography techniques.',
            'Alternative transform-domain approaches such as hybrid wavelet–SVD methods were reviewed but excluded from implementation.',
            'Hyperchaotic memristive encryption models and broader 6G-native communication resilience were outside the implementation boundary.',
        ],
        imageUrl: '/images/pq-steganography.png',
        previewType: 'architecture',
        
    },
    {
        id: 'kerberos-auth',
        title: 'Secure Authentication System Simulation',
        category: 'Python / Authentication Security / Network Security',
        date: 'August 2025',
        shortDescription:
            'An educational Python simulation of the Kerberos authentication protocol, demonstrating ticket-based authentication, encrypted ticket exchange, service access validation, and replay and impersonation attack scenarios.',
        technologies: [
            'Python',
            'Kerberos Protocol',
            'Authentication and Authorization',
            'Encryption',
            'Ticket-Based Access Control',
            'Session Management',
            'Security Testing',
            'Threat Simulation',
        ],
        overview:
            'The Secure Authentication System Simulation is an educational cybersecurity project that demonstrates how the Kerberos network authentication protocol enables users to authenticate securely and access authorized services without repeatedly transmitting their passwords. The simulation models the core Kerberos entities: the client, Authentication Server (AS), Ticket Granting Server (TGS), and application service. It demonstrates the issuance of a Ticket Granting Ticket (TGT), generation and validation of service tickets, encrypted authentication data exchange, and controlled access to protected resources. Security test scenarios explore replay attacks, impersonation attempts, and invalid authentication tokens to illustrate the importance of ticket validation, timestamps, authenticators, and secure protocol design.',
        problem:
            'Traditional authentication mechanisms can expose user credentials to interception, misuse, replay attacks, and unauthorized access when they are not designed securely. In many network environments, users need to access multiple services without sending their password repeatedly, which increases the risk of credential exposure. This project addresses the need to understand how a trusted third-party authentication protocol such as Kerberos reduces password transmission, issues time-limited tickets, validates service access, and protects authentication exchanges. It provides a controlled educational environment for analyzing authentication workflows and common security attacks.',
        motivation: [
            'Password-based authentication can expose credentials when users repeatedly send passwords to multiple services.',
            'Secure network environments require authentication mechanisms that verify user identity without repeatedly transmitting sensitive credentials.',
            'Kerberos demonstrates how trusted third parties can issue time-limited tickets for secure service access.',
            'Understanding replay attacks, impersonation attacks, and invalid-token handling is essential for designing secure authentication systems.',
            'Ticket-based access control helps separate initial authentication from repeated service authorization.',
            'The project provides a practical way to study authentication protocols, session management, encryption, and access validation in a controlled simulation.',
        ],
        features: [
            { text: 'Authentication Server (AS) workflow simulation for initial user authentication' },
            { text: 'Ticket Granting Server (TGS) simulation for requesting service-access tickets' },
            { text: 'Ticket Granting Ticket (TGT) issuance and management' },
            { text: 'Service-ticket generation and validation for controlled resource access' },
            { text: 'Encryption integration to demonstrate protection of authentication data' },
            { text: 'Authentication-token validation to reject invalid, expired, or improperly formatted tokens' },
            { text: 'Replay attack scenario testing to examine risks of reusing authentication messages' },
            { text: 'Impersonation attack scenario testing to examine unauthorized identity claims' },
            { text: 'Access-control checks to distinguish authenticated users from unauthorized requests' },
            { text: 'Session and ticket lifecycle demonstration for secure service access' },
            { text: 'Conceptual comparison of Kerberos with OAuth 2.0 and SAML-based authentication and authorization approaches' },
            { text: 'Documentation of the authentication workflow, security assumptions, and simulation limitations' },
        ],
        systemWorkflow: [
            'The client requests initial authentication from the Authentication Server (AS).',
            'The AS verifies the client credentials and issues a Ticket Granting Ticket (TGT) along with a client/TGS session key.',
            'The client stores the TGT locally and uses it to request access to a specific application service.',
            'The client sends the TGT and an authenticator to the Ticket Granting Server (TGS).',
            'The TGS validates the TGT and authenticator, then issues a service ticket for the requested application service.',
            'The client presents the service ticket and a new authenticator to the target application service.',
            'The application service validates the service ticket, checks the authenticator, and grants access if the request is valid.',
            'The simulation tests invalid tokens, replayed authentication messages, and impersonation attempts to demonstrate security validation mechanisms.',
        ],
        engineeringNotes: [
            'The simulation represents the main Kerberos entities: client, Authentication Server (AS), Ticket Granting Server (TGS), and application service.',
            'The modeled workflow progresses from obtaining a TGT to requesting a service ticket and presenting it to the target service.',
            'Ticket-based access control illustrates how authentication information can be used to request service access without transmitting the user password with every request.',
            'The project separates initial authentication, ticket issuance, service-ticket validation, and access-control decision-making into distinct workflow stages.',
            'Security testing explores invalid-token handling, replay attempts, and impersonation scenarios within the simulation.',
            'Encryption is included as an educational security concept; the specific algorithms, key-management implementation, and cryptographic parameters should be documented from the actual source code.',
            'The project emphasizes protocol workflow, authentication validation, session handling, and security analysis rather than a production-ready Kerberos deployment.',
        ],
        results: [
            'Demonstrated a complete Kerberos-style authentication flow from client login to authorized service access.',
            'Showed how a TGT can be used to obtain service tickets without repeatedly submitting the user password.',
            'Validated service-ticket-based access control for authorized users.',
            'Demonstrated rejection handling for invalid, expired, or improperly formatted authentication tokens.',
            'Simulated replay and impersonation attack scenarios to highlight the importance of authenticators, timestamps, and ticket validation.',
        ],
        scope: [
            'Focuses on educational simulation of the Kerberos authentication workflow.',
            'Includes client authentication, AS interaction, TGT issuance, TGS interaction, service-ticket generation, and service access validation.',
            'Demonstrates encrypted authentication exchanges and ticket-based access control.',
            'Includes security testing for replay attacks, impersonation attempts, and invalid authentication tokens.',
            'Provides a conceptual comparison between Kerberos, OAuth 2.0, and SAML.',
            'The implementation is intended for learning, demonstration, and security-workflow analysis rather than enterprise deployment.',
        ],
        limitations: [
            'This project is an educational simulation and is not a production authentication service or a complete implementation of the Kerberos protocol.',
            'The precise encryption algorithms, key derivation methods, and key-management mechanisms are not specified in the available project description.',
            'Replay-attack resistance depends on the implemented timestamp, nonce, authenticator, and ticket-validation logic; the presence of attack tests alone does not establish complete protection.',
            'The simulation does not establish compatibility with real Kerberos infrastructure, Active Directory, or enterprise identity providers.',
            'The comparison with OAuth 2.0 and SAML is conceptual unless corresponding integrations and tests are implemented.',
            'Real-world deployment would require secure key management, clock synchronization, certificate or realm configuration, auditing, and hardened cryptographic implementation.',
        ],
        imageUrl: '/images/kerberos-auth.png',
        previewType: 'flow',
       
    }
];