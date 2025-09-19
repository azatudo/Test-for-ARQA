// /app/page.tsx
import { redirect } from "next/navigation";

export default function HomePage() {
  // Если нужно сразу на /dashboard без добавления локали
  redirect("/dashboard");
}