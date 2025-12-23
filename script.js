const students = [
    { name: "John Doe", class: "Grade 10", time: "08:25 AM", status: "Late" },
    { name: "Mary Smith", class: "Grade 9", time: "08:05 AM", status: "On Time" },
    { name: "David Johnson", class: "Grade 11", time: "08:30 AM", status: "Late" }
];

const table = document.getElementById("studentTable");

students.forEach(student => {
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${student.name}</td>
        <td>${student.class}</td>
        <td>${student.time}</td>
        <td class="${student.status === 'Late' ? 'late' : 'on-time'}">
            ${student.status}
        </td>
    `;

    table.appendChild(row);
});

function sendNotification() {
    const notificationList = document.getElementById("notifications");

    students
        .filter(s => s.status === "Late")
        .forEach(s => {
            const li = document.createElement("li");
            li.textContent = `Notification sent to ${s.name}'s parent`;
            notificationList.appendChild(li);
        });

    alert("Notifications sent to parents of late students.");
}
