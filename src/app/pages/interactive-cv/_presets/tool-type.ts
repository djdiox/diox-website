/*
 * Represents the type of tools
 */

export enum ToolType {
  OS = 'OS',
  IDE = 'IDE',
  framework = 'framework',
  database = 'database',
  office = 'office',
  management = 'management',
  development = 'development'
}


const types = Object.keys(ToolType);

export const Types = types;
