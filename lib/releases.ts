export interface Asset {
  name: string;
  url: string;
  size: string;
  sigUrl?: string;
}

export interface ReleaseChange {
  description: string;
  author: string;
  authorUrl: string;
  prNumber?: number;
  prUrl?: string;
}

export interface Release {
  version: string;
  tag: string;
  releaseDate: string;
  isLatest?: boolean;
  releaseUrl: string;
  compareUrl?: string;
  summary?: string;
  changes: ReleaseChange[];
  assets: Asset[];
  sourceZip: string;
  sourceTarGz: string;
}

const GITHUB_REPO = 'https://github.com/ElvinEga/NodaDB';

export const RELEASES: Release[] = [
  {
    version: '0.3.10',
    tag: 'v0.3.10',
    releaseDate: 'August 12, 2026',
    isLatest: true,
    releaseUrl: `${GITHUB_REPO}/releases/tag/v0.3.10`,
    compareUrl: `${GITHUB_REPO}/compare/v0.3.9...v0.3.10`,
    summary: 'CommandPalette component with enhanced keyboard shortcuts and version bump.',
    changes: [
      {
        description: 'Add CommandPalette component with enhanced keyboard shortcuts',
        author: 'ElvinEga',
        authorUrl: 'https://github.com/ElvinEga',
        prNumber: 40,
        prUrl: `${GITHUB_REPO}/pull/40`,
      },
      {
        description: 'Update package version to 0.3.10',
        author: 'ElvinEga',
        authorUrl: 'https://github.com/ElvinEga',
        prNumber: 41,
        prUrl: `${GITHUB_REPO}/pull/41`,
      },
    ],
    assets: [
      {
        name: 'latest.json',
        url: `${GITHUB_REPO}/releases/download/v0.3.10/latest.json`,
        size: '4.04 KB',
      },
      {
        name: 'NodaDB-0.3.10-1.x86_64.rpm',
        url: `${GITHUB_REPO}/releases/download/v0.3.10/NodaDB-0.3.10-1.x86_64.rpm`,
        size: '17.5 MB',
        sigUrl: `${GITHUB_REPO}/releases/download/v0.3.10/NodaDB-0.3.10-1.x86_64.rpm.sig`,
      },
      {
        name: 'NodaDB_0.3.10_amd64.AppImage',
        url: `${GITHUB_REPO}/releases/download/v0.3.10/NodaDB_0.3.10_amd64.AppImage`,
        size: '90 MB',
        sigUrl: `${GITHUB_REPO}/releases/download/v0.3.10/NodaDB_0.3.10_amd64.AppImage.sig`,
      },
      {
        name: 'NodaDB_0.3.10_amd64.deb',
        url: `${GITHUB_REPO}/releases/download/v0.3.10/NodaDB_0.3.10_amd64.deb`,
        size: '17.5 MB',
        sigUrl: `${GITHUB_REPO}/releases/download/v0.3.10/NodaDB_0.3.10_amd64.deb.sig`,
      },
      {
        name: 'NodaDB_0.3.10_x64-setup.exe',
        url: `${GITHUB_REPO}/releases/download/v0.3.10/NodaDB_0.3.10_x64-setup.exe`,
        size: '9.29 MB',
        sigUrl: `${GITHUB_REPO}/releases/download/v0.3.10/NodaDB_0.3.10_x64-setup.exe.sig`,
      },
      {
        name: 'NodaDB_0.3.10_x64_en-US.msi',
        url: `${GITHUB_REPO}/releases/download/v0.3.10/NodaDB_0.3.10_x64_en-US.msi`,
        size: '13 MB',
      },
    ],
    sourceZip: `${GITHUB_REPO}/archive/refs/tags/v0.3.10.zip`,
    sourceTarGz: `${GITHUB_REPO}/archive/refs/tags/v0.3.10.tar.gz`,
  },
  {
    version: '0.3.9',
    tag: 'v0.3.9',
    releaseDate: 'August 12, 2026',
    releaseUrl: `${GITHUB_REPO}/releases/tag/v0.3.9`,
    compareUrl: `${GITHUB_REPO}/compare/v0.3.8...v0.3.9`,
    summary: 'Fix primary key detection and Cargo lock update.',
    changes: [
      {
        description: 'Fix primary key detection and update Cargo.lock to 0.3.8',
        author: 'ElvinEga',
        authorUrl: 'https://github.com/ElvinEga',
        prNumber: 38,
        prUrl: `${GITHUB_REPO}/pull/38`,
      },
      {
        description: 'Update package version to 0.3.9',
        author: 'ElvinEga',
        authorUrl: 'https://github.com/ElvinEga',
        prNumber: 39,
        prUrl: `${GITHUB_REPO}/pull/39`,
      },
    ],
    assets: [
      {
        name: 'latest.json',
        url: `${GITHUB_REPO}/releases/download/v0.3.9/latest.json`,
        size: '4.02 KB',
      },
      {
        name: 'NodaDB-0.3.9-1.x86_64.rpm',
        url: `${GITHUB_REPO}/releases/download/v0.3.9/NodaDB-0.3.9-1.x86_64.rpm`,
        size: '17.5 MB',
        sigUrl: `${GITHUB_REPO}/releases/download/v0.3.9/NodaDB-0.3.9-1.x86_64.rpm.sig`,
      },
      {
        name: 'NodaDB_0.3.9_amd64.AppImage',
        url: `${GITHUB_REPO}/releases/download/v0.3.9/NodaDB_0.3.9_amd64.AppImage`,
        size: '90 MB',
        sigUrl: `${GITHUB_REPO}/releases/download/v0.3.9/NodaDB_0.3.9_amd64.AppImage.sig`,
      },
      {
        name: 'NodaDB_0.3.9_amd64.deb',
        url: `${GITHUB_REPO}/releases/download/v0.3.9/NodaDB_0.3.9_amd64.deb`,
        size: '17.5 MB',
        sigUrl: `${GITHUB_REPO}/releases/download/v0.3.9/NodaDB_0.3.9_amd64.deb.sig`,
      },
      {
        name: 'NodaDB_0.3.9_x64-setup.exe',
        url: `${GITHUB_REPO}/releases/download/v0.3.9/NodaDB_0.3.9_x64-setup.exe`,
        size: '9.3 MB',
        sigUrl: `${GITHUB_REPO}/releases/download/v0.3.9/NodaDB_0.3.9_x64-setup.exe.sig`,
      },
      {
        name: 'NodaDB_0.3.9_x64_en-US.msi',
        url: `${GITHUB_REPO}/releases/download/v0.3.9/NodaDB_0.3.9_x64_en-US.msi`,
        size: '13 MB',
        sigUrl: `${GITHUB_REPO}/releases/download/v0.3.9/NodaDB_0.3.9_x64_en-US.msi.sig`,
      },
    ],
    sourceZip: `${GITHUB_REPO}/archive/refs/tags/v0.3.9.zip`,
    sourceTarGz: `${GITHUB_REPO}/archive/refs/tags/v0.3.9.tar.gz`,
  },
  {
    version: '0.3.8',
    tag: 'v0.3.8',
    releaseDate: 'August 9, 2026',
    releaseUrl: `${GITHUB_REPO}/releases/tag/v0.3.8`,
    compareUrl: `${GITHUB_REPO}/compare/v0.3.7...v0.3.8`,
    summary: 'Major release featuring Neon, Supabase, MariaDB, MongoDB, ClickHouse, PlanetScale, Redis, and Cloudflare D1 drivers.',
    changes: [
      { description: 'Enhance theme support and refactor styling for UI', author: 'ElvinEga', authorUrl: 'https://github.com/ElvinEga', prNumber: 17, prUrl: `${GITHUB_REPO}/pull/17` },
      { description: 'Enhance font family options with system font support', author: 'ElvinEga', authorUrl: 'https://github.com/ElvinEga', prNumber: 18, prUrl: `${GITHUB_REPO}/pull/18` },
      { description: 'Enhance tooltip styling for table and keyboard descriptions', author: 'ElvinEga', authorUrl: 'https://github.com/ElvinEga', prNumber: 19, prUrl: `${GITHUB_REPO}/pull/19` },
      { description: 'Monochrome & Material themes + Monaco editor theme sync', author: 'ElvinEga', authorUrl: 'https://github.com/ElvinEga', prNumber: 21, prUrl: `${GITHUB_REPO}/pull/21` },
      { description: 'JSON preview modal, cell object editor fix & sidebar context menu', author: 'ElvinEga', authorUrl: 'https://github.com/ElvinEga', prNumber: 22, prUrl: `${GITHUB_REPO}/pull/22` },
      { description: 'Enhance Database Explorer with Visual Query Builder and UI updates', author: 'ElvinEga', authorUrl: 'https://github.com/ElvinEga', prNumber: 27, prUrl: `${GITHUB_REPO}/pull/27` },
      { description: 'Add Neon and Supabase support', author: 'ElvinEga', authorUrl: 'https://github.com/ElvinEga', prNumber: 32, prUrl: `${GITHUB_REPO}/pull/32` },
      { description: 'Add MariaDB support and authentication methods', author: 'ElvinEga', authorUrl: 'https://github.com/ElvinEga', prNumber: 33, prUrl: `${GITHUB_REPO}/pull/33` },
      { description: 'Add MongoDB support and related enhancements', author: 'ElvinEga', authorUrl: 'https://github.com/ElvinEga', prNumber: 34, prUrl: `${GITHUB_REPO}/pull/34` },
      { description: 'Add ClickHouse and PlanetScale support with icons and models', author: 'ElvinEga', authorUrl: 'https://github.com/ElvinEga', prNumber: 35, prUrl: `${GITHUB_REPO}/pull/35` },
      { description: 'Add Redis and Cloudflare D1 support to connection models', author: 'ElvinEga', authorUrl: 'https://github.com/ElvinEga', prNumber: 36, prUrl: `${GITHUB_REPO}/pull/36` },
    ],
    assets: [
      { name: 'latest.json', url: `${GITHUB_REPO}/releases/download/v0.3.8/latest.json`, size: '4.02 KB' },
      { name: 'NodaDB-0.3.8-1.x86_64.rpm', url: `${GITHUB_REPO}/releases/download/v0.3.8/NodaDB-0.3.8-1.x86_64.rpm`, size: '17.5 MB', sigUrl: `${GITHUB_REPO}/releases/download/v0.3.8/NodaDB-0.3.8-1.x86_64.rpm.sig` },
      { name: 'NodaDB_0.3.8_amd64.AppImage', url: `${GITHUB_REPO}/releases/download/v0.3.8/NodaDB_0.3.8_amd64.AppImage`, size: '90 MB', sigUrl: `${GITHUB_REPO}/releases/download/v0.3.8/NodaDB_0.3.8_amd64.AppImage.sig` },
      { name: 'NodaDB_0.3.8_amd64.deb', url: `${GITHUB_REPO}/releases/download/v0.3.8/NodaDB_0.3.8_amd64.deb`, size: '17.5 MB', sigUrl: `${GITHUB_REPO}/releases/download/v0.3.8/NodaDB_0.3.8_amd64.deb.sig` },
      { name: 'NodaDB_0.3.8_x64-setup.exe', url: `${GITHUB_REPO}/releases/download/v0.3.8/NodaDB_0.3.8_x64-setup.exe`, size: '9.29 MB', sigUrl: `${GITHUB_REPO}/releases/download/v0.3.8/NodaDB_0.3.8_x64-setup.exe.sig` },
      { name: 'NodaDB_0.3.8_x64_en-US.msi', url: `${GITHUB_REPO}/releases/download/v0.3.8/NodaDB_0.3.8_x64_en-US.msi`, size: '13 MB', sigUrl: `${GITHUB_REPO}/releases/download/v0.3.8/NodaDB_0.3.8_x64_en-US.msi.sig` },
    ],
    sourceZip: `${GITHUB_REPO}/archive/refs/tags/v0.3.8.zip`,
    sourceTarGz: `${GITHUB_REPO}/archive/refs/tags/v0.3.8.tar.gz`,
  },
  {
    version: '0.3.7',
    tag: 'v0.3.7',
    releaseDate: 'August 7, 2026',
    releaseUrl: `${GITHUB_REPO}/releases/tag/v0.3.7`,
    compareUrl: `${GITHUB_REPO}/compare/v0.3.6...v0.3.7`,
    summary: 'Maintenance release with security patches and binary size optimizations.',
    changes: [],
    assets: [
      { name: 'latest.json', url: `${GITHUB_REPO}/releases/download/v0.3.7/latest.json`, size: '4.02 KB' },
      { name: 'NodaDB-0.3.7-1.x86_64.rpm', url: `${GITHUB_REPO}/releases/download/v0.3.7/NodaDB-0.3.7-1.x86_64.rpm`, size: '12.4 MB', sigUrl: `${GITHUB_REPO}/releases/download/v0.3.7/NodaDB-0.3.7-1.x86_64.rpm.sig` },
      { name: 'NodaDB_0.3.7_amd64.AppImage', url: `${GITHUB_REPO}/releases/download/v0.3.7/NodaDB_0.3.7_amd64.AppImage`, size: '85.5 MB', sigUrl: `${GITHUB_REPO}/releases/download/v0.3.7/NodaDB_0.3.7_amd64.AppImage.sig` },
      { name: 'NodaDB_0.3.7_amd64.deb', url: `${GITHUB_REPO}/releases/download/v0.3.7/NodaDB_0.3.7_amd64.deb`, size: '12.4 MB', sigUrl: `${GITHUB_REPO}/releases/download/v0.3.7/NodaDB_0.3.7_amd64.deb.sig` },
      { name: 'NodaDB_0.3.7_x64-setup.exe', url: `${GITHUB_REPO}/releases/download/v0.3.7/NodaDB_0.3.7_x64-setup.exe`, size: '6.81 MB', sigUrl: `${GITHUB_REPO}/releases/download/v0.3.7/NodaDB_0.3.7_x64-setup.exe.sig` },
      { name: 'NodaDB_0.3.7_x64_en-US.msi', url: `${GITHUB_REPO}/releases/download/v0.3.7/NodaDB_0.3.7_x64_en-US.msi`, size: '9 MB', sigUrl: `${GITHUB_REPO}/releases/download/v0.3.7/NodaDB_0.3.7_x64_en-US.msi.sig` },
    ],
    sourceZip: `${GITHUB_REPO}/archive/refs/tags/v0.3.7.zip`,
    sourceTarGz: `${GITHUB_REPO}/archive/refs/tags/v0.3.7.tar.gz`,
  },
  {
    version: '0.3.6',
    tag: 'v0.3.6',
    releaseDate: 'August 1, 2026',
    releaseUrl: `${GITHUB_REPO}/releases/tag/v0.3.6`,
    compareUrl: `${GITHUB_REPO}/compare/v0.3.5...v0.3.6`,
    summary: 'Date range filter support and Datetime equals optimization.',
    changes: [
      { description: 'Add Date Range Support & Datetime Equals Optimization', author: 'ElvinEga', authorUrl: 'https://github.com/ElvinEga', prNumber: 13, prUrl: `${GITHUB_REPO}/pull/13` },
      { description: 'Migrate Date/Time Fields to Shadcn Calendar and Custom Time Picker', author: 'ElvinEga', authorUrl: 'https://github.com/ElvinEga', prNumber: 14, prUrl: `${GITHUB_REPO}/pull/14` },
      { description: 'Refactor font size class names for consistency', author: 'ElvinEga', authorUrl: 'https://github.com/ElvinEga', prNumber: 15, prUrl: `${GITHUB_REPO}/pull/15` },
      { description: 'Enhance date range support and refactor font size class names', author: 'ElvinEga', authorUrl: 'https://github.com/ElvinEga', prNumber: 16, prUrl: `${GITHUB_REPO}/pull/16` },
    ],
    assets: [
      { name: 'latest.json', url: `${GITHUB_REPO}/releases/download/v0.3.6/latest.json`, size: '4.02 KB' },
      { name: 'NodaDB-0.3.6-1.x86_64.rpm', url: `${GITHUB_REPO}/releases/download/v0.3.6/NodaDB-0.3.6-1.x86_64.rpm`, size: '12.4 MB', sigUrl: `${GITHUB_REPO}/releases/download/v0.3.6/NodaDB-0.3.6-1.x86_64.rpm.sig` },
      { name: 'NodaDB_0.3.6_amd64.AppImage', url: `${GITHUB_REPO}/releases/download/v0.3.6/NodaDB_0.3.6_amd64.AppImage`, size: '85.5 MB', sigUrl: `${GITHUB_REPO}/releases/download/v0.3.6/NodaDB_0.3.6_amd64.AppImage.sig` },
      { name: 'NodaDB_0.3.6_amd64.deb', url: `${GITHUB_REPO}/releases/download/v0.3.6/NodaDB_0.3.6_amd64.deb`, size: '12.4 MB', sigUrl: `${GITHUB_REPO}/releases/download/v0.3.6/NodaDB_0.3.6_amd64.deb.sig` },
      { name: 'NodaDB_0.3.6_x64-setup.exe', url: `${GITHUB_REPO}/releases/download/v0.3.6/NodaDB_0.3.6_x64-setup.exe`, size: '6.8 MB', sigUrl: `${GITHUB_REPO}/releases/download/v0.3.6/NodaDB_0.3.6_x64-setup.exe.sig` },
      { name: 'NodaDB_0.3.6_x64_en-US.msi', url: `${GITHUB_REPO}/releases/download/v0.3.6/NodaDB_0.3.6_x64_en-US.msi`, size: '8.99 MB', sigUrl: `${GITHUB_REPO}/releases/download/v0.3.6/NodaDB_0.3.6_x64_en-US.msi.sig` },
    ],
    sourceZip: `${GITHUB_REPO}/archive/refs/tags/v0.3.6.zip`,
    sourceTarGz: `${GITHUB_REPO}/archive/refs/tags/v0.3.6.tar.gz`,
  },
  {
    version: '0.3.5',
    tag: 'v0.3.5',
    releaseDate: 'July 23, 2026',
    releaseUrl: `${GITHUB_REPO}/releases/tag/v0.3.5`,
    compareUrl: `${GITHUB_REPO}/compare/v0.3.4...v0.3.5`,
    summary: 'Relationship flow query optimization and paginated data grids.',
    changes: [
      { description: 'Merging Development', author: 'ElvinEga', authorUrl: 'https://github.com/ElvinEga', prNumber: 10, prUrl: `${GITHUB_REPO}/pull/10` },
      { description: 'Optimize relation flow queries & add paginated data grids', author: 'ElvinEga', authorUrl: 'https://github.com/ElvinEga', prNumber: 11, prUrl: `${GITHUB_REPO}/pull/11` },
      { description: 'Merge to development', author: 'ElvinEga', authorUrl: 'https://github.com/ElvinEga', prNumber: 12, prUrl: `${GITHUB_REPO}/pull/12` },
    ],
    assets: [
      { name: 'latest.json', url: `${GITHUB_REPO}/releases/download/v0.3.5/latest.json`, size: '4.02 KB' },
      { name: 'NodaDB-0.3.5-1.x86_64.rpm', url: `${GITHUB_REPO}/releases/download/v0.3.5/NodaDB-0.3.5-1.x86_64.rpm`, size: '12.4 MB', sigUrl: `${GITHUB_REPO}/releases/download/v0.3.5/NodaDB-0.3.5-1.x86_64.rpm.sig` },
      { name: 'NodaDB_0.3.5_amd64.AppImage', url: `${GITHUB_REPO}/releases/download/v0.3.5/NodaDB_0.3.5_amd64.AppImage`, size: '85.5 MB', sigUrl: `${GITHUB_REPO}/releases/download/v0.3.5/NodaDB_0.3.5_amd64.AppImage.sig` },
      { name: 'NodaDB_0.3.5_amd64.deb', url: `${GITHUB_REPO}/releases/download/v0.3.5/NodaDB_0.3.5_amd64.deb`, size: '12.4 MB', sigUrl: `${GITHUB_REPO}/releases/download/v0.3.5/NodaDB_0.3.5_amd64.deb.sig` },
      { name: 'NodaDB_0.3.5_x64-setup.exe', url: `${GITHUB_REPO}/releases/download/v0.3.5/NodaDB_0.3.5_x64-setup.exe`, size: '6.79 MB', sigUrl: `${GITHUB_REPO}/releases/download/v0.3.5/NodaDB_0.3.5_x64-setup.exe.sig` },
      { name: 'NodaDB_0.3.5_x64_en-US.msi', url: `${GITHUB_REPO}/releases/download/v0.3.5/NodaDB_0.3.5_x64_en-US.msi`, size: '8.98 MB', sigUrl: `${GITHUB_REPO}/releases/download/v0.3.5/NodaDB_0.3.5_x64_en-US.msi.sig` },
    ],
    sourceZip: `${GITHUB_REPO}/archive/refs/tags/v0.3.5.zip`,
    sourceTarGz: `${GITHUB_REPO}/archive/refs/tags/v0.3.5.tar.gz`,
  },
  {
    version: '0.3.4',
    tag: 'v0.3.4',
    releaseDate: 'July 22, 2026',
    releaseUrl: `${GITHUB_REPO}/releases/tag/v0.3.4`,
    compareUrl: `${GITHUB_REPO}/compare/v0.3.3...v0.3.4`,
    summary: 'Desktop client improvements for macOS, Windows, and Linux.',
    changes: [],
    assets: [
      { name: 'latest.json', url: `${GITHUB_REPO}/releases/download/v0.3.4/latest.json`, size: '4.02 KB' },
      { name: 'NodaDB-0.3.4-1.x86_64.rpm', url: `${GITHUB_REPO}/releases/download/v0.3.4/NodaDB-0.3.4-1.x86_64.rpm`, size: '12.3 MB', sigUrl: `${GITHUB_REPO}/releases/download/v0.3.4/NodaDB-0.3.4-1.x86_64.rpm.sig` },
      { name: 'NodaDB_0.3.4_amd64.AppImage', url: `${GITHUB_REPO}/releases/download/v0.3.4/NodaDB_0.3.4_amd64.AppImage`, size: '85.5 MB', sigUrl: `${GITHUB_REPO}/releases/download/v0.3.4/NodaDB_0.3.4_amd64.AppImage.sig` },
      { name: 'NodaDB_0.3.4_amd64.deb', url: `${GITHUB_REPO}/releases/download/v0.3.4/NodaDB_0.3.4_amd64.deb`, size: '12.3 MB', sigUrl: `${GITHUB_REPO}/releases/download/v0.3.4/NodaDB_0.3.4_amd64.deb.sig` },
      { name: 'NodaDB_0.3.4_x64-setup.exe', url: `${GITHUB_REPO}/releases/download/v0.3.4/NodaDB_0.3.4_x64-setup.exe`, size: '6.71 MB', sigUrl: `${GITHUB_REPO}/releases/download/v0.3.4/NodaDB_0.3.4_x64-setup.exe.sig` },
      { name: 'NodaDB_0.3.4_x64_en-US.msi', url: `${GITHUB_REPO}/releases/download/v0.3.4/NodaDB_0.3.4_x64_en-US.msi`, size: '8.93 MB', sigUrl: `${GITHUB_REPO}/releases/download/v0.3.4/NodaDB_0.3.4_x64_en-US.msi.sig` },
    ],
    sourceZip: `${GITHUB_REPO}/archive/refs/tags/v0.3.4.zip`,
    sourceTarGz: `${GITHUB_REPO}/archive/refs/tags/v0.3.4.tar.gz`,
  },
  {
    version: '0.3.3',
    tag: 'v0.3.3',
    releaseDate: 'July 22, 2026',
    releaseUrl: `${GITHUB_REPO}/releases/tag/v0.3.3`,
    summary: 'NodaDB desktop builds for macOS, Windows, and Linux.',
    changes: [],
    assets: [
      { name: 'latest.json', url: `${GITHUB_REPO}/releases/download/v0.3.3/latest.json`, size: '4.07 KB' },
      { name: 'NodaDB-0.3.2-1.x86_64.rpm', url: `${GITHUB_REPO}/releases/download/v0.3.3/NodaDB-0.3.2-1.x86_64.rpm`, size: '12.3 MB' },
      { name: 'NodaDB_0.3.2_amd64.AppImage', url: `${GITHUB_REPO}/releases/download/v0.3.3/NodaDB_0.3.2_amd64.AppImage`, size: '85.5 MB' },
      { name: 'NodaDB_0.3.2_amd64.deb', url: `${GITHUB_REPO}/releases/download/v0.3.3/NodaDB_0.3.2_amd64.deb`, size: '12.3 MB' },
      { name: 'NodaDB_0.3.2_x64-setup.exe', url: `${GITHUB_REPO}/releases/download/v0.3.3/NodaDB_0.3.2_x64-setup.exe`, size: '6.71 MB' },
      { name: 'NodaDB_0.3.2_x64_en-US.msi', url: `${GITHUB_REPO}/releases/download/v0.3.3/NodaDB_0.3.2_x64_en-US.msi`, size: '8.93 MB' },
    ],
    sourceZip: `${GITHUB_REPO}/archive/refs/tags/v0.3.3.zip`,
    sourceTarGz: `${GITHUB_REPO}/archive/refs/tags/v0.3.3.tar.gz`,
  },
  {
    version: '0.3.2',
    tag: 'v0.3.2',
    releaseDate: 'July 17, 2026',
    releaseUrl: `${GITHUB_REPO}/releases/tag/v0.3.2`,
    summary: 'NodaDB desktop builds for macOS, Windows, and Linux.',
    changes: [],
    assets: [
      { name: 'latest.json', url: `${GITHUB_REPO}/releases/download/v0.3.2/latest.json`, size: '4.07 KB' },
      { name: 'NodaDB-0.3.2-1.x86_64.rpm', url: `${GITHUB_REPO}/releases/download/v0.3.2/NodaDB-0.3.2-1.x86_64.rpm`, size: '12.3 MB' },
      { name: 'NodaDB_0.3.2_amd64.AppImage', url: `${GITHUB_REPO}/releases/download/v0.3.2/NodaDB_0.3.2_amd64.AppImage`, size: '85.4 MB' },
      { name: 'NodaDB_0.3.2_amd64.deb', url: `${GITHUB_REPO}/releases/download/v0.3.2/NodaDB_0.3.2_amd64.deb`, size: '12.3 MB' },
      { name: 'NodaDB_0.3.2_x64-setup.exe', url: `${GITHUB_REPO}/releases/download/v0.3.2/NodaDB_0.3.2_x64-setup.exe`, size: '6.7 MB' },
      { name: 'NodaDB_0.3.2_x64_en-US.msi', url: `${GITHUB_REPO}/releases/download/v0.3.2/NodaDB_0.3.2_x64_en-US.msi`, size: '8.85 MB' },
    ],
    sourceZip: `${GITHUB_REPO}/archive/refs/tags/v0.3.2.zip`,
    sourceTarGz: `${GITHUB_REPO}/archive/refs/tags/v0.3.2.tar.gz`,
  },
  {
    version: '0.3.1',
    tag: 'v0.3.1',
    releaseDate: 'July 10, 2026',
    releaseUrl: `${GITHUB_REPO}/releases/tag/v0.3.1`,
    summary: 'Initial release build for desktop platforms.',
    changes: [],
    assets: [],
    sourceZip: `${GITHUB_REPO}/archive/refs/tags/v0.3.1.zip`,
    sourceTarGz: `${GITHUB_REPO}/archive/refs/tags/v0.3.1.tar.gz`,
  },
];

export function getLatestRelease(): Release {
  return RELEASES.find((r) => r.isLatest) || RELEASES[0];
}

export function getAllReleases(): Release[] {
  return RELEASES;
}

export function getReleaseByVersion(version: string): Release | undefined {
  return RELEASES.find((r) => r.version === version || r.tag === version || r.tag === `v${version}`);
}
