export interface Publication {
  title: string;
  authors: string[];
  venue: string;
  publisher: string;
  year: number;
  doi: string;
  doiUrl: string;
  description: string;
  contributionNote: string;
}

export const publication: Publication = {
  title:
    'A Hybrid Post-Quantum Secure Framework Integrating McEliece KEM, RC6 Encryption and Steganography for IoT Data Protection',
  authors: [
    'Suma Sira Jacob',
    'Manoj Shanmugam',
    'Keerthana Pandiyan',
    'Mugesh Selvakumar',
  ],
  venue:
    '2025 International Conference on Intelligent Innovations in Engineering and Technology (ICIIET)',
  publisher: 'IEEE',
  year: 2025,
  doi: '10.1109/ICIIET65921.2025.11378708',
  doiUrl: 'https://doi.org/10.1109/ICIIET65921.2025.11378708',
  description:
    'Co-authored conference publication presenting a multi-layered security framework that combines post-quantum key encapsulation, adaptive symmetric encryption, and steganographic data embedding for protecting medical IoT transmissions.',
  contributionNote: 'Co-authored conference publication',
};
