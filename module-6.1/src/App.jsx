import { useActionState } from "react";
import "./App.css"
async function subscribeAction(prevState, formData) {
  const email = formData.get("email");

  
  await new Promise((resolve) => setTimeout(resolve, 2000));

  if (!email || !email.includes("@")) {
    return {
      status: "error",
      message: "Email ไม่ถูกต้อง"
    };
  }

  return {
    status: "success",
    message: "success"
  };
}

export default function NewsletterForm() {
  const [state, formAction, isPending] = useActionState(
    subscribeAction,
    { status: "", message: "" }
  );

  return (
    <form action={formAction}>
      <h2>สมัครรับข่าวสาร</h2>

      <input
        type="email"
        name="email"
        placeholder="กรอกอีเมล"
        required
      />

      <br /><br />

      <button type="submit" disabled={isPending}>
        {isPending ? "กำลังส่ง..." : "Submit"}
      </button>

      <p>
        {state.status === "success" && (
          <span style={{ color: "green" }}>
            {state.message}
          </span>
        )}

        {state.status === "error" && (
          <span style={{ color: "red" }}>
            {state.message}
          </span>
        )}
      </p>
    </form>
  );
}
