import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    output:"static",
    site:"http://localhost:4321",
    vite: {
        build: {
            sourcemap: false,
        },
    },
});
