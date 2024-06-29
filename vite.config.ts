import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react-swc';
import basicSsl from '@vitejs/plugin-basic-ssl';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/reactjs-template/', // Убедитесь, что этот путь соответствует вашему репозиторию на GitHub Pages
  plugins: [
    react(),
    tsconfigPaths(),
    basicSsl(),
  ],
  publicDir: './public',
  server: {
    host: true,
  },
});
