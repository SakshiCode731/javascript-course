// Callbacks
function loadScript(src, callback) {
  var script = document.createElement("script");
  script.src = src;

  script.onload = function () {
    console.log("Loaded script with SRC: " + src);
    callback(null, src);
  };

  script.onerror = function () {
    console.log("Error loading script with SRC: " + src);
    callback(new Error("Src got some error"), src);
  };

  document.body.appendChild(script);
}

function hello(error, src) {
  if (error) {
    console.log(error);
    return;
  }
  alert("Hello World! " + src);
}

// first script
loadScript(
  "https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap1.bundle.min.js",
  function goodmorning(error, src) {
    if (error) {
      console.log(error);
      sendEmergencyMessageToCeo();
      return;
    }

    // second script
    loadScript(
      "https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap2.bundle.min.js",
      function hello(error, src) {
        if (error) {
          console.log(error);
          sendEmergencyMessageToCeo();
          return;
        }

        // third script
        loadScript(
          "https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap3.bundle.min.js",
          function hello(error, src) {
            if (error) {
              console.log(error);
              sendEmergencyMessageToCeo();
              return;
            }

            loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap4.bundle.min.js",
              function hello(error, src) {
                if (error) {
                  console.log(error);
                  sendEmergencyMessageToCeo();
                  return;
                }

                 loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap4.bundle.min.js",
              function hello(error, src) {
                if (error) {
                  console.log(error);
                  sendEmergencyMessageToCeo();
                  return;
                }

            // fourth script
            loadScript(
              "https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap5.bundle.min.js",
              goodmorning
            );
          }
        );
      }
    );
  }
)
  }
);
  })

