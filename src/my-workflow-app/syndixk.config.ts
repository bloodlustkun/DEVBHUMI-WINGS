/**
 * Syndixk Framework Configuration
 * Metasyndikate Company © 2025
 * 
 * Core framework configuration and metadata
 */

export const SyndixkConfig = {
  framework: {
    name: "Syndixk Framework",
    version: "1.0.0",
    company: "Metasyndikate Company",
    license: "MIT",
  },
  features: {
    routing: true,
    stateManagement: true,
    componentLibrary: true,
    animations: true,
    forms: true,
  },
  build: {
    optimization: true,
    minification: true,
    treeshaking: true,
  },
  development: {
    hotReload: true,
    devTools: true,
    debugging: true,
  },
} as const;

export type SyndixkFrameworkConfig = typeof SyndixkConfig;

export default SyndixkConfig;
