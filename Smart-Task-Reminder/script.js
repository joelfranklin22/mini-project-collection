const form = document.getElementById("reminderForm");
const successMsg = document.getElementById("successMsg");
const taskType = document.getElementById("type");
const taskName = document.getElementById("title");

// ----------------------------
// PLACEHOLDER LOGIC
// ----------------------------
const placeholders = {
  "🧾 Bill Payment": "e.g. Water Bill, Semester Fees",
  "📚 Study Task": "e.g. Complete Chapter 5, Revise Physics",
  "🏢 Work/Office Task": "e.g. Finish Report, Attend Team Meeting",
  "🛒 Personal Errands": "e.g. Grocery Shopping, Buy Medicines",
  "💬 Call/Message Someone": "e.g. Call Mom, Message Boss",
  "⏳ Project Deadline": "e.g. Submit Website Project",
  "🧘 Self-Care / Habits": "e.g. 30-min Meditation, Morning Walk",
  "💼 Appointments": "e.g. Doctor at 10am, Dentist Visit",
};

taskType.addEventListener("change", () => {
  const selected = taskType.value;
  taskName.placeholder = placeholders[selected] || "e.g. Task Name";
});

// ----------------------------
// FORM SUBMISSION
// ----------------------------
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    task_type: document.getElementById("type").value,
    task_name: document.getElementById("title").value,
    due_datetime: document.getElementById("datetime").value,
    email: document.getElementById("email").value,
    reminder_message: document.getElementById("message").value,
  };

  try {
      const webhookURL =
      "https://4ecc9f0e7db7868ea6e10ba74fa07786.n8n.selfmade.codes/webhook/Remainder_Task";

    const response = await fetch(webhookURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const text = await response.text();
      successMsg.textContent = text;
    } else {
      successMsg.textContent = "❌ Failed to send reminder!";
    }
  } catch (error) {
    console.error("Error:", error);
    successMsg.textContent = "🚫 Could not connect to server.";
  }

  setTimeout(() => {
    location.reload();
  }, 3000);
});
