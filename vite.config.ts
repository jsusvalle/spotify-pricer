import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
    plugins: [react()],
    resolve: {
      alias: {
        app: resolve(__dirname, 'src', 'app'),
        components: resolve(__dirname, 'src', 'components'),
        hooks: resolve(__dirname, 'src', 'hooks'),
        infrastructure: resolve(__dirname, 'src', 'infrastructure'),
        models: resolve(__dirname, 'src', 'models'),
        helpers: resolve(__dirname, 'src', 'helpers'),
      },
    },
  };
});
