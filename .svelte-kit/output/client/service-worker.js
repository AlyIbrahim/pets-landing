self.addEventListener("push", (t) => {
  console.log(t.data.text());
  const a = {
    body: t.data.text()
  };
  t.waitUntil(self.registration.showNotification("Tenant Creation Update", a));
});
