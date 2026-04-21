import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
  input: 'http://localhost:8080/openapi.json',
  output: 'src/shared/api/client',
  plugins: [
    { name: '@tanstack/vue-query' },
    { name: '@hey-api/client-axios', throwOnError: true },
    {
      name: '@hey-api/typescript',
      enums: 'typescript',
      exportInlineEnums: true,
    },
    { name: '@hey-api/sdk', asClass: true },
    'zod',
  ],
});
