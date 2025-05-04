const planner = document.getElementById("planner");

const hours = [
  "9 AM", "10 AM", "11 AM", "12 PM",
  "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"
];

const currentHour = new Date().getHours();

hours.forEach((hourLabel, index) => {
  const hour = 9 + index; // 9 AM is starting point
  const savedTask = localStorage.getItem(`hour-${hour}`) || "";

  const timeBlock = document.createElement("div");
  timeBlock.className = "time-block";

  const hourDiv = document.createElement("div");
  hourDiv.className = "hour";
  hourDiv.textContent = hourLabel;

  const textArea = document.createElement("input");
  textArea.type = "text";
  textArea.className = "text";
  textArea.value = savedTask;

  // Add class based on time
  if (hour < currentHour) textArea.classList.add("past");
  else if (hour === currentHour) textArea.classList.add("present");
  else textArea.classList.add("future");

  const saveBtn = document.createElement("button");
  saveBtn.className = "saveBtn";
  saveBtn.textContent = "Save";
  saveBtn.onclick = () => {
    localStorage.setItem(`hour-${hour}`, textArea.value);
    alert("Task Saved!");
  };

  timeBlock.appendChild(hourDiv);
  timeBlock.appendChild(textArea);
  timeBlock.appendChild(saveBtn);
  planner.appendChild(timeBlock);
});
