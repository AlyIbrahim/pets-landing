self.addEventListener("push", () => {
  self.registration.sendNotification("Hello From SW !!");
});
