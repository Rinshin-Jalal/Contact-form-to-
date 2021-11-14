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
  let webhook = "Your webhook URL"

  let body = {
    embeds: [
      {
        title: `You have a message from ${name.value}`,
        description: `${subject.value}\nhis/her email: ${email.value}`,
      },
    ],
  };

  fetch(webhook,
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
