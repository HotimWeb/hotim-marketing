async function contact(e) {
  const service_id = "service_whpnunn";
  const template_id = "template_jejyuu8";
  const public_key = "BbGvDv78bM42pVJQo";

  e.preventDefault();

  const success =
    "Request has been sent and will be responded within 24hours, if not responded to, please resend";

  const error =
    "Sorry, there was an error sending your message. Please try again later.";

  const f = document.getElementById("first_name")?.value;
  const l = document.getElementById("last_name")?.value;
  const email = document.getElementById("contact_email")?.value;
  const p = document.getElementById("position")?.value;
  const c = document.getElementById("company_email")?.value;
  const w = document.getElementById("website_url")?.value;
  const m = document.getElementById("phone")?.value;
  const h = document.getElementById("help")?.value;

  emailjs
    .send(
      service_id,
      template_id,
      {
        f,
        l,
        e: email,
        p,
        m,
        c,
        w,
        h,
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
