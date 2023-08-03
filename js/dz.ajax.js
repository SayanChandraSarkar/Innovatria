$(document).ready(function () {
  $("#contact_form").on("submit", function (e) {
    e.preventDefault(); // STOP default action
    $(".dzFormMsg").html(
      '<div class="gen alert alert-success">Submitting..</div>'
    );
    var dzFormAction = "submit.php"; // Update the PHP script URL here
    var dzFormData = $(this).serialize();

    $.ajax({
      method: "POST",
      url: dzFormAction,
      data: dzFormData,
      dataType: "json",
      success: function (response) {
        if (response.success === "OK") {
          $(".dzFormMsg").html(
            '<div class="gen alert alert-success">Form submitted successfully!</div>'
          );
        } else if (response.err) {
          $(".dzFormMsg").html(
            '<div class="err alert alert-danger">Error: ' +
              response.err +
              "</div>"
          );
        } else {
          $(".dzFormMsg").html(
            '<div class="err alert alert-danger">Unknown error occurred.</div>'
          );
        }

        setTimeout(function () {
          $(".dzFormMsg .alert").hide(1000);
        }, 10000);
      },
      error: function () {
        $(".dzFormMsg").html(
          '<div class="err alert alert-danger">Failed to submit the form.</div>'
        );

        setTimeout(function () {
          $(".dzFormMsg .alert").hide(1000);
        }, 10000);
      },
    });
  });
});
