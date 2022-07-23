const validateFields = (form, fieldsArray) => {
 
  fieldsArray.forEach((field) => {
    field.removeClass("input-error");
    if (field.val().trim() === "") {
      field.addClass("input-error");
    }
  });

  const errorFields = form.find(".input-error");

  return errorFields.length === 0;  
}

$(".form").submit(e => {
  e.preventDefault();

  const form = $(e.currentTarget);
  const name = form.find("[name='name']");
  const email = form.find("[name='email']");
  const comment = form.find("[name='comment']");
  const modal = $("#modal");
  const content = modal.find(".modal__content");

  modal.removeClass("error-modal");

  const isValid = validateFields(form, [name, email, comment]);

  if (isValid) {
    const request = $.ajax({
      url: "https://usebasin.com/f/2ddc06121992",
      method: "post",
      data: {
        name: name.val(),
        email: email.val(),
        comment: comment.val(),
      },
    });

    request.done(data => {
      content.text(data.message)
      modal.addClass("success-modal");
    });

    request.fail(data => {
      const message = data.responseJSON.message;
      content.text(message);
      modal.addClass("error-modal");
    });

    request.always(() => {
      $.fancybox.open({
        src: "#modal",
        type: "inline",
        smallBtn: false
      });
    });
  }
});

$(".app-submit-btn").click(e => {
  e.preventDefault();

  $.fancybox.close();
})