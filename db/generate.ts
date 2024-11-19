#!/usr/bin/env -S pnpm tsx

import { existsSync } from 'node:fs';
import { join, parse } from 'node:path';
import { defineCommand, runMain } from 'citty';

const main = defineCommand({
  meta: {
    name: 'generate',
    version: '1.0.0',
    description: 'tocfl-master db',
  },
  args: {
    version: {
      type: 'positional',
      description: 'Vocabulary list version',
      required: true,
    },
  },
  async run({ args }) {
    let filename = args.version;

    const parsedPath = parse(filename);
    if (!parsedPath.ext) {
      filename += '.xlsx';
    }

    const filepath = join(import.meta.dirname, 'raw', filename);

    if (!existsSync(filepath)) {
      console.log(`File ${filename} not found`);
      return;
    }

    const version = Number(parsedPath.name);

    console.log('TOCFL version:', version);
    console.log('PARSE version:', 1);

    try {
      const response = await import('./lib/v1/parse.ts')
        .then(m => m.default(filepath));
      console.log(response);
    }
    catch (error) {
      console.log('Failed to parse file:', error instanceof Error
        ? error.message
        : error);
    }
  },
});

runMain(main);
