window.onload = function () {
  let form = document.getElementById("contact-form");
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let subject = document.getElementById("subject");

  form.onsubmit = function (e) {
    e.preventDefault();

    sendToDiscord(name, email, subject);
  };
};

function sendToDiscord(name, email, subject) {
  let body = {
    embeds: [
      {
        title: `You have a message from ${name.value}`,
        description: `${subject.value}\nhis/her email: ${email.value}`,
      },
    ],
  };

  fetch(
    "https://discord.com/api/webhooks/909148042425421926/2m4-qByReV4LHdnXHGO21qWmJOwEEkRplTqRGgoLvR2wiUPRwfV4Br8suTWyB0YwKZ1O",
    {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  )
    .then((res) => res.json())
    .then((data) => console.log(data));
}
