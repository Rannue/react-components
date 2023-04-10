// vite.config.ts
import react from "file:///home/rannue/react/gg/react-components/node_modules/@vitejs/plugin-react/dist/index.mjs";
var config = {
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src"
    }
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/tests/setupTests.ts",
    coverage: {
      enabled: true,
      provider: "c8",
      reporter: "text",
      all: true,
      include: ["src//"],
      exclude: [
        "src/setupTests.ts",
        "src/vite-env.d.ts",
        "src/assets/index.d.ts",
        "src/assets/data.ts",
        "src/components/footer.tsx",
        "src/index.tsx",
        "src/tests"
      ]
    }
  }
};
var vite_config_default = config;
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9yYW5udWUvcmVhY3QvZ2cvcmVhY3QtY29tcG9uZW50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvcmFubnVlL3JlYWN0L2dnL3JlYWN0LWNvbXBvbmVudHMvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvcmFubnVlL3JlYWN0L2dnL3JlYWN0LWNvbXBvbmVudHMvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuaW1wb3J0IHsgVXNlckNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuXG5pbnRlcmZhY2UgTXlDb25maWcgZXh0ZW5kcyBVc2VyQ29uZmlnIHtcbiAgdGVzdD86IHtcbiAgICBnbG9iYWxzPzogYm9vbGVhbjtcbiAgICBlbnZpcm9ubWVudD86IHN0cmluZztcbiAgICBzZXR1cEZpbGVzPzogc3RyaW5nO1xuICAgIGNvdmVyYWdlPzoge1xuICAgICAgZW5hYmxlZDogYm9vbGVhbjtcbiAgICAgIHByb3ZpZGVyOiBzdHJpbmc7XG4gICAgICByZXBvcnRlcjogc3RyaW5nO1xuICAgICAgYWxsOiBib29sZWFuO1xuICAgICAgaW5jbHVkZTogc3RyaW5nW107XG4gICAgICBleGNsdWRlOiBzdHJpbmdbXTtcbiAgICB9O1xuICB9O1xufVxuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuY29uc3QgY29uZmlnOiBNeUNvbmZpZyA9IHtcbiAgcGx1Z2luczogW3JlYWN0KCldLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgIHNyYzogJy9zcmMnLFxuICAgIH0sXG4gIH0sXG4gIHRlc3Q6IHtcbiAgICBnbG9iYWxzOiB0cnVlLFxuICAgIGVudmlyb25tZW50OiAnanNkb20nLFxuICAgIHNldHVwRmlsZXM6ICcuL3NyYy90ZXN0cy9zZXR1cFRlc3RzLnRzJyxcbiAgICBjb3ZlcmFnZToge1xuICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgIHByb3ZpZGVyOiAnYzgnLFxuICAgICAgcmVwb3J0ZXI6ICd0ZXh0JyxcbiAgICAgIGFsbDogdHJ1ZSxcbiAgICAgIGluY2x1ZGU6IFsnc3JjLy8nXSxcbiAgICAgIGV4Y2x1ZGU6IFtcbiAgICAgICAgJ3NyYy9zZXR1cFRlc3RzLnRzJyxcbiAgICAgICAgJ3NyYy92aXRlLWVudi5kLnRzJyxcbiAgICAgICAgJ3NyYy9hc3NldHMvaW5kZXguZC50cycsXG4gICAgICAgICdzcmMvYXNzZXRzL2RhdGEudHMnLFxuICAgICAgICAnc3JjL2NvbXBvbmVudHMvZm9vdGVyLnRzeCcsXG4gICAgICAgICdzcmMvaW5kZXgudHN4JyxcbiAgICAgICAgJ3NyYy90ZXN0cycsXG4gICAgICBdLFxuICAgIH0sXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25maWc7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW9TLE9BQU8sV0FBVztBQW9CdFQsSUFBTSxTQUFtQjtBQUFBLEVBQ3ZCLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFBQSxFQUNqQixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLO0FBQUEsSUFDUDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLE1BQU07QUFBQSxJQUNKLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxJQUNiLFlBQVk7QUFBQSxJQUNaLFVBQVU7QUFBQSxNQUNSLFNBQVM7QUFBQSxNQUNULFVBQVU7QUFBQSxNQUNWLFVBQVU7QUFBQSxNQUNWLEtBQUs7QUFBQSxNQUNMLFNBQVMsQ0FBQyxPQUFPO0FBQUEsTUFDakIsU0FBUztBQUFBLFFBQ1A7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRjtBQUVBLElBQU8sc0JBQVE7IiwKICAibmFtZXMiOiBbXQp9Cg==
