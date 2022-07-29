self.addEventListener("push", (event) => {
    // console.log(event);
    console.log(event.data.text());
    //    let data = event.data.json();
    let data = event.data.text();
    const options = {
        body: data,
        //      body: "OPTIONS.BODY",
    }
    event.waitUntil(self.registration.showNotification(
        //    self.registration.showNotification(
        // data.title,
        "Tenant Creation Update",
        options
    ));
})