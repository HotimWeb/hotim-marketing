async function join(e) {
  const service_id = "service_yyofw7k";
  const template_id = "template_ltm0e0s";
  const public_key = "BbGvDv78bM42pVJQo";

  e.preventDefault();

  const success =
    "Request has been sent and will be responded within 24hours, if not responded to, please resend";

  const error =
    "Sorry, there was an error sending your message. Please try again later.";

  const name = document.getElementById("name_user")?.value;
  const email = document.getElementById("email")?.value;

  emailjs
    .send(
      service_id,
      template_id,
      {
        type: "Newsletter",
        email,
        name,
      },
      public_key,
    )
    .then(() => {
      alert(success);
    })
    .catch((e) => {
      console.error(e);
      alert(error);
    });
}
