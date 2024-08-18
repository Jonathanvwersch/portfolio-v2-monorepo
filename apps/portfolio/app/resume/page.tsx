import { RESUME_LINK } from "@/constants/resume";
import { redirect } from "next/navigation";

export default function Resume() {
  redirect(RESUME_LINK);
}
