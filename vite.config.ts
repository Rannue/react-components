import react from '@vitejs/plugin-react';
import { UserConfig } from 'vite';

interface MyConfig extends UserConfig {
  test?: {
    globals?: boolean;
    environment?: string;
    setupFiles?: string;
    coverage?: {
      enabled: boolean;
      provider: string;
      reporter: string;
      all: boolean;
      include: string[];
      exclude: string[];
    };
  };
}

// https://vitejs.dev/config/
const config: MyConfig = {
  plugins: [react()],
  resolve: {
    alias: {
      src: '/src',
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setupTests.ts',
    coverage: {
      enabled: true,
      provider: 'c8',
      reporter: 'text',
      all: true,
      include: ['src//'],
      exclude: [
        'src/setupTests.ts',
        'src/vite-env.d.ts',
        'src/assets/index.d.ts',
        'src/assets/data.ts',
        'src/components/footer.tsx',
        'src/index.tsx',
        'src/tests',
        'src/pages/home-page/data.tsx',
      ],
    },
  },
};

export default config;
