import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true, // 개발 서버 실행 시 자동으로 브라우저 열기
  },
});
